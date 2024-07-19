import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableBilling from "@/components/Tables/TableBilling";
import AddBilling from "@/components/AddBillingIcon/addbilling";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const BillingPage = () => {
  return (
    <DefaultLayout>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Breadcrumb pageName="Billing" />
        <AddBilling />
      </div>

      <div className="flex flex-col gap-10">
        <TableBilling />
      </div>
    </DefaultLayout>
  );
};

export default BillingPage;
