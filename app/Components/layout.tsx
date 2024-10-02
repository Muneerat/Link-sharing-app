import React, {FC,ReactNode} from 'react'
import { NavBar } from './navBar'

interface LayoutProps {
    children: ReactNode;
  
}
const Layout: FC<LayoutProps> = ({ children }) => {  
    return (
        <div className='bg-background w-full h-screen py-8 sm:px-10'>
        <NavBar />
        {children}
      </div>
      )
  };  
export default Layout;
