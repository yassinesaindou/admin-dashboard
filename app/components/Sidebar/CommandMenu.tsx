'use client'
import { Command } from "cmdk";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FiEye, FiLink, FiLogOut, FiPhone, FiPlus } from "react-icons/fi";
interface Props{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const CommandMenu = ({open, setOpen}:Props) => {


  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: globalThis.KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);


  const [typedValue, setTypedValue] = useState('');
  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      onClick={() => setOpen(false)}
    className="fixed inset-0 bg-stone-950/50">
      <div onClick={(e) => e.stopPropagation()}
      className="bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12">
        <Command.Input placeholder="What are you looking for?" className="relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none" value={typedValue}
        onValueChange={setTypedValue}/>
        <Command.List className="p-2">
          <Command.Empty>No results found for <span className="text-violet-500"> {typedValue}</span>
          </Command.Empty>
          <Command.Group heading="Team" className="text-sm mb-3 text-stone-400">
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <FiPlus />
              Invite Member
            </Command.Item>
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <FiEye />
              See Org Chart
            </Command.Item>
          </Command.Group>

          <Command.Group
            heading="Integrations"
            className="text-sm text-stone-400 mb-3"
          >
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <FiLink />
              Link Services
            </Command.Item>
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <FiPhone />
              Contact Support
            </Command.Item>
          </Command.Group>

          <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-50 hover:bg-stone-700 bg-stone-950 rounded items-center gap-2">
            <FiLogOut />
            Sign Out
          </Command.Item>
        </Command.List>
      </div>
            </Command.Dialog>
  );
};

export default CommandMenu;
