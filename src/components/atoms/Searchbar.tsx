import { ClearIcon, SearchIcon } from "@/assets/icons";
import Button from "./Button";
import { useEffect, useState } from "react";

export default function Searchbar() {
  const [value, setValue] = useState("");

  /* ----- Show clear button ----- */
  const [showClearButton, setShowClearButton] = useState(false);

  useEffect(() => {
    if (value.length > 0) {
      setShowClearButton(true);
    } else {
      setShowClearButton(false);
    }
  }, [value]);

  /* ----- Handle clear value ----- */
  const handleClick = () => {
    setValue("");
  };

  return (
    <div className="w-full px-2 py-[7px] flex items-center gap-[6px] max-sm:border rounded-md focus-within:border-primary">
      <div className="p-1">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-full text-[16px] leading-4 outline-none"
        onChange={(e) => setValue(e.target.value)}
      />
      {showClearButton && (
        <Button
          className="w-[23px] h-[23px] max-sm:ml-10 flex items-center justify-center text-primary"
          onClick={handleClick}
        >
          <ClearIcon />
        </Button>
      )}
    </div>
  );
}
