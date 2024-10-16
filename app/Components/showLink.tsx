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
  Frontend,
  ArrowRight,
} from "../asset/icon";
import { Button } from "@/components/ui/button";
import { SelectInput } from "./Form/SelectInput";
import { InputLabel } from "./Form/inputLabel";
import options from "../Components/Options";
import { ErrorMessage } from "./error";

export const ShowLinks = () => {
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
      "Frontend Mentor": { color: `bg-white text-red`, icon: <Frontend /> },
    };
    return platformColors[platform] || { color: "bg-gray-300", icon: null };
  };

  const isValidUrl = (url: string) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol (optional)
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*" + // path with optional @ symbol
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", // fragment locator
      "i"
    );

    return !!urlPattern.test(url);
  };

//   const handleLinkChange = (index: number, field: string, value: string) => {
//     const updatedLinks = [...links];
//     updatedLinks[index] = { ...updatedLinks[index], [field]: value };
//     setLinks(updatedLinks);

//     const updatedErrors = { ...errors };
//     updatedErrors[field][index] = ""; // Clear error when user changes the value
//     setErrors(updatedErrors);
//   };

//   const handleSubmit = (event: any) => {
//     event.preventDefault();

//     const newErrors = { platform: [], url: [] };
//     let formIsValid = true;

//     links.forEach((link, index) => {
//       if (!link.platform) {
//         newErrors.platform[index] = "Please select a platform";
//         formIsValid = false;
//       }
//       if (!link.url || !isValidUrl(link.url)) {
//         newErrors.url[index] = "Please provide a valid URL";
//         formIsValid = false;
//       }
//     });

//     if (!formIsValid) {
//       setErrors(newErrors);
//       return;
//     }

//     const stackOverflowLinks = links.filter(
//       (link) => link.platform === "Stack Overflow"
//     );
//     if (stackOverflowLinks.length > 1) {
//       setErrors({
//         ...newErrors,
//         platform: ["Stack Overflow link can only be used once"],
//       });
//       return;
//     }

//     console.log("Form submitted successfully!", links);
//   };

  return (
    <div className="bg-white md:w-2/5 w-full hidden p-10 rounded-md md:flex justify-center items-center relative z-10">
      <div className="relative w-[307px] h-[631px]">
        <Phone />
        <div className="absolute top-16 flex flex-col items-center justify-center w-full "></div>
        <div className="flex justify-center items-center">
          <ul className="absolute top-[17rem] w-[90%] max-h-[320px] flex flex-col items-center overflow-y-auto bg-white rounded-lg z-1">
            {links.map((link, index) => {
              const { color, icon } = getPlatformData(link.platform);
              const isValidLink = link.url && isValidUrl(link.url);

              return (
                <li key={index}>
                  {link.platform && (
                    <a
                      className={`p-3 rounded-lg flex justify-between items-center w-60 h-12 mb-5 hover:bg-opacity-80 border-2 border-foreground ${color} ${
                        !isValidLink ? "cursor-not-allowed opacity-70" : ""
                      }`}
                      href={isValidLink ? link.url : "#"}
                      target={isValidLink ? "_blank" : "_self"}
                      rel={isValidLink ? "noopener noreferrer" : ""}
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{icon}</span>
                        {link.platform}
                      </div>
                      <div>
                        <ArrowRight />{" "}
                      </div>
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
