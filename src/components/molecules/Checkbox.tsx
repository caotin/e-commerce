import { useState } from "react";
import { CheckIcon } from "@/assets/icons";

interface CheckboxProp {
  children: React.ReactNode;
}

export default function Checkbox({ children }: CheckboxProp) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSelectCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="py-[6px] pr-4 flex items-center">
      <div
        className="w-[34px] h-[24px] flex items-center relative"
        onClick={handleSelectCheckbox}
      >
        <input
          type="checkbox"
          className={`size-[20px] border-2 border-gray-bd rounded-md appearance-none duration-100 ${
            isChecked ? "bg-primary border-primary" : "bg-transparent"
          }`}
        />
        <CheckIcon className="size-[18px] text-white absolute left-[1px]" />
      </div>
      {children}
    </div>
  );
}
