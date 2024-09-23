import { ArrowDrown, ArrowUp } from "@/app/asset/icon";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface SelectOptions {
  label?: string;
  image?: string;
  onClick?: () => void;
  className?: string;
}
export const SelectOptions = ({ label,className, onClick,image  }: SelectOptions) => {
  return (
    <button className={`flex text-primary w-full py-2 ${className} `} onClick={onClick}>
      {image && <Image src={image} alt={label}/>}
      {label}
    </button>
  );
};

interface SelectInput {
  onChange?: (value: string) => void;
  options?: any[];
  className?: string;
  placeholder?: string;
  value?: string;
}
export const SelectInput = ({
  onChange,
  options,
  className,
  placeholder,
  value,
}: SelectInput) => {
  const [showOptions, setShowOptions] = useState(false);
  const [opt, setOpt] = useState("");
  // const handleOptionClick = (option: string) => {
  //   setOpt(option);
  //   setShowOptions(false);  // Close the dropdown after selection
  // }

  useEffect(() => {
    if (onChange) {
      onChange(opt);
    }
  }, [opt]);

  return (
    <div
      className={`px-4 py-1 rounded-md hover:cursor-pointer relative max-w-4xl w-full  border-foreground bg-white flex justify-between items-center`}
      role="select"
      onClick={() => setShowOptions(!showOptions)}
      tabIndex={0}
    >
      {opt ? (
        <SelectOptions label={opt} />
      ) : (
        <SelectOptions label={placeholder} />
      )}
      {showOptions && (
        <div className="absolute left-0 right-0 top-20 bg-inherit z-10 px-4 py-2 border border-foreground rounded-md max-h-56 max-h-xl overflow-y-auto" >
          {/* {
              !!opt && <SelectOptions label={placeholder} />
            } */}
          {options?.map((option, index) => (
            <SelectOptions
              key={index}
              label={option}
              className="border-b border-foreground "
              image={option}
              onClick={() => setOpt(option)}
            />
          ))}
        </div>
      )}
      <div className=" duration-200 ease-linear">
        {showOptions  ?<ArrowUp /> :  <ArrowDrown /> }
        </div>
    </div>
  );
};
