import { MenuIcon } from "@/assets/icons";
import Action from "@/components/molecules/Action";
import Logo from "@/components/molecules/Logo";
import SearchGroup from "@/components/molecules/SearchGroup";

export default function Header() {
  return (
    <div className="mx-4 sm:mx-[131px] flex gap-5 items-center justify-between sticky">
      <div className="h-14 sm:h-[86px] flex items-center">
        <MenuIcon className="mr-[18px] sm:hidden" />
        <Logo />
      </div>
      <SearchGroup />
      <Action />
    </div>
  );
}
