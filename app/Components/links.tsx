import React from "react";
import Input from "./Form/Input";
import { LinkIcon } from "../asset/icon";

export const Links = () => {
  return (
    <div className="flex items-center my-5 rounded-md py-3 w-full bg-white px-2">
      <div>
        <LinkIcon />
      </div>
      <input
        type="text"
        placeholder="e.g. https://www.github.com/johnappleseed"
        className=" focus:border-none focus:outline-none px-3"
      />
    </div>
  );
};
