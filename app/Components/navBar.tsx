"use client";
import React, { useState } from "react";
import Logo from "../asset/logo.png";
import Image from "next/image";
import Link from "next/link";
import { LInkHoverIcon, LinkIcon, ProfileIcon,ProfileHoverIcon } from "../asset/icon";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState(false);

  const handleClick = () => {
    setActiveLink(true);
  };

  return (
    <div
      className={`bg-white flex justify-between rounded-lg py-3 px-2 items-center mb-4`}
    >
      <div className="">
        <Image src={Logo} alt="Logo" width={140} />
      </div>
      <div className="flex justify-between items-center gap-10">
        <Link
          href=""
          className={`flex items-center gap-1 rounded-md text-border font-bold  ${
            activeLink ? "py-3 px-4 bg-secondary text-primary " : "bg-red-10"
          }`}
          onClick={handleClick}
        >
          {activeLink ?  <LInkHoverIcon /> : <LinkIcon />}
          Links
        </Link>
        <div className="hover:text-primary">
          <Link
            href=""
            className={`flex items-center gap-1 rounded-md text-border font-bold  ${
              activeLink ? "py-3 px-4 bg-secondary text-primary " : "bg-red-10"
            }`}
            onClick={handleClick}
          >
             {activeLink ?   <ProfileHoverIcon /> :  <ProfileIcon />}
            Profile Details
          </Link>
        </div>
      </div>
      <div className="">
        <Link
          href=""
          className="text-primary flex items-center gap-1 border-primary border rounded-md p-3"
        >
          Preview
        </Link>
      </div>
    </div>
  );
};
