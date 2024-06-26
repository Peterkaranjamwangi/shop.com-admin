import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
export const metadata: Metadata = {
  title: "Next.js Tables | Shop.com - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for Shop.com - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function page() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Markets" />
      </DefaultLayout>
    </>
  );
}
