import { useState, useEffect } from "react";
import Image from "next/image";

import { DotIcon, HeartIcon, NavArrowRightIcon } from "@/assets/icons";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Filter from "@/components/atoms/FilterOption";
import Rating from "@/components/atoms/Rating";
import Newsietter from "@/components/organisms/Newsietter";
import Breadcrumb from "@/components/organisms/Breadcrumb";
import Checkbox from "@/components/molecules/Checkbox";
import Navbar from "@/components/organisms/Navbar";
import ListProduct from "@/components/organisms/ListProduct";
import Dropdown from "@/components/atoms/Dropdown";

import DefaultLayout from "@/layouts/DefaultLayout";
import { category } from "@/_mock/category";
import { condition } from "@/_mock/condition";

export default function Home() {
  return (
    <DefaultLayout>
      <Navbar />
      <Breadcrumb breadcrumb={["Clothings", "Men’s wear", "Summer clothing"]} />
      <div className="sm:m-0 flex flex-col justify-center items-center">
        <div className="w-full max-w-[1180px] mx-4 lg:mx-[131px] mb-5 sm:mb-[167px] sm:grid sm:grid-cols-[230px_1fr] sm:gap-[28px]">
          <FilterOption />
          <Content />
        </div>
        <ListProduct title="You may also like" />
      </div>
      <Newsietter />
    </DefaultLayout>
  );
}

/* ------------------------------------ Filter-sidebar ------------------------------------ */
function FilterOption() {
  /* ----- Handle select radio ----- */
  const [select, setSelect] = useState<string>("Any");

  const handleSelectRadio = (item: string) => {
    setSelect(item);
  };

  return (
    <div className="hidden sm:flex flex-col gap-5 overflow-auto ">
      <Filter title="Category">
        {category.slice(0, 4).map((item) => (
          <li key={item}>
            <Button className="w-full py-2 text-left text-gray-50 text-[16px] leading-[19px] hover:bg-gray-ef">
              {item}
            </Button>
          </li>
        ))}
      </Filter>
      <Filter title="Price range">
        <div className="grid grid-cols-2 gap-[9px]">
          <div>
            <p>Min</p>
            <Input type="number" />
          </div>
          <div>
            <p>Max</p>
            <Input type="number" />
          </div>
          <Button className="py-[9.5px] col-start-1 col-end-3 text-primary text-[16px] font-medium leading-[19px] border border-gray-de rounded-md ">
            Apply
          </Button>
        </div>
      </Filter>
      <Filter title="Condition">
        {condition.map((item) => (
          <div
            key={item}
            className="py-[6px] pr-4 flex items-center gap-[10px] cursor-pointer"
            onClick={() => handleSelectRadio(item)}
          >
            <input
              type="radio"
              className="size-4"
              value={item}
              checked={select === item}
              onChange={() => handleSelectRadio(item)}
            />
            <p className="text-[16px] leading-[19px]">{item}</p>
          </div>
        ))}
      </Filter>

      <Filter title="Ratings">
        <Checkbox>
          <Rating initialRating={5} />
        </Checkbox>
        <Checkbox>
          <Rating initialRating={4} />
        </Checkbox>
        <Checkbox>
          <Rating initialRating={3} />
        </Checkbox>
        <Checkbox>
          <Rating initialRating={2} />
        </Checkbox>
      </Filter>
    </div>
  );
}

/* ------------------------------------ Content ------------------------------------ */

