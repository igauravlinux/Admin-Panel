import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <main className='ml-[250px] flex-1 min-w-0 flex flex-col'>
          <Navbar />
          <Outlet />
        </main>
    </div>
  )
}

export default Layout