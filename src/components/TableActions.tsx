import { FileUp, Search, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export default function TableActions() {
  return (
    <div className="mx-0 flex w-full justify-between gap-1 rounded-lg bg-slate-300 p-1 text-black dark:bg-slate-700 dark:text-white">
      {/* export  */}
      <Button variant="outline">
        <FileUp className="mr-2 h-4 w-4" /> Export
      </Button>
      {/* Search  */}
      <div className="flex flex-grow items-center rounded-md border md:ml-8 md:mr-4 lg:ml-0 lg:mr-0">
        <div className="relative flex items-center">
          <button className="absolute left-0">
            <Search className="fill-body " size={20} />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent pl-7 font-medium focus:outline-none xl:w-125"
          />
        </div>
      </div>

      {/* Delete  */}
      <Button variant="outline" className="bg-red">
        <Trash2 className="mr-2 h-4 w-4" /> Bulk Delete
      </Button>
    </div>
  );
}
