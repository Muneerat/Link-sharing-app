"use client";
import React, { useState } from "react";
import { Phone, HandPhone, DashIcon, LinkIcon } from "../asset/icon";
import { Button } from "@/components/ui/button";
import Input from "./Form/Input";
import { SelectInput, SelectOptions } from "./Form/SelectInput";
import Logo from "../asset/logo.png";
import { LinkInput } from "./links";
import { InputLabel } from "./Form/inputLabel";
import options from "../Components/Options";
import { platform } from "os";
import { RxValue } from "react-icons/rx";
import { log } from "console";

export const Main = () => {
  const [name, setName] = useState("");
  const [showLinks, setShowLInks] = useState(false);
  const [links, setLinks] =useState<{ platform: string; url: string }[]>([]);

  //Add links
  const handleAddLinks = () => {
    setLinks([...links, { platform: "", url: "" }]);
    setShowLInks(true);
  };

  console.log(links.length);
  // console.log((links.platform).length);

  // const handleRemoveLinks = (index) => {
  //   setLinks(links.filter((_, i) => i!== index))
  //   if (links.length === 0) setShowLInks(false);
  // }

  const handleLinkChange = (index: number, field: string, value: string) => {
    const updatedLinks = [...links];
    updatedLinks[index] = { ...updatedLinks[index], [field]: value }; // Update platform or url
    setLinks(updatedLinks);
  };

  // const handleChangeLink = (e, index) => {
  //   const platform = e.target.value;
  //   setLinks(links.map((link, i) =>
  //     i === index? {...link, platform} : link
  //   ))
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(links);
  // }

  // const handleReset = () => {
  //   setName("");
  //   setLinks([]);
  // }

  // const handleToggleLinks = () => {
  //   setShowLInks(!showLinks);
  // }

  // const handleCopyLink = (index) => {
  //   const link = links[index].url;

  return (
    <div className="md:flex gap-7 py-2 w-full">
      <div className="bg-white md:w-2/5 w-full hidden p-10 rounded-md md:flex justify-center items-center relative">
        <Phone />
        <ul className="absolute  top-80 w-[38%] max-h-[350px] flex flex-col items-center overflow-auto bg-white ">
          {links.map((link, index) => (
            <li key={index}>
              {link.platform  && (
                <a
                  className="bg-black p-4 rounded-lg flex items-center justify-between w-60 h-12 mb-5"
                  href={link.url}
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  {link.platform}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white md:w-3/5 w-full rounded-md sm:p-10 p-5">
        <h1 className="py-3 font-bold text-2xl text-destructive">
          Customize your links
        </h1>
        <p className="text-border pb-10">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <Button
          className="w-full bg-white border-primary border text-primary p-6 hover:bg-secondary duration-200 ease-in"
          onClick={handleAddLinks}
        >
          + Add new link
        </Button>
        {showLinks ? (
          /* //Link */
          <div className=" o min-h-[397px] md:max-h-[660px] lg:h-[450px] w-full md:overflow-auto pb-10 my-2">
            {links.map((link, index) => (
              <div
                className=" bg-secondary px-4 py-4 my-10 rounded-md "
                key={index}
              >
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <span className="">
                      <DashIcon />
                    </span>
                    <span className="text-destructive font-semibold">
                      Link #{index + 1}
                    </span>
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
                    value={link.platform}
                    onChange={(value) =>
                      handleLinkChange(index, "platform", value)
                    }
                  />
                  <div className="flex items-center my-5 rounded-md py-3 w-full bg-white px-2">
                    <div>
                      <LinkIcon />
                    </div>
                    <input
                      type="text"
                      placeholder="e.g. https://www.github.com/johnappleseed"
                      className=" focus:border-none focus:outline-none px-3 w-full text-border"
                      value={link.url}
                      onChange={(e) =>
                        handleLinkChange(index, "url", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
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
          </div>
        )}
        <div className="flex justify-end ">
          <Button
            className={` text-secondary w-full sm:w-fit ${
              showLinks ? "bg-primary" : "bg-primary-foreground"
            }`}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
