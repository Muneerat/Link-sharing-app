import React from 'react'

interface Props{
  text : string
}

export const InputLabel = ({text}:Props) => {
  return (
   <label className='p-1 text-border'>{text}<sup>*</sup></label>
  )
}
