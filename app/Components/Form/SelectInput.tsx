import { ArrowDrown, ArrowUp, Phone } from "@/app/asset/icon"; // Make sure icons are correctly imported
import React, { useEffect, useState } from "react";

interface SelectOptionsProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export const SelectOptions = ({
  label,
  className,
  onClick,
  icon,
}: SelectOptionsProps) => {
  return (
    <button
      className={`flex items-center text-border w-full py-2  ${className}`}
      onClick={onClick}
    >
      {icon && <div className="mr-2">{icon}</div>}
      {label}
    </button>
  );
};

interface SelectInputProps {
  onChange?: (value: string) => void;
  options?: { label: string; icon: React.ReactNode }[];
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
}: SelectInputProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    icon: React.ReactNode;
  } | null>(null); 

  const handleOptionClick = (option: {
    label: string;
    icon: React.ReactNode;
  }) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  useEffect(() => {
    if (onChange && selectedOption) {
      onChange(selectedOption.label); 
    }
  }, [selectedOption]);

  return (
    <div
      className={`px-4 my-2 py-1 rounded-md hover:cursor-pointer relative w-full border-foreground bg-white flex justify-between items-center transition-all duration-300 ease-in-out`}
      role="select"
      onClick={() => setShowOptions(!showOptions)}
      tabIndex={0}
      aria-label="select"
    >
      {selectedOption ? (
        <SelectOptions
          label={selectedOption.label}
          icon={selectedOption.icon}
        />
      ) : (
        <SelectOptions label={placeholder} />
      )}
      {showOptions && (
        <div className="absolute left-0 right-0 top-16 bg-inherit z-10 px-4 py-2 border border-foreground rounded-md max-h-56 overflow-y-auto transition-all ease-in duration-300 ">
          {options?.map((option, index) => (
            <SelectOptions
              key={index}
              label={option.label}
              className="border-b border-foreground"
              icon={option.icon}
              onClick={() => handleOptionClick(option)}
            />
          ))}
        </div>
      )}
      <div
        className={`duration-300 ease-in-out transition-transform ${
          showOptions ? "rotate-180" : "rotate-0"
        }`}
      >
        {showOptions ? <ArrowUp /> : <ArrowDrown />}
      </div>
    </div>
  );
};
