import Button from "@/components/atoms/Button";
import Searchbar from "@/components/atoms/Searchbar";

import { category } from "@/_mock/category";

export default function Navbar() {
  return (
    <div className="mx-[15px] mb-[18px] sm:hidden">
      <Searchbar />
      <div className="mt-4 flex flex-nowrap gap-1 overflow-auto">
        <Button className="px-3 py-2 text-primary  text-nowrap bg-[#EFF2F4] rounded-md">
          All category
        </Button>
        {category.map((item, index) => (
          <Button
            className="px-3 py-2 text-primary text-nowrap bg-[#EFF2F4] rounded-md"
            key={index}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}
