// InputComponent.tsx
import React, { ChangeEvent, FC, useState } from "react";

interface InputComponentProps {
  label: string;
  prefix: any;
  placeholder: string;    
  onChange: (value: string) => void;
}

const Input: FC<InputComponentProps> = ({ label, prefix,placeholder, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col my-5 relative">
      <div className="inline-flex absolute left-2 inset-y-8 text-base-600 pt-2 ">
        {prefix}
      </div>
      <label>{label}</label>
      <input
        className="border-2 border-foreground outline-none -md rounded-lg p-2 pl-10 w-full "
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
