"use client";
import React, { useState } from "react";
import {
  Phone,
  HandPhone,
  DashIcon,
  LinkIcon,
  Frontend,
  GitHubWhite,
  TwitterWhite,
  LinkedInWhite,
  YouTubeWhite,
  FacebookWhite,
  TwitchWhite,
  DevWhite,
  CodewarsWhite,
  FreeCodeCampWhite,
  GitLabWhite,
  HashnodeWhite,
  StackWhite,
} from "../asset/icon";
import { Button } from "@/components/ui/button";
import Input from "./Form/Input";
import { SelectInput, SelectOptions } from "./Form/SelectInput";
import Logo from "../asset/logo.png";
import { LinkInput } from "./links";
import { InputLabel } from "./Form/inputLabel";
import options from "../Components/Options";
import { platform } from "os";
import { RxValue } from "react-icons/rx";
import { ErrorMessage } from "./error";

export const Main = () => {
  const [name, setName] = useState("");
  const [showLinks, setShowLInks] = useState(false);
  const [links, setLinks] = useState<{ platform: string; url: string }[]>([]);
  const [error, setError] = useState('');

  //Add links
  const handleAddLinks = () => {
    setLinks([...links, { platform: "", url: "" }]);
    setShowLInks(true);
  };

  const getPlatformData = (platform: string) => {
    const platformColors: {
      [key: string]: { color: string; icon: React.ReactNode };
    } = {
      GitHub: { color: "bg-black", icon: <GitHubWhite /> },
      "Frontend Mentor": { color: "bg-white", icon: <Frontend /> },
      Twitter: { color: "bg-black", icon: <TwitterWhite /> },
      LinkedIn: { color: "bg-blue-700", icon: <LinkedInWhite /> },
      YouTube: { color: "bg-red-600", icon: <YouTubeWhite /> },
      Facebook: { color: "bg-blue-600", icon: <FacebookWhite /> },
      Twitch: { color: "bg-purple-600", icon: <TwitchWhite /> },
      "Dev.to": { color: "bg-black", icon: <DevWhite /> },
      Codewars: { color: "bg-[#8a1a50]", icon: <CodewarsWhite /> },
      FreeCodeCamp: { color: "bg-[#302267]", icon: <FreeCodeCampWhite /> },
      GitLab: { color: "bg-[#eb4925]", icon: <GitLabWhite /> },
      Hashnode: { color: "bg-[#0330d1]", icon: <HashnodeWhite /> },
      "Stack Overflow": { color: "bg-[#ec7100]", icon: <StackWhite /> },
    };

    return platformColors[platform] || { color: "bg-gray-300", icon: null };
  };

  const isValidUrl = (url: string) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate http or https
      "((([a-zd]([a-zd-][a-zd]))\\.?)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-zd%_.~+])" + // port and path
      "(\\?[;&a-zd%_.~+=-]*)?" + // query string
      "(\\#[-a-zd_]*)?$", "i"
    );
    return !!urlPattern.test(url);
  };

  const handleLinkChange = (index: number, field: string, value: string) => {
    const updatedLinks = [...links];
    
    // Validate the URL field
    if (field === "url" && !isValidUrl(value)) {
      console.log("Invalid URL format");
    } else {
       // Update platform or url
      updatedLinks[index] = { ...updatedLinks[index], [field]: value };
      setLinks(updatedLinks);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  
    // Check if no links are present
    // if (links.length === 0) {
    //   console.log("At least one link is required");
    //   return;
    // }
  
    // Ensure all platforms and URLs are filled and valid
    for (let link of links) {
      if (!link.platform) {

        setError("Please select a platform")
        console.log("Please select a platform");

        return;
      }
      if (!link.url || !isValidUrl(link.url)) {
        console.log("Please provide a valid URL");
        return;
      }
    }
  
    // Ensure unique Stack Overflow link
    const stackOverflowLinks = links.filter(link => link.platform === "Stack Overflow");
    if (stackOverflowLinks.length > 1) {
      console.log("Stack Overflow link can only be used once");
      return;
    }
  
    // Continue with form submission logic
    console.log("Form submitted successfully!", links);
  };


  return (
    <div className="md:flex gap-7 py-2 w-full">
      <div className="bg-white md:w-2/5 w-full hidden p-10 rounded-md md:flex justify-center items-center relative z-10">
        <Phone />
        <ul className="absolute  top-80 w-[38%] max-h-[350px] flex flex-col items-center overflow-y-auto overflow-hidden bg-white rounded-lg m- z-1 ">
          {links.map((link, index) => {
            const { color, icon } = getPlatformData(link.platform);
            return (
              <li key={index}>
                {link.platform && (
                  <a
                    className={`bg-blac p-3 rounded-lg flex items-center  w-60 h-12 mb-5 hover:bg-opacity-80  border-2 border-foreground ${color}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-2">{icon}</span>
                    {link.platform}
                  </a>
                )}
              </li>
            );
          })}
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
          <form onSubmit={handleSubmit}>
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
                  {error && <ErrorMessage errorText='Please select a platform' />}
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
          <div className="flex justify-end ">
          <Button
            className={` text-secondary w-full sm:w-fit bg-primary hover:bg-primary-foreground`}
          >
            Save
          </Button>
        </div>
          </form>
         
        ) : (
          <>
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
        <div className="flex justify-end ">
          <Button
            className={` text-secondary w-full sm:w-fit ${
              showLinks ? "bg-primary" : "bg-primary-foreground"
            }`}
          >
            Save
          </Button>
        </div>
        </>
        )}
      
      </div>
    </div>
  );
};
