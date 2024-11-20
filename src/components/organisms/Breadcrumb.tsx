import { NavArrowRightIcon } from "@/assets/icons";
import Button from "../atoms/Button";

interface BreadcrumbProps {
  breadcrumb: string[];
}

export default function Breadcrumb({ breadcrumb }: BreadcrumbProps) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1180px] h-16 mx-4 lg:mx-[131px] hidden sm:flex items-center gap-[6px]">
        <Button className="text-gray-8b hover:underline" href={"/"}>
          Home
        </Button>
        {breadcrumb.map((item) => (
          <div key={item} className="flex items-center gap-[6px]">
            <NavArrowRightIcon className="text-gray-8b" />
            <p className="text-gray-8b">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
