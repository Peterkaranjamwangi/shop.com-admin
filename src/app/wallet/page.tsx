import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

export default function page() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Wallet" />
      </DefaultLayout>
    </>
  );
}
