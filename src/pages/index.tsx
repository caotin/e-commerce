import Button from "@/components/atoms/Button";
import DefaultLayout from "@/layouts/DefaultLayout";
import Image from "next/image";

import {
  ArrowRight,
  InventoryIcon,
  SearchIcon,
  SecurityIcon,
  SendIcon,
} from "@/assets/icons";
import Input from "@/components/atoms/Input";
import Dropdown from "@/components/atoms/Dropdown";
import Newsietter from "@/components/organisms/Newsietter";

import { item, householdItems, electronicsItem } from "@/_mock/item";
import { category, norm } from "@/_mock/category";
import { flatlist } from "@/_mock/flatlist";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="mb-[46px] flex justify-center">
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
          <Inquiry />
          <Recommend />
          <Service />
          <Country />
        </div>
      </div>
      <Newsietter />
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
          <p className="text-[18px] sm:text-[28px] leading-[22px] sm:leading-[34px]">
            Lastest trending
          </p>
          <h2 className="text-[18px] sm:text-[32px] font-bold leading-[22px] sm:leading-[39px] mb-[18px] sm:mb-[17px]">
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
          <h4 className="text-[18px] lg:text-xl font-bold leading-[22px]">
            Deals and offers
          </h4>
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
              <Image
                src={item.image}
                alt=""
                width={77}
                height={83}
                className="w-auto h-auto"
              />
            </div>
            <h4 className="mb-2 text-[13px] sm:text-base leading-[16px] tracking-[-0.013em]">
              {item.category}
            </h4>
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
    <div className="sm:flex sm:border rounded-md">
      <div className="p-[14px_16px] sm:p-0 min-w-[280px] relative">
        <div className="hidden sm:flex">
          <Image
            src={image}
            alt="Image"
            width={280}
            height={257}
            className="w-full h-full"
          />
        </div>
        <div className="sm:w-[154px] sm:absolute top-5 left-5">
          <h2 className="sm:mb-5 text-[20px] font-semibold leading-[26px]">
            {title}
          </h2>
          <Button className="hidden sm:block p-[10.5px_16px] text-[16px] leading-[19px] bg-white rounded-md">
            Source now
          </Button>
        </div>
      </div>
      <div className="w-full flex sm:grid sm:grid-cols-4 overflow-scroll sm:overflow-hidden">
        {item.slice(0, 8).map((item, index) => (
          <div
            key={index}
            className="min-w-[140px] p-[8px_14px_14px_14px] sm:p-[20px_16px] flex flex-col items-center sm:items-start border-y border-r sm:relative"
          >
            <div className="size-[98px] sm:size-[82px] flex justify-center items-center sm:absolute bottom-[2px] right-[1px]">
              <Image
                src={item.image}
                alt=""
                width={80}
                height={80}
                className="w-full h-full"
              />
            </div>
            <h3 className="mt-1 mb-2 text-[13px] sm:text-[16px] leading-4 sm:leading-[19px]">
              {item.title}
            </h3>
            <p className="text-gray-8b text-[13px] leading-4">
              From <span className="sm:block">{item.price}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="p-[10px] sm:hidden border-b">
        <Button className="p-[9px_9px_9px_13px] flex items-center gap-[6px] text-primary text-[16px] font-medium leading-[19px]">
          Source now <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

/* ------------------------------------ Section-inquiry ------------------------------------ */
function Inquiry() {
  return (
    <div className="relative">
      <div className="h-full absolute -z-10">
        <Image
          src={"/InquiryImage.png"}
          alt="Inquiry Image"
          width={1180}
          height={500}
          priority
          className="w-full h-[155px] sm:h-auto"
        />
      </div>
      <div className="w-full p-[25px_23px] sm:p-10 flex justify-between">
        <div>
          <h2 className="pb-[17px] sm:pb-[13px] text-white text-[18px] sm:text-[32px] font-semibold leading-[22px] sm:leading-[39px] sm:tracking-[-0.013em]">
            An easy way to send <br /> requests to all suppliers
          </h2>
          <p className="hidden sm:flex text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed
            do eiusmod tempor incididunt.
          </p>
          <Button className="p-[7px_10px] sm:hidden text-white text-[13px] leading-4 bg-primary rounded-md">
            Send inquiry
          </Button>
        </div>
        <form className="w-[491px] h-full p-[22px_31px_25px_20px] hidden sm:block bg-white rounded-md">
          <h4 className="pb-[18px] text-xl font-semibold tracking-[-0.013em]">
            Send quote to suppliers
          </h4>
          <Input
            type="text"
            placeholder="What item you need?"
            className="bg-transparent"
          />
          <textarea
            placeholder="Type more details"
            className="w-full h-[73px] my-5 p-[11px] border focus:border-primary rounded-md outline-none appearance-none"
          />
          <div className="mb-4 flex gap-2">
            <input
              type="text"
              placeholder="Quantity"
              className="p-[10px] border rounded-md  outline-none appearance-none"
            />
            <Dropdown
              option={category}
              defaultValue="Pcs"
              sxSelect={"w-[111px] h-full"}
            />
          </div>
          <Button className="p-[10.5px_16px] text-white text-[16px] leading-[19px] bg-primary rounded-md">
            Send inquiry
          </Button>
        </form>
      </div>
    </div>
  );
}

/* ------------------------------------ Section-recommend ------------------------------------ */
function Recommend() {
  return (
    <div className="m-[20px_10px] sm:m-0 sm:mb-5">
      <h3 className="mb-[33px] text-2xl font-semibold">Recommended items</h3>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-5">
        <div className="p-[12px_12px_14px] border rounded-md">
          <div className="size-[143px] sm:size-[200px] pb-[14px] flex justify-center items-center">
            <Image
              src={"/Item/cloth.png"}
              alt=""
              width={120}
              height={120}
              className="sm:w-[150px] sm:h-[170px]"
            />
          </div>
          <p className="pb-[2px] text-[16px] leading-[22px]">$ {10.3}</p>
          <p className="text-gray-8b text-[13px] sm:text-base leading-[16px]">
            T-shirts with multiple colors, for men
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------ Section-service ------------------------------------ */
function Service() {
  return (
    <div className="mb-5 hidden sm:block">
      <div className="mb-6 text-2xl font-semibold">Our extra services</div>
      <div className="grid grid-cols-4 gap-5">
        <div className="border rounded-md relative">
          <div className="brightness-50">
            <Image
              src={"/image104.png"}
              alt=""
              width={280}
              height={120}
              priority
            />
          </div>
          <div className="size-[55px] flex justify-center items-center bg-blue-d1 border-2 border-white rounded-full absolute top-[92px] right-[21px]">
            <SearchIcon className="size-5 text-black" />
          </div>
          <p className="p-[16px_20px_20px] font-medium leading-[22px]">
            Source from <br />
            Industry Hubs
          </p>
        </div>
        <div className="border rounded-md relative">
          <div className="brightness-50">
            <Image src={"/image105.png"} alt="" width={280} height={120} />
          </div>
          <div className="size-[55px] flex justify-center items-center bg-blue-d1 border-2 border-white rounded-full absolute top-[92px] right-[21px]">
            <InventoryIcon className="size-5 text-black" />
          </div>
          <p className="p-[16px_20px_20px] font-medium leading-[22px]">
            Customize Your <br />
            Products
          </p>
        </div>
        <div className="border rounded-md relative">
          <div className="brightness-50">
            <Image src={"/image106.png"} alt="" width={280} height={120} />
          </div>
          <div className="size-[55px] flex justify-center items-center bg-blue-d1 border-2 border-white rounded-full absolute top-[92px] right-[21px]">
            <SendIcon className="size-5 text-black" />
          </div>
          <p className="p-[16px_20px_20px] font-medium leading-[22px]">
            Fast, reliable shipping <br />
            by ocean or air
          </p>
        </div>
        <div className="border rounded-md relative">
          <div className="brightness-50">
            <Image src={"/image107.png"} alt="" width={280} height={120} />
          </div>
          <div className="size-[55px] flex justify-center items-center bg-blue-d1 border-2 border-white rounded-full absolute top-[92px] right-[21px]">
            <SecurityIcon className="size-5 text-black" />
          </div>
          <p className="p-[16px_20px_20px] font-medium leading-[22px]">
            Product monitoring <br />
            and inspection
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------ Section-country ------------------------------------ */
function Country({}) {
  return (
    <div className="hidden sm:block">
      <div className="mb-6 text-2xl font-semibold">Suppliers by region</div>
      <div className="grid grid-cols-5 gap-[18px]">
        {flatlist.map((item, index) => (
          <div key={index} className="flex items-center gap-[11px]">
            <div>
              <Image
                src={item.image}
                alt={item.country}
                width={28}
                height={20}
              />
            </div>
            <div>
              <p className="tracking-[-0.013em]">{item.country}</p>
              <p className="text-gray-8b text-[13px] leading-[16px]">
                {item.link}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
