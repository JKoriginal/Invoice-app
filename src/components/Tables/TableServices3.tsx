"use client";

import React, { useState } from "react";
import { Services } from "@/types/services";
import DeleteConfirmation from "@/app/ui/alerts/ServiceDeleteconfirmation";

const servicesData: Services[] = [
  {
    no: 5001,
    name: "Manjula kulathunga",
    service: "SSL",
    start_Date: new Date("2023-01-01"),
    Amount: 25000,
    Term: "Yearly",
    status: "Active",
  },
  {
    no: 5002,
    name: "Supun kulathunga",
    service: "Host",
    start_Date: new Date("2023-02-01"),
    Amount: 25000,
    Term: "2 years",
    status: "Active",
  },
  {
    no: 5003,
    name: "Saman kulathunga",
    service: "Domain",
    start_Date: new Date("2023-03-01"),
    Amount: 25000,
    Term: "Yearly",
    status: "Active",
  },
  {
    no: 5004,
    name: "Haritha kulathunga",
    start_Date: new Date("2023-04-01"),
    service: "SSL",
    Amount: 25000,
    Term: "2 years",
    status: "Inactive",
  },
  {
    no: 5005,
    name: "Haritha kulathunga",
    start_Date: new Date("2023-04-01"),
    service: "Domain",
    Amount: 25000,
    Term: "2 years",
    status: "Inactive",
  },
];

