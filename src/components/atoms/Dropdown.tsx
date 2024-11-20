import { useState } from "react";
import { ArrowDownIcon } from "@/assets/icons";

interface DropdownProps {
  title?: string;
  option: string[] | number[];
  defaultValue?: string | number;
  className?: string;
}

export default function Dropdown({
  title,
  option,
  defaultValue,
  className,
}: DropdownProps) {
  /* ----- Handle dropdown value ----- */
  const [value, setValue] = useState<string | number>();

  const handleClick = (option: string | number) => {
    setValue(option);
    setIsOpen(false);
  };

  /* ----- Show & hide dropdown ----- */
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={"relative "}>
      <div
        className={
          `p-[10px_8px_10px_10px] flex items-center border rounded-md cursor-pointer ` +
          className
        }
        onClick={toggleDropdown}
      >
        <div className={"w-full text-nowrap overflow-hidden text-ellipsis"}>
          {title} {value ? value : defaultValue}
        </div>
        <div className="size-6 flex items-center justify-center">
          <ArrowDownIcon />
        </div>
      </div>
      <ul
        className={`py-2 w-full bg-white border rounded-md absolute top-12 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
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
    </div>
  );
}
