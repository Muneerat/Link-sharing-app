import React from 'react'
import { NavBar } from '../Components/navBar'
import { Main } from '../Components/main'

const Dashboard = () => {
  return (
    <div className='bg-secondary w-full h-screen p-4'>
      <NavBar />
      <Main />
    </div>
  )
}

export default Dashboard
