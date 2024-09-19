import React from "react";
import { Phone, HandPhone } from "../asset/icon";
import { Button } from "@/components/ui/button";

export const Main = () => {
  return (
    <div className="md:flex gap-7 py-5 w-full h-">
      <div className="bg-white md:w-2/5 w-full hidden p-10 rounded-md md:flex justify-center items-center">
        <Phone />
      </div>
      <div className="bg-white md:w-3/5 w-full rounded-md p-10 m-">
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
        <div className=" bg-background p-12 flex flex-col items-center justify-center my-6">
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
        <div className="flex justify-end ">
          <Button className=" bg-primary-foreground text-secondary">Save</Button>
        </div>
      </div>
    </div>
  );
};
