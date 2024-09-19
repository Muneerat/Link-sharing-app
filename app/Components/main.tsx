import React from 'react'
import { Phone } from '../asset/icon'

export const Main = () => {
  return (
    <div className='flex gap-7'>
        <div className='bg-white w-2/6 p-5 rounded-md'>
            <Phone />
        </div>
        <div className='bg-white w-4/5 rounded-md'>
         <h1 className=''>Customize your links</h1>
        </div>
    </div>
  )
}
