import React from 'react'


interface Props {
    errorText: string;
}

export const ErrorMessage = ({errorText}: Props) => {
    return (
      <p className=" text-red-500 md:flex text-xs mx-1 py-1">{errorText}</p> 
    )
  }