const TableServices3 = () => {
  const [services, setServices] = useState(servicesData);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingService, setEditingService] = useState<Partial<Services>>({});
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState<number | null>(null);

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    setEditingService(services[index]);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: keyof Services,
  ) => {
    const value =
      field === "start_Date"
        ? new Date(event.target.value)
        : event.target.value;

    setEditingService({
      ...editingService,
      [field]: event.target.value,
    });
  };

  const handleSaveClick = () => {
    if (editingIndex !== null) {
      const updatedServices = [...services];
      updatedServices[editingIndex] = editingService as Services;
      setServices(updatedServices);
      setEditingIndex(null);
    }
  };

  const handleDeleteClick = (index: number) => {
    setServiceToDelete(index);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    if (serviceToDelete !== null) {
      const updatedServices = services.filter((_, i) => i !== serviceToDelete);
      setServices(updatedServices);
      setServiceToDelete(null);
      setShowDeleteConfirmation(false);
    }
  };

  const cancelDelete = () => {
    setServiceToDelete(null);
    setShowDeleteConfirmation(false);
  };

  return (
    <div>
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 bg-blue-500 text-center text-xl font-semibold text-black dark:text-white">
          SSL
        </h4>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[50px] px-4 py-2 font-medium text-black dark:text-white xl:pl-11">
                  No
                </th>
                <th className="min-w-[200px] px-4 py-2 text-left font-medium text-black dark:text-white">
                  Name
                </th>
                <th className="min-w-[50px] px-4 py-2 text-left font-medium text-black dark:text-white">
                  Description
                </th>
                <th className="min-w-[120px] px-4 py-2 text-left font-medium text-black dark:text-white">
                  Start Date
                </th>
                <th className="min-w-[150px] px-4 py-2 text-left font-medium text-black dark:text-white">
                  Amount
                </th>
                <th className="min-w-[120px] px-4 py-2 text-left font-medium text-black dark:text-white">
                  Term
                </th>
                <th className="min-w-[80px] px-4 py-2 font-medium text-black dark:text-white">
                  Status
                </th>
                <th className="px-4 py-2 font-medium text-black dark:text-white"></th>
              </tr>
            </thead>
            <tbody>
              {services.map((services, index) => (
                <tr key={index}>
                  {editingIndex === index ? (
                    <>
                      <td className="border-b border-[#eee] px-4 py-2 pl-9 dark:border-strokedark xl:pl-11">
                        <input
                          type="text"
                          value={editingService.no || ""}
                          onChange={(e) => handleInputChange(e, "no")}
                          className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </td>
                      <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                        <input
                          type="text"
                          value={editingService.name || ""}
                          onChange={(e) => handleInputChange(e, "name")}
                          className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </td>
                      <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                        <input
                          type="text"
                          value={editingService.service || ""}
                          onChange={(e) => handleInputChange(e, "service")}
                          className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </td>
                      <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                        <input
                          type="date"
                          value={
                            editingService.start_Date instanceof Date
                              ? editingService.start_Date
                                  .toISOString()
                                  .split("T")[0]
                              : ""
                          }
                          onChange={(e) => handleInputChange(e, "start_Date")}
                          className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </td>
                      <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                        <input
                          type="number"
                          value={editingService.Amount || ""}
                          onChange={(e) => handleInputChange(e, "Amount")}
                          className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </td>

                      <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                        <input
                          type="text"
                          value={editingService.Term || ""}
                          onChange={(e) => handleInputChange(e, "Term")}
                          className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </td>
                      <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                        <select
                          value={editingService.status || ""}
                          onChange={(e) => handleInputChange(e, "status")}
                          className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                          <option value="Pending">Pending</option>
                        </select>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                        <button
                          onClick={handleSaveClick}
                          className="text-primary"
                        >
                          Save
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="border-b border-[#eee] px-4 py-2 pl-9 dark:border-strokedark xl:pl-11">
                        <h5 className="font-medium text-black dark:text-white">
                          {services.no}
                        </h5>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {services.name}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {services.service}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {new Date(services.start_Date).toLocaleDateString()}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          Rs.{services.Amount}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {services.Term}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                        <p
                          className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                            services.status === "Active"
                              ? "bg-success text-success"
                              : services.status === "Inactive"
                                ? "bg-danger text-danger"
                                : "bg-warning text-warning"
                          }`}
                        >
                          {services.status}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-2 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <button
                            onClick={() => handleEditClick(index)}
                            className="hover:text-primary"
                          >
                            <svg
                              className="fill-current"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.25 12.375V15.75H5.625L14.3812 6.99375L11.0062 3.61875L2.25 12.375ZM16.6313 4.74375C17.025 4.35 17.025 3.71875 16.6313 3.325L14.675 1.36875C14.2812 0.975 13.65 0.975 13.2562 1.36875L11.925 2.7L15.3 6.075L16.6313 4.74375Z"
                                fill=""
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDeleteClick(index)}
                            className="hover:text-primary"
                          >
                            <svg
                              className="fill-current"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.85315 13.9785 3.96565V4.8094C13.9785 4.9219 13.866 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.9219 4.02227 4.8094V3.96565ZM12.8316 15.3969C12.8035 15.9563 12.3098 16.4063 11.7504 16.4063H6.29414C5.73477 16.4063 5.24102 15.9563 5.21289 15.3969L4.76914 6.24377H13.2754L12.8316 15.3969Z"
                                fill=""
                              />
                              <path
                                d="M8.99991 7.09668C8.67278 7.09668 8.40353 7.36593 8.40353 7.69306V13.6687C8.40353 13.9958 8.67278 14.2651 8.99991 14.2651C9.32703 14.2651 9.59628 13.6687 9.59628 13.6687V7.69306C9.59628 7.36593 9.32703 7.09668 8.99991 7.09668ZM11.8652 7.09668C11.538 7.09668 11.2688 7.36593 11.2688 7.69306V13.6687C11.2688 13.9958 11.538 14.2651 11.8652 14.2651C12.1923 14.2651 12.4616 13.9958 12.4616 13.6687V7.69306C12.4616 7.36593 12.1923 7.09668 11.8652 7.09668ZM6.13464 7.09668C5.80752 7.09668 5.53827 7.36593 5.53827 7.69306V13.6687C5.53827 13.9958 5.80752 14.2651 6.13464 14.2651C6.46177 14.2651 6.73102 13.9958 6.73102 13.6687V7.69306C6.73102 7.36593 6.46177 7.09668 6.13464 7.09668Z"
                                fill=""
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showDeleteConfirmation && (
        <DeleteConfirmation onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
    </div>
  );
};

export default TableServices3;
