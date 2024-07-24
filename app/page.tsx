"use client";
import Image from "next/image";
import Logo from "../app/asset/logo.png";
import Input from "./Components/Form/Input";
import { useState } from "react";
import Log from "./asset/icon";
import { CiMail } from "react-icons/ci";
import { HiLockClosed } from "react-icons/hi";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <div className="bg-background flex justify-center items-center align-middle my-auto h-screen">
      <div className="md:w-2/6 w-5/6">
        <div className="flex md:justify-center my-10">
          <Image src={Logo} alt="" />
        </div>
        <div className="sm:bg-secondary-foreground text-destructive md:p-10">
          <div className="">
            <h1 className="text-bold text-2xl">Login</h1>
            <p className="text-border">
              Add your details below to get back into the app
            </p>
          </div>

          <Input
            label="Enter text:"
            onChange={setInputValue}
            prefix={<CiMail />}
            placeholder="e.g. alex@email.com"
          />
          <Input
            label="Enter text:"
            onChange={setInputValue}
            prefix={<HiLockClosed />}
            placeholder="Enter your password"
          />
          <Button className="w-full hover:bg-primary-foreground hover:text-white">Login</Button>
        </div>
      </div>
    </div>
  );
}
