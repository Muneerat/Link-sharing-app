import React from "react";
import Input from "./Form/Input";
import { LinkIcon } from "../asset/icon";

export const LinkInput = ( ) => {
  return (
    <div className="flex items-center my-5 rounded-md py-3 w-full bg-white px-2">
      <div>
        <LinkIcon />
      </div>
      {/* <input
        type="text"
        placeholder="e.g. https://www.github.comne-none px-3"
        onChange={onChange}
        value={value}
      /> */}
      {/* {children} */}
    </div>
  );
};
