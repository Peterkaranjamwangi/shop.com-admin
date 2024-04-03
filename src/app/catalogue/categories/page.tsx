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
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  ListFilter,
  PlusCircle,
  Table,
  MoreHorizontal,
  File,
} from "lucide-react";
import NewCategory from "./NewCategory";
import UpdateCategory from "./update/[id]/UpdateCategory";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Next.js Tables | Shop.com - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for Shop.com - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function page() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Categories" />
        <CategoriesDashboard />
      </DefaultLayout>
    </>
  );
}

export function CategoriesDashboard() {
  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList className=" px-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archived" className="hidden sm:flex">
            Archived
          </TabsTrigger>
        </TabsList>

        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-slate-50 text-black-2"
            >
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Active
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          {/* <a
            href="/categories/new"
            className="inline-flex h-8 items-center gap-1"
          >
            <Button className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Category
              </span>
            </Button>
          </a> */}
          <NewCategory />
          <UpdateCategory />
        </div>
      </div>
      <TabsContent
        value="all"
        className="rounded-lg border-stroke bg-white text-black shadow-default dark:border-strokedark dark:bg-boxdark dark:text-whiten"
      >
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
            <CardDescription>
              Manage your product categories and subcategories.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Subcategories
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Total Products
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Created at
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="hidden sm:table-cell">
                    <Image
                      alt="Category image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src="/categories.png"
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">Electronics</TableCell>
                  <TableCell>
                    <Badge variant="outline">Active</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">5</TableCell>
                  <TableCell className="hidden md:table-cell">25</TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-01-12 10:42 AM
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="bg-slate-50 text-black-2"
                      >
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Archive</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                {/* Add more category entries as needed */}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="text-muted-foreground text-xs">
              Showing <strong>1-10</strong> of <strong>20</strong> categories
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
