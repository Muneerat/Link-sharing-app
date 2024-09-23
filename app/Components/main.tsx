'use client'
import React, { useState } from "react";
import { Phone, HandPhone, DashIcon } from "../asset/icon";
import { Button } from "@/components/ui/button";
import Input from "./Form/Input";
import { SelectInput, SelectOptions } from "./Form/SelectInput";

export const Main = () => {
  const [name, setName] = useState('')
  const options = [
    // { `<ArrowUp /> GitHub`,'YouTube','LinkedIn','Facebook','Frontend Mentor'},
    {label: 'GitHub'}
  ]
  return (
    <div className="md:flex gap-7 py-5 w-full">
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
        <Button className="w-full bg-white border-primary border text-primary p-6 hover:bg-secondary duration-200 ease-in ">
          + Add new link
        </Button>
        <div className=" bg-background p-12 fle flex-col items-center justify-center my-6 hidden">
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
        </div>
        {/* //Link */}
        <div className=" bg-secondary px-4 py-4 my-10 rounded-md">
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <span className="">
                    <DashIcon />
                    </span>
                   <span className="text-destructive font-semibold">Link #1</span>
                </div>
                <Button className="bg-secondary text-destructive font-normal ">Remove</Button>
            </div>
            <div>
                <SelectInput 
                        options={options}
                        placeholder='Select'
                        value={name}
                        onChange={setName} 
                       />

            </div>
        </div>
        <div className="flex justify-end ">
          <Button className=" bg-primary-foreground text-secondary w-full sm:w-fit">Save</Button>
        </div>
      </div>
    </div>
  );
};
