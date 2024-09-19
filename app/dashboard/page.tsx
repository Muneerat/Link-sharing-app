import React from 'react'
import { NavBar } from '../Components/navBar'
import { Main } from '../Components/main'

const Dashboard = () => {
  return (
    <div className='bg-background w-full h-screen py-8 px-10'>
      <NavBar />
      <Main />
    </div>
  )
}

export default Dashboard
