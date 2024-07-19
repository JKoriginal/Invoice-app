import Link from "next/link";

const AddInvoice = () => {
  return (
    <div className="mb-4 flex justify-end">
      <Link href="/invoices/newinvoice">
        <button className="flex items-center rounded-full bg-blue-500 px-4 py-2 text-white">
          <svg
            className="mr-2 h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4C10.5523 4 11 4.44772 11 5V9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H11V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V11H5C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H9V5C9 4.44772 9.44772 4 10 4Z"
              fill="currentColor"
            />
          </svg>
          Add Invoice
        </button>
      </Link>
    </div>
  );
};

export default AddInvoice;
