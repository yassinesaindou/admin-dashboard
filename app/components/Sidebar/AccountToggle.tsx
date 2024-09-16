import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function AccountToggle() {
  return (
    <div className="border-b mb-4 border-stone-300 mt-2 pb-4">
      <button className="flex hover:bg-stone-200 rounder transition-colors relative gap-2 items-center w-full">
        <Image
          src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
          alt="avatar"
          className="size-8 rounded shrink-0 bg-violet-500 shadow"
          width={80}
          height={80}
              />
              <div className="text-start ">
                  <span className="text-sm font-semibold block">Joe Smith</span>

                  <span className="text-xs block text-stone-500">Admin</span>
              </div>
              <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs" />
        <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs" />
      </button>
    </div>
  );
}
