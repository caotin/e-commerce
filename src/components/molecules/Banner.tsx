import { Rectangle } from "@/assets/icons";
import Button from "@/components/atoms/Button";

export default function Banner() {
  return (
    <div className="w-full h-[120px] hidden sm:flex justify-between items-center bg-blue-00 rounded-md relative">
      <Rectangle className="absolute" />
      <div className="pl-[30px] flex flex-col justify-center text-white bg-transparent z-10">
        <h3 className="mb-[3px] text-2xl font-semibold tracking-[-0.013em]">
          Super discount on more than 100 USD
        </h3>
        <p className="text-[16px] leading-[19px] opacity-[0.7]">
          Have you ever finally just write dummy info
        </p>
      </div>
      <Button className="mr-[45px] px-4 py-[10.5px] text-white bg-orange-ff text-[16px] font-medium leading-[19px] rounded-md">
        Shop now
      </Button>
    </div>
  );
}
