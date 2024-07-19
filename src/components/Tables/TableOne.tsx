import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    name: "Amila Gunawardhana",
    Email: "schoolofpte@eblix.com.au",
    Address: "Muwanhelawattta Road, Thalangama North",
    sales: 590,
    conversion: 4.8,
  },
  {
    name: "Ananda Bandara",
    Email: "sample2@gmail.com.au",
    Address: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    name: "Anjula fernando",
    Email: "sample3@gmail.com.au",
    Address: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    name: "Vimeo",
    Email: "sample4@gmail.com.au",
    Address: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    name: "Facebook",
    Email: "sample5@gmail.com.au",
    Address: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex flex-col">
        <div className="grid grid-cols-[1fr,1fr,2fr,1fr,1fr] rounded-sm bg-gray-2 dark:bg-meta-4">
          <div className="p-1 xl:p-2">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-1 text-center xl:p-2">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              E-mail
            </h5>
          </div>
          <div className="p-1 text-center xl:p-2">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Address
            </h5>
          </div>
          <div className="hidden p-1 text-center sm:block xl:p-2">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
          <div className="hidden p-1 text-center sm:block xl:p-2">
            <h5 className="text-sm font-medium uppercase xsm:text-base"></h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-[1fr,1fr,2fr,1fr,1fr] ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-1 xl:p-2">
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-1 xl:p-2">
              <p className="text-black dark:text-white">{brand.Email}</p>
            </div>

            <div className="flex items-center justify-center p-1 xl:p-2">
              <p className="text-black dark:text-white">{brand.Address}</p>
            </div>

            <div className="hidden items-center justify-center p-1 sm:flex xl:p-2">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-1 sm:flex xl:p-2">
              <p className="text-meta-5">{brand.conversion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
