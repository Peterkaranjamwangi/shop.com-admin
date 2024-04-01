import React from "react";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
export const metadata: Metadata = {
  title: "Staff | Shop.com - Next.js Dashboard Template",
  description:
    "This is Staff  page for Shop.com - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function page() {
  return (
    <>
      <DefaultLayout>
        <div>Staff</div>
      </DefaultLayout>
    </>
  );
}
