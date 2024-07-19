// components/forms/AddClientForm.tsx

"use client"; // Add this line at the top

import React, { useState } from "react";

const AddClientForm = () => {
  const [status, setStatus] = useState("Active");

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
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
                htmlFor="name"
                className="block text-sm font-medium text-black"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-black"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-black"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-black"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="suburb"
                className="block text-sm font-medium text-black"
              >
                Suburb
              </label>
              <input
                type="text"
                id="suburb"
                className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="postcode"
                className="block text-sm font-medium text-black"
              >
                Post code
              </label>
              <input
                type="text"
                id="postcode"
                className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-black"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-black"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
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
              Add Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClientForm;
