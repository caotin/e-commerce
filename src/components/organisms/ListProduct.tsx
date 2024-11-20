import Image from "next/image";

interface ListProductProps {
  title: string;
}

export default function ListProduct({ title }: ListProductProps) {
  return (
    <div className="w-full px-[10px] justify-start sm:hidden sm:m-0 sm:mb-5">
      <h5 className="mb-5 text-lg leading-[22px] font-semibold">{title}</h5>
      <div className="flex gap-2 overflow-auto">
        <div className="w-[150px] min-w-[150px] p-[5.5px] bg-white border rounded-md">
          <div className="px-[16.2px] py-[9.34px] sm:size-[200px] pb-[14px] flex justify-center items-center">
            <Image
              src={"/Item/cloth.png"}
              alt=""
              width={120}
              height={120}
              className="sm:w-[150px] sm:h-[170px]"
            />
          </div>
          <div className="mx-[6.5px]">
            <p className="pb-[2px] text-[16px] leading-[22px]">$ {10.3}</p>
            <p className="text-gray-8b text-[13px] sm:text-base leading-[16px]">
              T-shirts with multiple colors, for men
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
