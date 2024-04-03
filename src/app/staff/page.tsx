import React from "react";

import Image from "next/image";
import {
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <StaffDashboard />
      </DefaultLayout>
    </>
  );
}

export function StaffDashboard() {
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
          <a href="/staff/new" className="inline-flex h-8 items-center gap-1">
            <Button className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Staff
              </span>
            </Button>
          </a>
        </div>
      </div>
      <TabsContent
        value="all"
        className="rounded-lg border-stroke bg-white text-black shadow-default dark:border-strokedark dark:bg-boxdark dark:text-whiten"
      >
        <Card>
          <CardHeader>
            <CardTitle>Staff</CardTitle>
            <CardDescription>
              Manage your staff and view their roles.
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
                  <TableHead>Role</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Department
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Hire Date
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Contact
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
                      alt="Staff image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src="/profile.png"
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">John Doe</TableCell>
                  <TableCell>
                    <Badge variant="outline">Manager</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">Sales</TableCell>
                  <TableCell className="hidden md:table-cell">
                    2021-03-15
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    john.doe@example.com
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
                        <DropdownMenuItem>Terminate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                {/* Add more staff entries as needed */}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="text-muted-foreground text-xs">
              Showing <strong>1-5</strong> of <strong>25</strong> staff members
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
