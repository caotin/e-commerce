import { useState } from "react";
import { ArrowDownIcon } from "@/assets/icons";

interface DropdownProps {
  option: string[];
  defaultValue?: string;
  sxSelect?: string;
}

export default function Dropdown({
  option,
  defaultValue,
  sxSelect,
}: DropdownProps) {
  /* ----- Handle dropdown value ----- */
  const [value, setValue] = useState("");

  const handleClick = (option: string) => {
    setValue(option);
    setIsOpen(false);
  };

  /* ----- Show & hide dropdown ----- */
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={"relative " + sxSelect}>
      <div
        className="p-[10px_8px_10px_10px] flex items-center border rounded-md cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className={"w-full text-nowrap overflow-hidden text-ellipsis"}>
          {value ? value : defaultValue}
        </div>
        <div className="size-6 flex items-center justify-center">
          <ArrowDownIcon />
        </div>
      </div>
      {isOpen && (
        <ul className="py-2 bg-white border rounded-md absolute">
          {option.map((option) => (
            <li
              key={option}
              className="px-2 py-1 hover:bg-slate-100 cursor-pointer"
              onClick={() => handleClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
