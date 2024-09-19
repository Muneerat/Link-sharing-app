// InputComponent.tsx
import React, { ChangeEvent, FC, useState } from "react";

interface InputComponentProps {
  label?: any;
  prefix: React.ReactNode;
  suffix?: React.ReactNode;
  placeholder: string;    
  value: string;
  className?: string;
  id?: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputComponentProps> = ({ label, prefix,suffix,placeholder,id,className,value, onChange, type, ...props }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <div className="flex flex-col my-5 relative  md:text-base text-xs ">
      <div className="inline-flex absolute left-2 md:inset-y-10 inset-y-7 text-base-600">
        {prefix}
      </div>
     
      <label>{label}</label>
      <input
        className={`border-2 border-foreground outline-none rounded-lg p-2 md:pl-10 pl-6 w-full focus:border-primary ${className}`}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        id={id}
        min={2}
        {...props}
        
      />
      {suffix &&  <div className="md:inline-flex absolute right-2 md:inset-y-10 inset-y-7 text-base-600 md:text-base text-xs ">
                {suffix}
            </div>}
    </div>
  );
};

export default Input;