function Content() {
  const page = 8;
  /* ----- Handle pagination ----- */
  const [currentButton, setCurrentButton] = useState<number>(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState<number[]>([]);

  const numberOfPages: number[] = [];
  for (let i = 1; i <= page; i++) {
    numberOfPages.push(i);
  }

  useEffect(() => {
    let tempNumberOfPages = [...numberOfPages];
    if (currentButton <= 2) {
      tempNumberOfPages = tempNumberOfPages.slice(0, 3);
    } else if (currentButton >= 3) {
      tempNumberOfPages = tempNumberOfPages.slice(
        currentButton - 2,
        currentButton + 1
      );
    }
    setArrOfCurrButtons(tempNumberOfPages);
  }, [currentButton]);

  return (
    <div>
      <div className="w-full px-[10px] pb-[30px] flex flex-col items-center gap-5">
        <div className="w-full h-[62px] pl-5 pr-[10px] hidden sm:flex justify-between items-center bg-white border border-gray-de rounded-md">
          <p className="text-[16px] leading-[19px]">
            12,911 items in
            <span className="font-semibold"> Mobile accessory</span>
          </p>
        </div>
        <div className="w-full flex flex-col gap-[10px]">
          {
            <div className="p-2 flex gap-2 sm:gap-[12px] bg-white border border-gray-de rounded-md relative">
              <div className="p-[6.53px] sm:p-[12.13px] size-[98px] sm:size-[210px] flex justify-center items-center">
                <Image
                  src={"/Item/cloth.png"}
                  alt={""}
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-[calc(100%_-_116px)] my-1 sm:my-0 sm:mt-[15px] sm:mb-[9px]">
                <p className="mb-[5px] sm:mb-4 text-gray-50 text-[16px] sm:font-medium sm:text-dark-1c leading-[19px] sm:leading-[22px] overflow-hidden whitespace-nowrap text-ellipsis">
                  GoPro HERO6 4K Action Camera - Black
                </p>
                <p className="mb-[6px] sm:mb-1 text-dark-33 text-[16px] sm:text-[20px] font-semibold leading-[19px] sm:leading-[28px] overflow-hidden whitespace-nowrap text-ellipsis">
                  $57.70
                </p>
                <div className="h-[19px] sm:mb-3 flex items-center gap-2">
                  <Rating initialRating={4} className="w-[80px]" />
                  <p className="text-orange-ff text-[13px] sm:text-[16px] leading-[16px] sm:leading-[19px]">
                    4.5
                  </p>
                  <DotIcon className="mr-[2px] sm:ml-1 sm:mr-[1px] text-gray-de" />
                  <p className="text-gray-8b text-[13px] leading-[16px]">
                    154 orders
                  </p>
                </div>
                <p className="sm:mb-2 hidden sm:block text-gray-50 tracking-[-0.013em] text-ellipsis overflow-hidden">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit
                </p>
                <Button className="hidden sm:flex text-primary text-[16px] font-medium leading-[19px]">
                  View Detail
                </Button>
              </div>
              <Button
                className={`p-2 hidden sm:flex border rounded-md absolute top-5 right-5`}
              >
                <HeartIcon />
              </Button>
            </div>
          }
        </div>
      </div>
      <div className="px-[10px] hidden sm:flex justify-end gap-[9px]">
        <Dropdown
          title="Show"
          defaultValue={10}
          option={[1, 5, 10, 20, 50, 100]}
          className="w-[125px] py-0 h-10"
        />
        <div className="flex items-center">
          <Button
            className={`w-11 h-10 px-[10px] py-2 flex justify-center items-center rounded-l-md border border-gray-de ${
              currentButton === 1 ? "text-gray-8b" : ""
            }`}
            onClick={() =>
              setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            <NavArrowRightIcon className="rotate-180" />
          </Button>

          <div className="flex">
            {arrOfCurrButtons.map((page) => (
              <Button
                key={page}
                className={`w-11 h-10 flex justify-center items-center text-[16px] font-medium leading-[19px] border border-r-0 border-gray-de ${
                  currentButton === page ? "bg-gray-ef text-gray-8b" : ""
                }`}
                onClick={() => setCurrentButton(page)}
              >
                {page}
              </Button>
            ))}
          </div>
          <Button
            className={`w-11 h-10 px-[10px] py-2 flex justify-center items-center rounded-r-md border border-gray-de ${
              currentButton === numberOfPages.length ? "text-gray-8b" : ""
            }`}
            onClick={() =>
              setCurrentButton((prev) =>
                prev === numberOfPages.length ? prev : prev + 1
              )
            }
          >
            <NavArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
