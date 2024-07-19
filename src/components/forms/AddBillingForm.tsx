// AddBillingForm.tsx

"use client";
import React, { useState, useEffect } from "react";
import { Client } from "@/types/billingdatatypes";
import { clients } from "@/types/sampledata";

const AddBillingForm: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [billingCurrency, setBillingCurrency] = useState<string>("");
  const [earliestDueDate, setEarliestDueDate] = useState<Date | null>(null);
  const [billingTerm, setBillingTerm] = useState<string>("");

  const handleClientChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const clientId = Number(event.target.value);
    const client = clients.find((c) => c.id === clientId) || null;
    setSelectedClient(client);
    setSelectedServices([]); // Reset selected services when client changes
  };

  const handleServiceSelection = (serviceId: number) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId],
    );
  };

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setBillingCurrency(event.target.value);
  };

  const handleTermChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBillingTerm(event.target.value);
  };

  useEffect(() => {
    if (selectedClient) {
      const selectedDueDates = selectedClient.services
        .filter((service) => selectedServices.includes(service.id))
        .map((service) => service.dueDate);

      if (selectedDueDates.length > 0) {
        const earliest = new Date(
          Math.min(...selectedDueDates.map((date) => date.getTime())),
        );
        setEarliestDueDate(earliest);
      } else {
        setEarliestDueDate(null);
      }
    }
  }, [selectedClient, selectedServices]);

  const handleSave = () => {
    const billingData = {
      client: selectedClient,
      services: selectedServices,
      currency: billingCurrency,
      term: billingTerm,
      startDate: earliestDueDate,
    };
    console.log("Billing Data:", billingData);
    // You can add further logic to save billingData to your backend or state management
  };

  const isSaveButtonVisible =
    selectedClient && billingTerm && billingCurrency && earliestDueDate;

  return (
    <div>
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <label
                htmlFor="client"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Select Client
              </label>
              <select
                id="client"
                onChange={handleClientChange}
                className="border-gray-300 mt-1 block w-full rounded-md text-center shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="" className="text-center">
                  -- Select Client --
                </option>
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="term"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Term
              </label>
              <select
                id="term"
                onChange={handleTermChange}
                className="border-gray-300 mt-1 block w-full rounded-md text-center shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="" className="text-center">
                  -- Select Term --
                </option>
                <option value="2 years">2 years</option>
                <option value="Yearly">Yearly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="currency"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Billing Currency
              </label>
              <select
                id="currency"
                onChange={handleCurrencyChange}
                className="border-gray-300 mt-1 block w-full rounded-md text-center shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="" className="text-center">
                  -- Select Billing Currency --
                </option>
                <option value="LKR">LKR</option>
                <option value="AUD">AUD</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>

          {selectedClient && (
            <table className="min-w-full bg-white">
              <thead className="bg-gray-2 text-left text-black dark:bg-meta-4">
                <tr>
                  <th className="w-1/12 px-4 py-3 text-left text-sm font-semibold uppercase"></th>
                  <th className="w-2/12 px-4 py-3 text-left text-sm font-semibold uppercase">
                    Service ID
                  </th>
                  <th className="w-4/12 px-4 py-3 text-left text-sm font-semibold uppercase">
                    Description
                  </th>
                  <th className="w-2/12 px-4 py-3 text-left text-sm font-semibold uppercase">
                    Due Date
                  </th>
                  <th className="w-2/12 px-4 py-3 text-left text-sm font-semibold uppercase">
                    Amount
                  </th>
                  <th className="w-2/12 px-4 py-3 text-left text-sm font-semibold uppercase">
                    Currency
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {selectedClient.services.map((service) => (
                  <tr key={service.id}>
                    <td className="px-4 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service.id)}
                        onChange={() => handleServiceSelection(service.id)}
                      />
                    </td>
                    <td className="px-4 py-3 text-left">{service.id}</td>
                    <td className="px-4 py-3 text-left">
                      {service.description}
                    </td>
                    <td className="px-4 py-3 text-left">
                      {service.dueDate.toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-left">{service.amount}</td>
                    <td className="px-4 py-3 text-left">{service.currency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="mt-4">
            {earliestDueDate && (
              <div>
                <p className=" text-black dark:text-white">
                  Start Date: {earliestDueDate.toLocaleDateString()}
                </p>
              </div>
            )}
          </div>

          {isSaveButtonVisible && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleSave}
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddBillingForm;
