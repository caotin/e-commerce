import { useState, useRef } from "react";
import Image from "next/image";

import {
  ClockIcon,
  CrossIcon,
  EmailIcon,
  MapIcon,
  PenIcon,
  PhoneIcon,
  TrashIcon,
  UserIcon,
} from "@/assets/icons";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Dropdown from "@/components/atoms/Dropdown";
import Dialog from "@/components/atoms/Dialog";

import DefaultLayout from "@/layouts/DefaultLayout";
import { address } from "@/_mock/address";

export default function Profile() {
  return (
    <DefaultLayout>
      <div className="flex justify-center">
        <div className="w-full max-w-[1180px] sm:min-h-[472.5px] mx-4 lg:mx-[131px] flex flex-col sm:my-5 sm:grid grid-cols-12 gap-6">
          <CardBody />
          <Info />
          <Address />
        </div>
      </div>
    </DefaultLayout>
  );
}
/* ------------------------------------ Card-Body ------------------------------------ */
function CardBody() {
  /* ----- Handle show dialog ----- */
  const [showDialog, setShowDialog] = useState(false);
  const handleShowDialog = () => {
    setShowDialog(true);
  };

  /* ----- Handle selectImage ----- */
  const inputRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<File | undefined>();
  const handleImageChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };
  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="col-span-8 bg-white border rounded-md">
      <div className="relative">
        <div className="w-full h-[150px] bg-primary opacity-85 rounded-t-md" />
        <div className="absolute top-[110px] left-5">
          <Image
            src={"/avatar.jpg"}
            alt="avatar"
            width={96}
            height={96}
            className="border-[3px] border-white rounded-full"
          />
        </div>
        <div className="m-6 mt-16">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h4 className="font-semibold leading-[1.1]">Bakku Hoàng</h4>
              <p>User</p>
            </div>
            <Button
              className="p-2 hover:bg-gray-ef rounded-md"
              onClick={handleShowDialog}
            >
              <PenIcon />
            </Button>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <UserIcon className="text-primary" />
              <div>
                <h5 className="mb-[0.375rem] text-[0.9375rem] font-semibold leading-[1.1]">
                  Account ID
                </h5>
                <p>{"#AC-278699"}</p>
              </div>
            </div>
            <div className="xl:px-6 flex items-center gap-3 xl:border xl:border-y-0">
              <EmailIcon className="text-primary" />
              <div>
                <h5 className="mb-[0.375rem] text-[0.9375rem] font-semibold leading-[1.1]">
                  Email
                </h5>
                <p>{"bakkuHoang@gmail.com"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="size-[22px] text-primary" />
              <div>
                <h5 className="mb-[0.375rem] text-[0.9375rem] font-semibold leading-[1.1]">
                  Phone
                </h5>
                <p>{"0965216798"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        className="w-full sm:w-[500px] h-fit m-4"
      >
        <div className="px-6 py-10 flex flex-col gap-5">
          <h4 className="text-xl text-center font-semibold">Edit Profile</h4>
          <div className="flex items-center justify-center">
            <Image
              src={image ? URL.createObjectURL(image) : "/avatar.png"}
              alt=""
              className="size-32 rounded-full object-cover"
              width={48}
              height={48}
              onClick={handleClick}
            />
            <input
              type={"file"}
              onChange={handleImageChage}
              ref={inputRef}
              className="hidden"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm">UserName</label>
            <Input />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm">Email</label>
            <Input />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm">Phone</label>
            <Input />
          </div>
          <Button className="p-2 text-white bg-primary rounded-md">Save</Button>
        </div>
      </Dialog>
    </div>
  );
}

