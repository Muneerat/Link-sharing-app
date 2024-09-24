"use client";
import React, { useState } from "react";
import {
  Phone,
  HandPhone,
  DashIcon,
} from "../asset/icon";
import { Button } from "@/components/ui/button";
import Input from "./Form/Input";
import { SelectInput, SelectOptions } from "./Form/SelectInput";
import Logo from "../asset/logo.png";
import { Links } from "./links";
import { InputLabel } from "./Form/inputLabel";
import options from "../Components/Options"
import { platform } from "os";

export const Main = () => {
  const [name, setName] = useState("");
  const [showLinks, setShowLInks] = useState(false)
  const [links, setLinks] = useState([]);

  const handleAddLinks = () => {
    setLinks([...links,{platform: "", url: ""}])
    setShowLInks(true);
  }
 
  return (
    <div className="md:flex gap-7 py-2 w-full">
      <div className="bg-white md:w-2/5 w-full hidden p-10 rounded-md md:flex justify-center items-center">
        <Phone />
      </div>
      <div className="bg-white md:w-3/5 w-full rounded-md sm:p-10 p-5">
        <h1 className="py-3 font-bold text-2xl text-destructive">
          Customize your links
        </h1>
        <p className="text-border pb-10">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <Button className="w-full bg-white border-primary border text-primary p-6 hover:bg-secondary duration-200 ease-in" 
               onClick={handleAddLinks}>
          + Add new link
        </Button>
        {showLinks ?  
        /* //Link */
        <div className=" o min-h-[397px] md:max-h-[660px] lg:h-[450px] w-full md:overflow-auto pb-10 my-2">
          {links.map((link,index) => (
             <div className=" bg-secondary px-4 py-4 my-10 rounded-md " key={index}>
             <div className="flex justify-between">
               <div className="flex items-center gap-2">
                 <span className="">
                   <DashIcon />
                 </span>
                 <span className="text-destructive font-semibold">Link #{index + 1}</span>
               </div>
               <Button className="bg-secondary text-destructive font-normal ">
                 Remove
               </Button>
             </div>
             <div>
               <InputLabel />
               <SelectInput
                 options={options}
                 placeholder="Select Platform"
                 value={name}
                 onChange={setName}
               />
               <Links />
             </div>
           </div>
          ))}
        </div>
        : 
        <div className=" bg-background p-12 flex flex-col items-center justify-center my-6 ">
          <HandPhone />
          <div className="max-w-xl text-center py-2">
            <h1 className="py-3 font-bold text-2xl text-destructive">
              Let’s get you started
            </h1>
            <p className="text-border">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        </div>}
        <div className="flex justify-end ">
          <Button className={` text-secondary w-full sm:w-fit ${showLinks ? "bg-primary" : "bg-primary-foreground" }`}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
