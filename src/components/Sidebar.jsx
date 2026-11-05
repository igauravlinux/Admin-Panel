import React from 'react'
import data from '../data/sidebarData'
import { BiLogoAdobe } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import user from '../assets/user.jpg'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {




  return (
    <div className='fixed left-0 top-0 flex flex-col justify-between w-[250px] bg-[#15172B] h-screen px-5 py-5 text-gray-300'>

        {/* logo and brand name */}

        <div className='flex items-center justify-center gap-2 border-b pb-2'>
            <div className="text-3xl">
                <h1><BiLogoAdobe /></h1>
            </div>

            <div>
                <h1 className='text-center text-[20px] '>Admin<span className='text-purple-500'>Panel</span></h1>
                <p className='text-[15px]'>Manage • Monitor • Grow</p>
            </div>
        </div>

        {/* dashboard's menus */}

        <div className='flex flex-col gap-6'>
            {
            data.map((item,index) =>(
                <NavLink to={item.path} key={index} className={({isActive}) => `flex items-center gap-3 ${isActive ? "bg-purple-500 text-white rounded px-2 py-2" : "text-gray-500"}` }>
                    
                    {item.icon}
                    {item.menu}

                </NavLink>
            ))
        }
        </div>

        {/* darkmode */}

        <div className="flex justify-between items-center border-t border-b py-4 ">
            <p>☀️ Light Mode</p>

            <button className='border w-12 h-6 rounded-full p-1 transition-all duration-300 cursor-pointer'>
                <div className='w-4 h-4 bg-white rounded-full relative transition'></div>
            </button>
        </div>

        {/* admin account */}

        <div className='flex items-center gap-3'>

            <img src={user} alt="user-image" className='h-10 w-10 rounded-full' />

            <div>
                <h1>Gaurav Kumar</h1>
                <p className='text-gray-400 text-[15px]'>Admin</p>
            </div>

            <span className='ml-auto'><IoIosArrowDown /></span>

        </div>



    </div>
  )
}

export default Sidebar