import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

import { Metadata } from "next";
import Header from "@/components/Header";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FolderPlus } from "lucide-react";

export const metadata: Metadata = {
  title: "Next.js Tables | Shop.com - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for Shop.com - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function page() {
  return (
    <>
      <DefaultLayout>
        <Card>
          {/* header  */}
          <CardHeader>
            <CardTitle>
              <div className="flex flex-row justify-between">
                <div>Categories</div>

                <Link
                  href="/catalogue/categories/new"
                  className={buttonVariants({ variant: "outline" })}
                >
                  <FolderPlus className="mr-2 h-4 w-4" />
                  Create New Category
                </Link>
              </div>
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          {/* Table  */}
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </DefaultLayout>
    </>
  );
}
