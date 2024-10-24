import { EmailIcon } from "@/assets/icons";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

export default function Newsietter() {
  return (
    <div className="w-full h-[190px] hidden sm:flex flex-col justify-center items-center bg-gray-ef">
      <h4 className="text-xl font-semibold tracking-[-0.013em]">
        Subscribe on our newsletter
      </h4>
      <p className="mb-[21px] text-gray-60">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <div className="flex justify-center gap-2">
        <Input
          type="email"
          placeholder="Email"
          validate={"pl-[8px]"}
          StartIcon={<EmailIcon />}
        />
        <Button className="px-4 text-white bg-primary rounded-md">
          Subscribe
        </Button>
      </div>
    </div>
  );
}
