"use client";
import React, { useState } from "react";
import Logo from "../asset/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  LInkHoverIcon,
  LinkIcon,
  ProfileIcon,
  ProfileHoverIcon,
  LogoIcon,
  EyeIcon,
} from "../asset/icon";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link:string) => {
    setActiveLink(link);
  };

  return (
    <div
      className={`bg-white flex justify-between rounded-lg py-5 px-5 items-center mb-4`}
    >
      <div className="">
        <Image src={Logo} alt="Logo" width={140} className="sm:flex hidden" />
        <div className="flex sm:hidden">
          <LogoIcon />
        </div>
      </div>
      <div className="flex justify-between items-center gap-10">
        <Link
          href="/link"
          className={`flex items-center gap-1 rounded-md text-border font-bold  ${
            activeLink === "link"
              ? "py-3 px-4 bg-secondary text-primary "
              : "hover:text-primary"
          }`}
          onClick={()=> handleClick("link")}
        >
          {activeLink === "link" ? <LInkHoverIcon /> : <LinkIcon />}
          <p className="sm:flex hidden">Links</p>
        </Link>
        <div className="hover:text-primary">
          <Link
            href="/profile"
            className={`flex items-center gap-1 rounded-md text-border font-bold  ${
              activeLink === 'profile'
                ? "py-3 px-4 bg-secondary text-primary "
                : "hover:text-primary"
            }`}
            onClick={() => handleClick("profile")}
          >
            {activeLink === "profile" ? <ProfileHoverIcon /> : <ProfileIcon />}
            <p className="sm:flex hidden">Profile Details</p>
          </Link>
        </div>
      </div>
      <div className="">
        <Link
          href=""
          className="text-primary flex items-center gap-1 border-primary border rounded-md p-3 hover:bg-secondary duration-200 ease-in-out"
        >
          <p className="sm:flex hidden">Preview</p>
          <div className="flex sm:hidden">
            <EyeIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};
