import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableTobeInvoiced from "@/components/Tables/TableTobeInvoiced";
import TablePendingInvoices from "@/components/Tables/TablePendingInvoices";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddInvoice from "@/components/AddInvoiceIcon/addinvoiceicon";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ">
        <Breadcrumb pageName="Invoices" />
        <AddInvoice />
      </div>

      <div className="flex flex-col gap-10">
        <TableTobeInvoiced />
        <TablePendingInvoices />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
