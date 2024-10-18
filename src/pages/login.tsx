import { useState } from "react";
import Link from "next/link";

import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { LogoIcon } from "@/assets/icons";

export default function Login() {
  /* ----- Handle input value ----- */
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, email: e.target.value });
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, password: e.target.value });
  };

  /* ----- Handle submit ----- */
  const handleSubmit = () => {};

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[350px] h-[40 0px] px-7 py-10 flex flex-col items-center justify-center gap-5 sm:border rounded-3xl">
        <div className="px-4 py-[18px] text-white bg-primary drop-shadow-logo-shadow rounded-2xl">
          <LogoIcon className="size-12" />
        </div>
        <form className="w-full flex flex-col gap-5 items-center">
          <Input
            autoComplete="current-email"
            type="email"
            placeholder="Email"
            onChange={handleChangeEmail}
          />
          <Input
            autoComplete="current-password"
            type="password"
            placeholder="Password"
            onChange={handleChangePassword}
          />
          <div>
            Do you have any account?
            <Link href="/register" className="pl-1 hover:underline">
              Register
            </Link>
          </div>
          <Button
            className="w-full py-2 bg-primary text-white rounded-lg"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
