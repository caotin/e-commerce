import MenuIcon from "@/assets/icons/MenuIcon";
import Logo from "@/components/molecules/Logo/page";
import Action from "@/components/molecules/Action/page";

export default function Header() {
  return (
    <div className="mx-4 sm:px-[131px] flex items-center sticky">
      <div className="w-full h-14 sm:h-[86px] flex items-center">
        <MenuIcon className="mr-[18px] sm:hidden" />
        <Logo />
      </div>
      <Action />
    </div>
  );
}