/* ------------------------------------ Information ------------------------------------ */
function Info() {
  return (
    <div className="col-span-4 bg-white border rounded-md">
      <div className="px-5 py-4 border-b">
        <h4 className="font-semibold">Information</h4>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-f0 rounded-md">
            <ClockIcon className="size-[22px] text-gray-8b" />
          </div>
          <p>
            Create at <span className="font-semibold">{"13/01/2023"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------ Address ------------------------------------ */
function Address() {
  /* ----- Handle show dialog add ----- */
  const [showDialogAdd, setShowDialogAdd] = useState(false);
  const handleShowDialogAdd = () => {
    setShowDialogAdd(true);
  };
  /* ----- Handle show dialog edit ----- */
  const [showDialogEdit, setShowDialogEdit] = useState(false);
  const handleShowDialogEdit = () => {
    setShowDialogEdit(true);
  };
  /* ----- Handle show dialog delete ----- */
  const [showDialogDel, setShowDialogDel] = useState(false);
  const handleShowDialogDel = () => {
    setShowDialogDel(true);
  };

  return (
    <div className="col-span-12 bg-white border rounded-md">
      <div className="px-5 py-3 flex items-center justify-between border-b">
        <h4 className="font-semibold">Address</h4>
        <Button
          onClick={handleShowDialogAdd}
          className="p-2 hover:bg-gray-ef rounded-md"
        >
          <CrossIcon className="size-5 text-gray-60" />
        </Button>
      </div>
      <div className="h-full max-h-[calc(472.5px-57px)] overflow-y-auto overflow-x-hidden">
        {address.map((item, index) => (
          <div
            key={index}
            className="w-full p-3 pl-5 flex items-center justify-between hover:bg-gray-ef duration-200"
          >
            <div className="flex items-center gap-5 ">
              <div>
                <MapIcon className="size-5 text-gray-8b" />
              </div>
              <div className="text-left text-gray-60 text-[16px] leading-[19px]">
                <p className="font-semibold">{item["guide-position"]}</p>
                <p className="text-sm">
                  {item.ward}, {item.district}, {item.province}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                className="p-2 hover:bg-blue-d1 rounded-md"
                onClick={handleShowDialogEdit}
              >
                <PenIcon className="size-5 text-blue-23" />
              </Button>
              <Button
                className="p-2 hover:bg-red-ff rounded-md"
                onClick={handleShowDialogDel}
              >
                <TrashIcon className="size-5 text-red-fa" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Dialog
        isOpen={showDialogAdd}
        onClose={() => setShowDialogAdd(false)}
        className="w-fit h-fit"
      >
        <div className="px-6 py-10 flex flex-col gap-5">
          <h4 className="text-xl text-center font-semibold">Add Address</h4>
          <div className="grid grid-cols-3 gap-5">
            <div className="flex flex-col gap-2 col-span-3">
              <label className="text-sm">Location</label>
              <Input />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm">Distict</label>
              <Dropdown option={["Hồ Chí Minh"]} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm">Province</label>
              <Input />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm">Ward</label>
              <Input />
            </div>
          </div>
          <Button className="p-2 text-white bg-primary rounded-md">Add</Button>
        </div>
      </Dialog>
      <Dialog
        isOpen={showDialogEdit}
        onClose={() => setShowDialogEdit(false)}
        className="w-fit h-fit"
      >
        <div className="px-6 py-10 flex flex-col gap-5">
          <h4 className="text-xl text-center font-semibold">Edit Address</h4>
          <div className="grid grid-cols-3 gap-5">
            <div className="flex flex-col gap-2 col-span-3">
              <label className="text-sm">Location</label>
              <Input />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm">Distict</label>
              <Dropdown option={["Hồ Chí Minh"]} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm">Province</label>
              <Input />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm">Ward</label>
              <Input />
            </div>
          </div>
          <Button className="p-2 text-white bg-primary rounded-md">Edit</Button>
        </div>
      </Dialog>
      <Dialog
        isOpen={showDialogDel}
        onClose={() => setShowDialogDel(false)}
        className="w-fit h-fit"
      >
        <div className="px-6 py-10 flex flex-col gap-5">
          <h4 className="text-xl text-center font-semibold">Delete Address</h4>
          <p>Are you sure you want to delete this address?</p>
          <div className="grid grid-cols-2 gap-2">
            <Button className="p-2 text-white bg-red-fa rounded-md">
              Delete
            </Button>
            <Button className="p-2 text-white bg-primary rounded-md">
              Cancel
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
