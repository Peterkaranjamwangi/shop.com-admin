"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { useMediaQuery } from "@react-hook/media-query";
import { FolderPlus, ImagePlus, X } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { ComponentPlaceholderIcon } from "@radix-ui/react-icons";

export default function NewCategory() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Create New Category</Button>
        </DialogTrigger>
        <DialogContent className=" bg-white text-black dark:bg-black dark:text-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="mb-2  border-separate border-b border-dashed text-center text-2xl md:text-3xl">
              Create New Category
            </DialogTitle>
            <DialogDescription>
              Please fill in the following fields to create a new category.
            </DialogDescription>
          </DialogHeader>
          <NewCategoryForm />

          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <FolderPlus className="mr-2 h-4 w-4" />
          Add New Category
        </Button>
      </DrawerTrigger>
      <DrawerContent className=" bg-white text-black dark:bg-black dark:text-white">
        <DrawerClose
          asChild
          className="flex justify-end"
          style={{ position: "absolute", top: "0", right: "0" }}
        >
          <Button variant="ghost" size="icon" className="pr-3">
            <X />
          </Button>
        </DrawerClose>
        <DrawerHeader className="text-left">
          <DrawerTitle className="mb-2  border-separate border-b border-dashed text-center text-2xl md:text-3xl">
            Create New Category
          </DrawerTitle>
          <DrawerDescription>
            Please fill in the following fields to create a new category.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <NewCategoryForm />
        </div>
        <DrawerFooter className="relative bottom-13.5 left-[20%] w-[50%] justify-end">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

const FormSchema = z.object({
  title: z.string().nonempty({ message: "Title is required!!." }),
  description: z.string().nonempty({ message: "Description is required!!." }),
  image: z.string(), // For file upload, you can validate it based on your file requirements
});

export function NewCategoryForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);

    toast({
      title: "Category created:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter title"
                  className="text-black"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                What is the title for the New Category?
              </FormDescription>
              <FormMessage className="text-red" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter description"
                  className="text-black"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload Image</FormLabel>
              <FormControl>
                <div style={{ position: "relative" }}>
                  <Input type="file" className="cursor-pointer" {...field} />
                  <ImagePlus
                    name="upload"
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                    }}
                  />
                </div>
              </FormControl>
              <FormMessage className="text-red" />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
