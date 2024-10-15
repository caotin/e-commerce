import LogoIcon from "@/assets/icons/LogoIcon";

export default function Logo() {
  return (
    <div className="flex items-center gap-[11px]">
      <div className="px-2 py-[7px] sm:p-3 text-white bg-primary drop-shadow-logo-shadow rounded-lg">
        <LogoIcon />
      </div>
      <h1 className="text-[23px] sm:text-[29px] text-primary font-bold tracking-tighter opacity-50">
        Brand
      </h1>
    </div>
  );
}
