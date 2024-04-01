import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop.com",
  description:
    "Shop.com is your ultimate online shopping destination, offering a vast selection of products across various categories. From fashion and electronics to home goods and beauty, we bring you the best brands and deals at your fingertips. Discover a seamless shopping experience, secure payments, and unbeatable customer service at Shop.com.",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
