import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

import { Metadata } from "next";

import TableActions from "@/components/TableActions";
import PageHeaders from "@/components/PageHeaders";
import NewCategory from "./NewCategory";
import UpdateCategory from "./update/[id]/UpdateCategory";

export const metadata: Metadata = {
  title: "Next.js Tables | Shop.com - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for Shop.com - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function page() {
  return (
    <>
      <DefaultLayout>
        {/* header  */}
        {/* <PageHeaders
          heading="Categories"
          linkTitle="Create New Category"
          href="/catalogue/categories/new"
        /> */}
        <div className="flex flex-row justify-between py-2">
          <div>Categories</div>
          <NewCategory />
        </div>
        <UpdateCategory />

        <div className="my-1 rounded border p-2">
          {/* Table Actions */}
          <TableActions />
          {/* table  */}
          <div className="my-2 p-2">
            <h1 className="text-5xl">Table</h1>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
