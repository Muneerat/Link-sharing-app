// InputComponent.tsx
import React, { ChangeEvent, FC, useState } from "react";

interface InputComponentProps {
  placeholder: string;    
  value: string;
  className?: string;
  id?: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const MainInput: FC<InputComponentProps> = ({ placeholder,id,className,value, onChange, type, ...props }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
  
      <input
        className={`border-2 border-foreground outline-none rounded-lg p-3 md:pl-10 pl-1 focus:border-primary text-black  ${className}`}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        id={id}
        min={2}
        {...props}
        
      />
  );
};

export default MainInput;
