import { useState } from "react";
import { ArrowDownIcon } from "@/assets/icons";

interface FilterProps {
  title: string;
  children: React.ReactNode;
}

export default function Filter({ title, children }: FilterProps) {
  /* ----- Show & hide filter ----- */
  const [toggle, setToggle] = useState(false);

  return (
    <div className="border-t">
      <div
        className="py-[14px] flex justify-between items-center text-[16px] font-semibold leading-[19px] cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <p>{title}</p>
        <div className="size-6 flex items-center justify-center">
          <ArrowDownIcon className={`h-[7px] ${toggle ? "" : "rotate-180"}`} />
        </div>
      </div>
      <ul
        className={`${
          toggle ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } grid ease-in-out duration-300`}
      >
        <div className="overflow-hidden">{children}</div>
      </ul>
    </div>
  );
}
