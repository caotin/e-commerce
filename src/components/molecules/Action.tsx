import { HeartIcon, PlaceholderIcon, ShopCartIcon } from "@/assets/icons";

import Button from "@/components/atoms/Button";

export default function Action() {
  return (
    <div className="flex items-center gap-5 sm:gap-6">
      <Button className="w-6 h-6 flex items-center justify-center">
        <HeartIcon />
      </Button>
      <Button className="w-6 h-6 flex items-center justify-center">
        <ShopCartIcon />
      </Button>
      <Button
        className="w-6 h-6 flex items-center justify-center"
        href="profile"
      >
        <PlaceholderIcon />
      </Button>
    </div>
  );
}
