import React from 'react'


interface Props {
    errorText: string;
}

export const ErrorMessage = ({errorText}: Props) => {
    return (
      <p className=" text-red-500 md:flex">{errorText}</p> 
    )
  }

