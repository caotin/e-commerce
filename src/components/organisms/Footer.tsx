import Image from "next/image";
import { AppstoreIcon, ChplayIcon } from "@/assets/icons";
import Logo from "@/components/molecules/Logo";
import Button from "@/components/atoms/Button";

export default function Footer() {
  return (
    <footer className="hidden sm:block">
      <div className="p-[40px_0px_59px] flex justify-center bg-white">
        <div className="w-full max-w-[1180px] mx-4 lg:mx-[131px] flex justify-between">
          <div className="flex flex-col">
            <Logo />
            <p className="mt-[15px] mb-4 text-gray-50">
              Best information about the company <br /> gies here but now lorem
              ipsum is
            </p>
            <div className="flex gap-[10px]">
              <Image
                src={"/Social/facebook.png"}
                alt=""
                width={32}
                height={32}
              />
              <Image
                src={"/Social/twitter.png"}
                alt=""
                width={32}
                height={32}
              />
              <Image
                src={"/Social/linkedin.png"}
                alt=""
                width={32}
                height={32}
              />
              <Image
                src={"/Social/instagram.png"}
                alt=""
                width={32}
                height={32}
              />
              <Image
                src={"/Social/youtube.png"}
                alt=""
                width={32}
                height={32}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[3px]">
            <p className="mb-[12px] text-[16px] font-medium leading-[22px]">
              About
            </p>
            <Button className="text-start text-gray-8b tracking-[-0.013em] hover:underline">
              About Us
            </Button>
            <Button className="text-start text-gray-8b tracking-[-0.013em] hover:underline">
              Find store
            </Button>
            <Button className="text-start text-gray-8b tracking-[-0.013em] hover:underline">
              Categories
            </Button>
            <Button className="text-start text-gray-8b tracking-[-0.013em] hover:underline">
              Blogs
            </Button>
          </div>
          <div className="flex flex-col gap-[3px]">
            <p className="mb-[12px] text-[16px] font-medium leading-[22px]">
              Partnership
            </p>
            <Button className="text-start text-gray-8b tracking-[-0.013em] hover:underline">
              About Us
            </Button>
            <Button className="text-start text-gray-8b tracking-[-0.013em] hover:underline">
              Find store
            </Button>
            <Button className="text-start text-gray-8b tracking-[-0.013em] hover:underline">
              Categories
            </Button>
            <Button className="text-start text-gray-8b tracking-[-0.013em] hover:underline">
              Blogs
            </Button>
          </div>
          <div className="flex flex-col gap-[3px]">
            <p className="mb-[12px] text-[16px] font-medium leading-[22px]">
              Information
            </p>
            <Button className="text-start text-gray-8b tracking-[-0.013em] hover:underline">
              Help Center
            </Button>
            <Button className="text-start text-gray-8b tracking-[-0.013em] hover:underline">
              Money Refund
            </Button>
            <Button className="text-start text-gray-8b tracking-[-0.013em] hover:underline">
              Shipping
            </Button>
            <Button className="text-start text-gray-8b tracking-[-0.013em] hover:underline">
              Contact us
            </Button>
          </div>
          <div className="flex flex-col gap-[3px]">
            <p className="mb-[12px] text-[16px] font-medium leading-[22px]">
              For users
            </p>
            <Button className="text-start text-gray-8b tracking-[-0.013em] hover:underline">
              Login
            </Button>
            <Button className="text-start text-gray-8b tracking-[-0.013em] hover:underline">
              Register
            </Button>
            <Button className="text-start text-gray-8b tracking-[-0.013em] hover:underline">
              Settings
            </Button>
            <Button className="text-start text-gray-8b tracking-[-0.013em] hover:underline">
              My Orders
            </Button>
          </div>
          <div className="flex flex-col">
            <p className="mb-[15px] text-[16px] font-medium leading-[22px]">
              Get app
            </p>
            <Button className="mb-2">
              <AppstoreIcon />
            </Button>
            <Button>
              <ChplayIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="h-[68px] flex justify-center items-center bg-gray-ef border-t border-gray-de">
        <div className="w-full max-w-[1180px] mx-4 lg:mx-[131px] flex justify-between items-center">
          <p>© 2023 Ecommerce. </p>
        </div>
      </div>
    </footer>
  );
}
