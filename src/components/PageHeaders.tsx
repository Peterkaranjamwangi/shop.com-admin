import { FolderPlus } from "lucide-react";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

interface PageHeadersProps {
  heading: string;
  linkTitle: string;
  href: string;
}

export default function PageHeaders({
  heading,
  linkTitle,
  href,
}: PageHeadersProps): React.ReactElement {
  return (
    <>
      <div className="flex flex-row justify-between py-2">
        <div>{heading}</div>
        <Link href={href}>
          <Button variant="outline">
            <FolderPlus className="mr-2 h-4 w-4" /> {linkTitle}
          </Button>
        </Link>
      </div>
    </>
  );
}
