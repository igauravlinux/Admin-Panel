import { LuLayoutDashboard , LuUsers } from "react-icons/lu";
import { IoAnalyticsOutline } from "react-icons/io5";
import {  FaDropbox } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

const data = [
    {
        menu : "Dashboard" ,
        icon : <LuLayoutDashboard />,
        path : '/'
    },
    {
        menu : "Users" ,
        icon : <LuUsers />,
        path : '/users'
    },
    {
        menu : "Analytics" ,
        icon : <IoAnalyticsOutline />,
        path : '/analytics'
    },
    {
        menu : "Products" ,
        icon : <FaDropbox />,
        path : '/products'

    },
    {
        menu : "Orders" ,
        icon : <GoGift />,
        path : '/orders'
    },
    {
        menu : "Settings" ,
        icon : <IoSettingsOutline />,
        path : '/settings'
    },
    {
        menu : "Logout" ,
        icon : <CiLogout />,
        path : '/logout'
    },
]

export default data; 