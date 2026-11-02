import React from 'react'
import { FaQuestion } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import userImage from '../assets/user.jpg'
import { useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();

  let pageTitle = "Dashboard";

  switch(location.pathname){
      case "/":
          pageTitle = "Dashboard";
          break;
        
      case "/users":
          pageTitle = "Users"
          break;

      case "/analytics":
          pageTitle = "Analytics"
          break;

      case "/products":
        pageTitle = "Products"
        break;

      case "/orders":
        pageTitle = "Orders"
        break;

      case "/settings":
        pageTitle = "Settings"
        break;

      case "/logout":
        pageTitle = "Logout"
        break;

        default:
          pageTitle = "Dashboard"

  }


  return (
    <div className='bg-white border-b shadow-sm px-10 py-2 flex items-center justify-between'>

      <div>
        <p>{pageTitle}</p>
      </div>

      <div>
        <input type="text" className='outline-0 border rounded-xl w-[300px] px-2 py-3 shadow-sm shadow-olive-400 focus:border-purple-500' placeholder='Search anything...' />
      </div>

      <div className='flex items-center gap-5'>
        <div className='flex gap-2'>
          <button className='flex justify-center items-center
           bg-white h-10 w-10 rounded-xl shadow-sm hover:bg-purple-100 transition'><FaQuestion /></button>
          <button className='flex justify-center items-center
           bg-white h-10 w-10 rounded-xl shadow-sm hover:bg-purple-100 transition'><FaRegBell /></button>
          <button className='flex justify-center items-center
           bg-white h-10 w-10 rounded-xl shadow-sm hover:bg-purple-100 transition'><FaRegEye /></button>
        </div>
        <div className="user">
            <img src={userImage} alt="user-image" className='h-10 w-10 rounded-full' />
        </div>
      </div>


    </div>
  )
}

export default Navbar