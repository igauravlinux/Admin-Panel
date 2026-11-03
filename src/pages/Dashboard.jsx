import React from 'react'
import dashboardData from '../data/dashboardData'


const Dashboard = () => {
  return (
      <div className='bg-gray-100 px-10 py-5 min-h-screen'>

        {/* heading */}

          <h1 className='text-xl font-semibold text-gray-800'>Dashboard Overview</h1>
          <p className='text-gray-500 text-sm mt-1'>Welcome back! Here's what's happening today.</p>

          {/* grid container */}

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>

            {/* card */}
             {
              dashboardData.map((data,index) =>(
                 <div key={data.id} className='p-5 rounded-2xl bg-white shadow-sm border border-gray-100'>

                {/* title and icon */}
                <div className='flex justify-between'>
                  <p className='text-sm text-gray-600'>{data.title}</p>

                  <span className='text-purple-600 h-10 w-10 bg-purple-200 flex justify-center items-center rounded-2xl'>{data.icon}</span>
                </div>

                {/* value */}
                <p className='text-2xl font-semibold mt-1'>{data.value}</p>

                {/* growth */}
                <p className={`text-sm mt-1 ${data.growth > 0 ? "text-green-600" : data.growth < 0 ? "text-red-600" : "text-gray-500" }`}><span>{data.growth > 0 ? "+" : ""}</span>{data.growth}<span>% this month</span> </p>
              </div>
              ))
             }





          </div>
      </div>
  )
}

export default Dashboard