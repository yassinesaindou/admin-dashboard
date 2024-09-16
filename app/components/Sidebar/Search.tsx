'use client'
import { useState } from "react";
import { FiCommand, FiSearch } from "react-icons/fi";
import CommandMenu from "./CommandMenu";

export default function Search() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-stone-200 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
        <FiSearch className="mr-2" />
        <input onFocus={() => setOpen(true)} type="text" className="outline-none bg-stone-200" />
        <span className="p1 flex gap-0.5 items-center shadow rounded absolute right-1.5 top-1/2 -translate-y-1/2">
          <FiCommand /> K
        </span>
      </div>
      <CommandMenu open={open} setOpen={setOpen} />
    </>
  );
}
