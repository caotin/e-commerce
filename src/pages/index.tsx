import Button from "@/components/atoms/Button";
import DefaultLayout from "@/layouts/DefaultLayout";
import Image from "next/image";

import { norm } from "@/_mock/category";
import { item, householdItems, electronicsItem } from "@/_mock/item";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="flex justify-center">
        <div className="w-full max-w-[1180px] mx-4 lg:mx-[131px] sm:mt-5 flex flex-col gap-[10px]">
          <Main />
          <Sale />
          <Block
            title="Home and outdoor"
            image="/image92.png"
            item={householdItems}
          />
          <Block
            title="Consumer electronics and gadgets"
            image="/image98.png"
            item={electronicsItem}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}

/* ------------------------------------ Section-main ------------------------------------ */
function Main() {
  return (
    <div className=" sm:p-[20px_20px_20px_14px] flex sm:border rounded-md">
      <div className="w-[250px] mr-[11px] hidden sm:flex flex-col">
        {norm.map((item, index) => (
          <Button
            key={index}
            className="w-full p-[10px] pt-[11px] flex justify-start leading-[19px] text-gray-600 hover:text-dark-1c text-nowrap font-normal hover:font-medium hover:bg-blue-e3 rounded-md"
          >
            {item}
          </Button>
        ))}
        <Button className="w-full p-[10px] pt-[11px] flex justify-start leading-[19px] text-gray-600 hover:text-dark-1c text-nowrap font-normal hover:font-medium hover:bg-blue-e3 rounded-md">
          More category
        </Button>
      </div>
      <div className="relative">
        <Image
          src="/banner.png"
          alt="Banner Image"
          width={665}
          height={360}
          priority
        />
        <div className="absolute top-[25.18px] sm:top-[53px] left-[26px] sm:left-[45px]">
          <p className="text-dark-1c text-[18px] sm:text-[28px] leading-[22px] sm:leading-[34px]">
            Lastest trending
          </p>
          <h2 className="text-dark-1c text-[18px] sm:text-[32px] font-bold leading-[22px] sm:leading-[39px] mb-[18px] sm:mb-[17px]">
            Electronic items
          </h2>
          <Button className="p-[7px_10px] sm:p-[10.5px_16px] text-[13px] sm:text-[16px] leading-4 sm:leading-[19px] text-primary sm:text-black bg-white rounded-md">
            Learn more
          </Button>
        </div>
      </div>
      <div className="w-[200px] ml-5 hidden lg:block">
        <div className="mb-[10px] p-[17px_10px_12px_10px] bg-blue-e3 rounded-md">
          <div className="mb-[13px] flex gap-[10px]">
            <div>
              <Image src="/avatar.png" alt="Avatar" width={44} height={44} />
            </div>
            <p className="leading-[19px]">
              Hi, user <br /> let’s get stated
            </p>
          </div>
          <Button className="w-full mb-[7px] py-[7px] bg-primary text-[13px] text-white leading-4 rounded-md">
            Join now
          </Button>
          <Button className="w-full py-[7px] bg-white text-primary text-[13px] leading-4 rounded-md">
            Log in
          </Button>
        </div>
        <div className="mb-[10px] p-[16px] text-white bg-orange-f3 leading-[19px] rounded-md">
          Get US $10 off <br /> with a new <br /> supplier
        </div>
        <div className="p-[16px] text-white bg-blue-55 leading-[19px] rounded-md">
          Send quotes with supplier <br /> preferences
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------ Section-sale ------------------------------------ */
function Sale() {
  return (
    <div className="max-w-[100vw] sm:flex sm:border rounded-md">
      <div className="sm:w-[278px] p-[10px] pl-[15px] sm:p-5 flex sm:block justify-between items-center">
        <div className="sm:mb-[18px]">
          <h2 className="text-dark-1c text-[18px] lg:text-xl font-bold leading-[22px]">
            Deals and offers
          </h2>
          <p className="text-gray-600 text-[13px] lg:text-base leading-4">
            Electronic equipments
          </p>
        </div>
        <div className="flex gap-1">
          <div className="hidden w-11 h-[45px] sm:flex flex-col justify-center items-center bg-gray-200 sm:bg-gray-60 sm:rounded-[4px]">
            <p className="text-gray-8b sm:text-white font-semibold leading-[19px]">
              04
            </p>
            <p className="text-gray-8b sm:text-white text-[11px] sm:text-[12px] leading-[13px]">
              Days
            </p>
          </div>
          <div className="w-11 h-[45px] flex flex-col justify-center items-center bg-gray-200 sm:bg-gray-60 sm:rounded-[4px]">
            <p className="text-gray-8b sm:text-white font-semibold leading-[19px]">
              12
            </p>
            <p className="text-gray-8b sm:text-white text-[11px] sm:text-[12px] leading-[13px]">
              Hour
            </p>
          </div>
          <div className="w-11 h-[45px] flex flex-col justify-center items-center bg-gray-200 sm:bg-gray-60 sm:rounded-[4px]">
            <p className="text-gray-8b sm:text-white font-semibold leading-[19px]">
              34
            </p>
            <p className="text-gray-8b sm:text-white text-[11px] sm:text-[12px] leading-[13px]">
              Min
            </p>
          </div>
          <div className="w-11 h-[45px] flex flex-col justify-center items-center bg-gray-200 sm:bg-gray-60 sm:rounded-[4px]">
            <p className="text-gray-8b sm:text-white font-semibold leading-[19px]">
              56
            </p>
            <p className="text-gray-8b sm:text-white text-[11px] sm:text-[12px] leading-[13px]">
              Sec
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-nowrap overflow-x-auto">
        {item.map((item, index) => (
          <div
            key={index}
            className=" h-[180px] sm:h-[235px] p-[8px_20px_18px] flex flex-col items-center border-y sm:border-y-0 border-l border-gray-de"
          >
            <div className="size-[98px] sm:size-[140px] mb-1 flex justify-center items-center">
              <Image src={item.image} alt="" width={77} height={83} />
            </div>
            <h5 className="mb-2 text-dark-1c text-[13px] sm:text-base leading-[16px] tracking-[-0.013em]">
              {item.category}
            </h5>
            <p className="p-[5px_13px] text-[14px] leading-[17px] text-red-eb bg-red-ff rounded-full">
              - {item.badge}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------ Section-block ------------------------------------ */
interface BlockProps {
  title: string;
  image: string;
  item: { title: string; price: string; image: string }[];
}

function Block({ title, image, item }: BlockProps) {
  return (
    <div className="sm:flex border rounded-md">
      <div className="h-min-w-[280px] relative">
        <div className="hidden sm:flex">
          <Image src={image} alt="Image" width={280} height={257} />
        </div>
        <div className="sm:w-[154px] sm:absolute top-5 left-5">
          <h2 className="mb-5 text-dark-1c text-[20px] font-semibold leading-[26px]">
            {title}
          </h2>
          <Button className="hidden sm:block p-[10.5px_16px] text-dark-1c text-[16px] leading-[19px] bg-white rounded-md">
            Source now
          </Button>
        </div>
      </div>
      <div className="w-full flex sm:grid sm:grid-cols-4 overflow-scroll">
        {item.slice(0, 8).map((item, index) => (
          <div key={index} className="w-[140px] p-[20px_16px]">
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
