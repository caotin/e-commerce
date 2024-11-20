import { useState } from "react";

import {
  MenuIcon,
  HeartIcon,
  HomeIcon,
  ListIcon,
  InventoryIcon,
  HeadsetIcon,
  BusinessIcon,
} from "@/assets/icons";
import Action from "@/components/molecules/Action";
import Logo from "@/components/molecules/Logo";
import SearchGroup from "@/components/molecules/SearchGroup";
import Button from "@/components/atoms/Button";
import Dialog from "@/components/atoms/Dialog";
import Image from "next/image";

export default function Header() {
  /* ----- Handle show dialog ----- */
  const [showDialog, setShowDialog] = useState(false);
  const handleShowDialog = () => {
    setShowDialog(true);
  };

  return (
    <div className="flex justify-center bg-white sticky top-0 z-50">
      <div className="w-full max-w-[1180px] mx-4 lg:mx-[131px] flex gap-5 items-center justify-between sticky ">
        <div className="flex items-center gap-[18px]">
          <Button
            onClick={handleShowDialog}
            className="h-14 sm:h-[86px] flex items-center"
          >
            <MenuIcon className="sm:hidden" />
          </Button>
          <Button className="h-14 sm:h-[86px] flex items-center" href={"/"}>
            <Logo />
          </Button>
        </div>
        <SearchGroup />
        <Action />
      </div>
      <Dialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        className="w-fit h-screen rounded-none rounded-r-md absolute left-0"
      >
        <div className="h-[113px] p-5 bg-gray-ef">
          <div className="mb-[10px]">
            <Image src={"/avatar.png"} alt="avatar" width={44} height={44} />
          </div>
          <div className="flex ">
            <Button className="text-[16px] leading-[19px]">
              Sign in | Register
            </Button>
          </div>
        </div>
        <div className="mx-[10px]">
          <div className="py-[10px] border-b border-gray-de">
            <div className="w-[260px] px-[13px] py-3 flex items-center gap-4">
              <HomeIcon className="text-gray-8b" />
              <p className="text-[16px] leading-[19px]">Home</p>
            </div>
            <div className="w-[260px] px-[13px] py-3 flex items-center gap-4">
              <ListIcon className="text-gray-8b" />
              <p className="text-[16px] leading-[19px]">Categories</p>
            </div>
            <div className="w-[260px] px-[13px] py-3 flex items-center gap-4">
              <HeartIcon className="text-gray-8b" />
              <p className="text-[16px] leading-[19px]">Favorites</p>
            </div>
            <div className="w-[260px] px-[13px] py-3 flex items-center gap-4">
              <InventoryIcon className="text-gray-8b" />
              <p className="text-[16px] leading-[19px]">My orders</p>
            </div>
          </div>
          <div className="py-[10px] border-b border-gray-de">
            <div className="w-[260px] px-[13px] py-3 flex items-center gap-4">
              <HeadsetIcon className="text-gray-8b" />
              <p className="text-[16px] leading-[19px]">Contact Us</p>
            </div>
            <div className="w-[260px] px-[13px] py-3 flex items-center gap-4">
              <BusinessIcon className="text-gray-8b" />
              <p className="text-[16px] leading-[19px]">About</p>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
