import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableServices from "@/components/Tables/TableServices1";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddService from "@/components/AddServicesIcon.tsx/addservice";
import TableServices1 from "@/components/Tables/TableServices1";
import TableServices2 from "@/components/Tables/TableServices2";
import TableServices3 from "@/components/Tables/TableServices3";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Breadcrumb pageName="Services" />
        <AddService />
      </div>
      <div className="flex flex-col gap-10">
        <TableServices1 />
        <TableServices2 />
        <TableServices3 />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
