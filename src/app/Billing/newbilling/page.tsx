import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import AddClient from "@/components/AddClientIcon/addclient";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableClient from "@/components/Tables/TableClient";
import AddClientForm from "@/components/forms/AddClientForm";
import { Client } from "@/types/Client";
import AddBillingForm from "@/components/forms/AddBillingForm";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const newBilling = () => {
  return (
    <DefaultLayout>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ">
        <Breadcrumb pageName="Add new Billing" />
      </div>

      <AddBillingForm />
      <div className="flex flex-col gap-10"></div>
    </DefaultLayout>
  );
};

export default newBilling;
