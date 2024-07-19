// AddInvoiceForm.tsx

"use client";
import React, { useState } from "react";

const AddInvoiceForm: React.FC = () => {
  const [invoiceData, setInvoiceData] = useState({
    name: "",
    invoiceFor: "",
    invoiceType: "To be Invoiced",
    dueDate: "",
    amount: "",
    paidDate: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setInvoiceData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Invoice Data:", invoiceData);
    // Add your submit logic here (e.g., send data to your backend)
  };

  return (
    <div>
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="invoiceType"
              className="block text-sm font-medium text-black dark:text-white"
            >
              Invoice Type
            </label>
            <select
              id="invoiceType"
              name="invoiceType"
              value={invoiceData.invoiceType}
              onChange={handleChange}
              className="border-gray-300 mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            >
              <option value="To be Invoiced">To be Invoiced</option>
              <option value="Pending Invoices">Pending Invoices</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={invoiceData.name}
              onChange={handleChange}
              className="border-gray-300 mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="invoiceFor"
              className="block text-sm font-medium text-black dark:text-white"
            >
              Invoice for
            </label>
            <textarea
              id="invoiceFor"
              name="invoiceFor"
              value={invoiceData.invoiceFor}
              onChange={handleChange}
              className="border-gray-300 mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="dueDate"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={invoiceData.dueDate}
                onChange={handleChange}
                className="border-gray-300 mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label
                htmlFor="paidDate"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Paid Date
              </label>
              <input
                type="date"
                id="paidDate"
                name="paidDate"
                value={invoiceData.paidDate}
                onChange={handleChange}
                className="border-gray-300 mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-black dark:text-white"
            >
              Amount
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={invoiceData.amount}
              onChange={handleChange}
              className="border-gray-300 mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            >
              Save Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInvoiceForm;
