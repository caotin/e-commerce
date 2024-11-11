import { useState } from "react";
import Image from "next/image";

import {
  DotIcon,
  TickIcon,
  MessageIcon,
  ShoppingBasketIcon,
  HeartIcon,
} from "@/assets/icons";
import Button from "@/components/atoms/Button";
import Rating from "@/components/atoms/Rating";
import Banner from "@/components/molecules/Banner";
import Breadcrumb from "@/components/organisms/Breadcrumb";

import DefaultLayout from "@/layouts/DefaultLayout";
import { images } from "@/_mock/prouctDetail";
import { householdItems } from "@/_mock/item";

export default function ProductDetail() {
  return (
    <DefaultLayout>
      <Breadcrumb breadcrumb={["Clothings", "Men’s wear", "Summer clothing"]} />
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-[1180px] lg:mx-[131px] sm:mb-[88px] flex flex-col sm:gap-5">
          <ContentMain />
          <div className="flex gap-5">
            <BlockDetail />
            <AsideItem />
          </div>
          <BlockRecommend />
          <Banner />
        </div>
      </div>
    </DefaultLayout>
  );
}

/* ------------------------------------ Content-main ------------------------------------ */
function ContentMain() {
  //   const [value, setValue] = useState(productDetail);
  const [image /* setImage */] = useState(images);

  /* ----- Handle select picture ----- */
  const [selectPic, setSelectPic] = useState(image[0]);
  const handleSelectPic = (index: number) => {
    setSelectPic(image[index]);
  };

  return (
    <div className="w-full sm:p-5 sm:flex gap-[22px] bg-white sm:border border-gray-de rounded-md">
      <div className="min-w-[380px] flex gap-[2px] overflow-auto">
        <div className="flex flex-col sm:gap-5">
          <div className="size-[305px] sm:size-[380px] sm:p-[18px] flex justify-center items-center bg-gray-f0 sm:bg-transparent border border-gray-de rounded-md">
            <Image src={selectPic} alt={""} width={1000} height={1000} />
          </div>
          <div className="w-[380px] max-w-[380px] hidden sm:flex gap-[9.15px]">
            {image.map((item, index) => (
              <div
                key={index}
                className={`size-12 min-w-12 p-1 flex justify-center items-center  border rounded-[3px] cursor-pointer ${
                  selectPic === item ? "border-gray-50" : "border-gray-de"
                }`}
                onClick={() => handleSelectPic(index)}
              >
                <Image src={item} alt={""} width={1000} height={1000} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <div className="mb-3">
          <div className="mb-[5px] flex items-center gap-[2px]">
            <TickIcon className="min-w-[24px] text-green-00" />
            <span className="text-green-00">In stock</span>
          </div>
          <h4 className="mb-[9px] text-xl font-semibold leading-[-0.013em]">
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h4>
          <div className="flex items-center">
            <Rating initialRating={4} className="mr-2" />
            <span className="mr-[10px] text-[16px] text-orange-ff leading-[19px]">
              4
            </span>
            <DotIcon className="mr-3" />
            <MessageIcon className="mr-[9px] text-gray-8b" />
            <span className="text-[16px] text-gray-78 leading-[19px]">
              32 reviews
            </span>
            <DotIcon className="mx-2" />
            <ShoppingBasketIcon className="mr-[9px] text-gray-8b" />
            <span className="text-[16px] text-gray-78 leading-[19px]">
              154 sold
            </span>
          </div>
        </div>
        <div className="mb-[21px] p-[16px] flex items-center gap-3 bg-skin-ff">
          <h5 className="text-red-fa text-[18px] font-semibold leading-[22px]">
            $98.00
          </h5>
          <p className="text-gray-60 text-[13px] leading-[16px]">50-100 pcs</p>
        </div>
        <div>
          <div className="mb-4 pb-4 flex items-center border-b border-gray-e0">
            <p className="w-[140px] text-gray-8b text-[16px] leading-[19px]">
              Price:
            </p>
            <p className="text-gray-50 text-[16px] leading-[19px]">
              Negotiable
            </p>
          </div>
          <div className="mb-4 border-b border-gray-e0">
            <div className="pb-4 flex items-center">
              <p className="w-[140px] text-gray-8b text-[16px] leading-[19px]">
                Type:
              </p>
              <p className="text-gray-50 text-[16px] leading-[19px]">
                Classic shoes
              </p>
            </div>
            <div className="pb-4 flex items-center">
              <p className="w-[140px] text-gray-8b text-[16px] leading-[19px]">
                Material:
              </p>
              <p className="text-gray-50 text-[16px] leading-[19px]">
                Plastic material
              </p>
            </div>
            <div className="pb-4 flex items-center">
              <p className="w-[140px] text-gray-8b text-[16px] leading-[19px]">
                Design:
              </p>
              <p className="text-gray-50 text-[16px] leading-[19px]">
                Modern nice
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[280px] flex flex-col gap-[23px]">
        <div className="px-[19px] py-[16px] flex flex-col gap-2 border border-gray-de rounded-md">
          <Button className="px-4 py-[10.5px] text-primary text-[16px] font-medium leading-[19px] border border-gray-de rounded-md">
            Add to cart
          </Button>
          <Button className="px-4 py-[10.5px] bg-primary text-white text-[16px] font-medium leading-[19px] rounded-md">
            Buy Now
          </Button>
        </div>
        <Button className="flex justify-center items-center gap-2 text-primary font-medium">
          <HeartIcon />
          Save for later
        </Button>
      </div>
    </div>
  );
}

/* ------------------------------------ Block-detail ------------------------------------ */
function BlockDetail() {
  const [toggle, setToggle] = useState(1);
  const handleSetToggle = (num: number) => {
    setToggle(num);
  };

  return (
    <div className="w-full">
      <div className="bg-white border border-gray-de rounded-md">
        <div className="px-2">
          <Button
            className={`p-4 text-[16px] font-medium leading-[19px] ${
              toggle === 1
                ? "text-primary border-b-2 border-primary"
                : "text-gray-8b"
            }`}
            onClick={() => handleSetToggle(1)}
          >
            Description
          </Button>
          <Button
            className={`p-4 text-[16px] font-medium leading-[19px] ${
              toggle === 2
                ? "text-primary border-b-2 border-primary"
                : "text-gray-8b"
            }`}
            onClick={() => handleSetToggle(2)}
          >
            Reviews
          </Button>
        </div>
        <div>
          <div
            className={`p-[18px] pr-[63px] text-gray-50 text-[16px] leading-[19px] ${
              toggle === 1 ? "block" : "hidden"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div
            className={`p-[18px] pr-[63px] text-gray-50 text-[16px] leading-[19px] ${
              toggle === 2 ? "block" : "hidden"
            }`}
          >
            reviews
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------ Aside-items ------------------------------------ */
function AsideItem() {
  return (
    <div>
      <div className="min-w-[280px] bg-white border rounded-md p-[20px_16px]">
        <h6 className="mb-[14px] text-[16px] leading-[19px] font-semibold">
          You may like
        </h6>
        <div className="flex flex-col gap-4">
          {householdItems.slice(0, 5).map((item, index) => (
            <Button
              key={index}
              className="flex gap-[11px] hover:scale-[1.05] duration-150"
            >
              <div className="size-[80px] p-[10px] flex justify-center items-center border border-gray-de rounded-md ">
                <Image src={item.image} alt={""} width={1000} height={1000} />
              </div>
              <div className="text-left">
                <p className="mb-[3px] tracking-[-0.013em]">{item.title}</p>
                <p className="text-gray-8b">{item.price}</p>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------ Block-recommend ------------------------------------ */
function BlockRecommend() {
  return (
    <div>
      <div className="w-full px-[22px] py-[20px] bg-white border border-gray-de rounded-md">
        <h4 className="mb-[15px] text-xl font-semibold">Related products</h4>
        <div className="grid grid-cols-6 gap-5">
          {householdItems.slice(0, 6).map((index, item) => (
            <div key={item} className="hover:scale-105 duration-200">
              <div className="size-[172px] min-w-[172px] mb-[14px] p-[20px] bg-gray-ee rounded-md flex justify-center items-center">
                <Image src={index.image} alt={""} width={1000} height={1000} />
              </div>
              <p className="text-gray-50 text-[16px] leading-[19px] mb-[19px]">
                {index.title}
              </p>
              <p className="text-gray-8b text-[16px] leading-[19px]">
                {index.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
