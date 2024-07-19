"use client";

import React, { useState } from "react";

const AddServiceForm = () => {
  const [status, setStatus] = useState("Active");
  const [category, setCategory] = useState("Domain");

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setCategory(event.target.value);
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500";
      case "Inactive":
        return "bg-red-500";
      case "Pending":
        return "bg-yellow-500";
      default:
        return "";
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <form>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex-1">
              <label
                htmlFor="ClientID"
                className="block text-sm font-medium text-black"
              >
                Client ID
              </label>
              <input
                type="text"
                id="ClientID"
                className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="ServiceCategory"
                className="block text-sm font-medium text-black"
              >
                Service Category
              </label>
              <select
                id="ServiceCategory"
                value={category}
                onChange={handleCategoryChange}
                className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              >
                <option value="Domain">Domain</option>
                <option value="SSL">SSL</option>
                <option value="Host">Host</option>
              </select>
            </div>
            <div className="flex-1">
              <label
                htmlFor="Description"
                className="block text-sm font-medium text-black"
              >
                Description
              </label>
              <input
                type="text"
                id="Description"
                className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="Amount"
                className="block text-sm font-medium text-black"
              >
                Amount
              </label>
              <input
                type="text"
                id="Amount"
                className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="Currency"
                className="block text-sm font-medium text-black"
              >
                Currency
              </label>
              <input
                type="text"
                id="Currency"
                className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="StartDate"
                className="block text-sm font-medium text-black"
              >
                Start Date
              </label>
              <input
                type="date"
                id="StartDate"
                className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="EndDate"
                className="block text-sm font-medium text-black"
              >
                End Date
              </label>
              <input
                type="date"
                id="EndDate"
                className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="BillingTerm"
                className="block text-sm font-medium text-black"
              >
                Billing Term
              </label>
              <input
                type="text"
                id="BillingTerm"
                className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-black"
              >
                Status
              </label>
              <select
                id="status"
                value={status}
                onChange={handleStatusChange}
                className={`border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${getStatusClass(status)}`}
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="mx-auto rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServiceForm;
