import { LuUsers } from "react-icons/lu";
import { IoWallet } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMdCube } from "react-icons/io";

const dashboardData = [
    {
        id: 1,
        title : "Total Users",
        value : "2,450",
        growth : 12.5,
        icon : <LuUsers />
    },
    {
        id: 2,
        title : "Total Revenue",
        value : "₹45,500",
        growth : 8.2,
        icon : <IoWallet />

    },
    {
        id : 3,
        title : "Total Orders",
        value : "1,250",
        growth : 5.4,
        icon: <IoCartOutline />
    },
    {
        id: 4,
        title : "Total Products",
        value : "320",
        growth : 3.1,
        icon: <IoMdCube />
    },
]

export default dashboardData;