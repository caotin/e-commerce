import { useState } from "react";

import { ArrowDownIcon } from "@/assets/icons";
import Searchbar from "@/components/atoms/Searchbar";
import Button from "@/components/atoms/Button";

import { category } from "@/_mock/category";

export default function SearchGroup() {
  return (
    <div className="w-full max-w-[665px] hidden sm:flex ">
      <div className="flex flex-1 items-center border-2 border-r-0 focus-within:border-primary rounded-[6px_0_0_6px]">
        <Searchbar />
        <Select />
      </div>
      <Button className="px-7 py-2 text-white bg-primary rounded-[0_6px_6px_0]">
        Search
      </Button>
    </div>
  );
}

/* ====================================================================================== */
/* ---------------------------------- Search category ----------------------------------- */
function Select() {
  /* ----- Show & hide dropdown ----- */
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hidden lg:block relative">
      <div className="p-[7px_8px_7px_10px] flex items-center border-l focus-within:border-primary cursor-pointer">
        <div
          className={"w-full text-nowrap overflow-hidden text-ellipsis"}
          onClick={toggleDropdown}
        >
          All category
        </div>
        <div className="size-6 flex items-center justify-center">
          <ArrowDownIcon />
        </div>
      </div>
      {isOpen && (
        <ul className="w-full py-2 border rounded-md box-border absolute top-11">
          {category.map((option) => (
            <li
              key={option}
              className="px-2 py-1 hover:bg-slate-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
