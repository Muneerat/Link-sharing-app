"use client";
import React, { useState } from "react";
import {
  Phone,
  HandPhone,
  DashIcon,
  LinkIcon,
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
import { SelectInput } from "./Form/SelectInput";
import { InputLabel } from "./Form/inputLabel";
import options from "../Components/Options";
import { ErrorMessage } from "./error";

export const Main = () => {
  const [name, setName] = useState("");
  const [showLinks, setShowLinks] = useState(false);
  const [links, setLinks] = useState<{ platform: string; url: string }[]>([]);
  const [errors, setErrors] = useState<{ platform: string[]; url: string[] }>({
    platform: [],
    url: [],
  });

  // Add links
  const handleAddLinks = () => {
    setLinks([...links, { platform: "", url: "" }]);
    setShowLinks(true);
    setErrors({ platform: [], url: [] });
  };

  const getPlatformData = (platform: string) => {
    const platformColors = {
      GitHub: { color: "bg-black", icon: <GitHubWhite /> },
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
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!urlPattern.test(url);
  };

  const handleLinkChange = (index: number, field: string, value: string) => {
    const updatedLinks = [...links];
    updatedLinks[index] = { ...updatedLinks[index], [field]: value };
    setLinks(updatedLinks);

    const updatedErrors = { ...errors };
    updatedErrors[field][index] = ""; // Clear error when user changes the value
    setErrors(updatedErrors);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const newErrors = { platform: [], url: [] };
    let formIsValid = true;

    links.forEach((link, index) => {
      if (!link.platform) {
        newErrors.platform[index] = "Please select a platform";
        formIsValid = false;
      }
      if (!link.url || !isValidUrl(link.url)) {
        newErrors.url[index] = "Please provide a valid URL";
        formIsValid = false;
      }
    });

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    const stackOverflowLinks = links.filter(
      (link) => link.platform === "Stack Overflow"
    );
    if (stackOverflowLinks.length > 1) {
      setErrors({
        ...newErrors,
        platform: ["Stack Overflow link can only be used once"],
      });
      return;
    }

    console.log("Form submitted successfully!", links);
  };

  return (
    <div className="md:flex gap-7 py-2 w-full">
        <div className="bg-white md:w-2/5 w-full hidden p-10 rounded-md md:flex justify-center items-center relative z-10">
      <div className=" relative w-[307px] h-[631px]">
          <Phone/>
          <div className="absolute top-16 flex flex-col items-center justify-center w-full "></div>
          <div className="flex justify-center items-center">
            <ul className="absolute top-[17rem] w-[90%] max-h-[320px] flex flex-col items-center overflow-y-auto bg-white rounded-lg z-1">
              {links.map((link, index) => {
                const { color, icon } = getPlatformData(link.platform);
                return (
                  <li key={index}>
                    {link.platform && (
                      <a
                        className={`p-3 rounded-lg flex items-center w-60 h-12 mb-5 hover:bg-opacity-80 border-2 border-foreground ${color}`}
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
        </div>
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
          <form onSubmit={handleSubmit}>
            <div className="min-h-[397px] md:max-h-[660px] lg:h-[450px] w-full md:overflow-auto pb-10 my-2">
              {links.map((link, index) => (
                <div
                  className="bg-secondary px-4 py-4 my-10 rounded-md"
                  key={index}
                >
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <span>
                        <DashIcon />
                      </span>
                      <span className="text-destructive font-semibold">
                        Link #{index + 1}
                      </span>
                    </div>
                    <Button className="bg-secondary text-destructive font-normal">
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
                    {errors.platform[index] && (
                      <ErrorMessage errorText={errors.platform[index]} />
                    )}

                    <div className="flex items-center my-5 rounded-md py-3 w-full bg-white px-2">
                      <div>
                        <LinkIcon />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. https://www.github.com/johnappleseed"
                        className="focus:border-none focus:outline-none px-3 w-full text-border"
                        value={link.url}
                        onChange={(e) =>
                          handleLinkChange(index, "url", e.target.value)
                        }
                      />
                    </div>
                    {errors.url[index] && (
                      <ErrorMessage errorText={errors.url[index]} />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <Button className="text-secondary w-full sm:w-fit bg-primary hover:bg-primary-foreground">
                Save
              </Button>
            </div>
          </form>
        ) : (
          <>
            <div className="bg-background p-12 flex flex-col items-center justify-center my-6">
              <HandPhone />
              <div className="max-w-sm">
                <h1 className="text-destructive font-bold text-xl py-4">
                  Let your followers keep up with you!
                </h1>
                <p className="text-center text-sm">
                  Start by adding links to your various social platforms, where
                  your followers can find you.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <Button className="text-secondary w-full sm:w-fit bg-primary hover:bg-primary-foreground">
                Save
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
