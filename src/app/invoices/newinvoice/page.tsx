import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import AddClient from "@/components/AddClientIcon/addclient";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddClientForm from "@/components/forms/AddClientForm";
import AddInvoiceForm from "@/components/forms/AddInvoiceForm";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const newInvoice = () => {
  return (
    <DefaultLayout>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ">
        <Breadcrumb pageName="Add new Invoice" />
      </div>

      <AddInvoiceForm />
      <div className="flex flex-col gap-10"></div>
    </DefaultLayout>
  );
};

export default newInvoice;
