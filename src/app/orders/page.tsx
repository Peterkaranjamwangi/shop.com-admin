import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { Metadata } from "next";
import LatestOrder from "./LatestOrder";
import RecentOrders from "./RecentOrders";
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
        <Breadcrumb pageName="Orders" />

        <OrdersDashboard />
      </DefaultLayout>
    </>
  );
}

export function OrdersDashboard() {
  return (
    <main className="my-2 grid flex-1 items-start gap-2 text-black-2 dark:text-white sm:px-6 sm:py-0 md:gap-10 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div>
          <Card className="border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle>Your Orders</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Introducing Our Dynamic Orders Dashboard for Seamless Management
                and Insightful Analysis.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Create New Order</Button>
            </CardFooter>
          </Card>
          <div className="my-2 flex w-full flex-col gap-4 md:flex-row">
            <Card className="w-full border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark md:w-1/2">
              <CardHeader className="pb-2">
                <CardDescription>This Week</CardDescription>
                <CardTitle className="text-4xl">$1329</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground text-xs">
                  +25% from last week
                </div>
              </CardContent>
              <CardFooter>
                <Progress value={25} aria-label="25% increase" />
              </CardFooter>
            </Card>
            <Card className="w-full border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark md:w-1/2">
              <CardHeader className="pb-2">
                <CardDescription>This Month</CardDescription>
                <CardTitle className="text-3xl">$5,329</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground text-xs">
                  +10% from last month
                </div>
              </CardContent>
              <CardFooter>
                <Progress value={12} aria-label="12% increase" />
              </CardFooter>
            </Card>
          </div>
        </div>
        {/* Recent Orders  */}
        <RecentOrders />
      </div>
      {/* Latest Order  */}
      <LatestOrder />
    </main>
  );
}
