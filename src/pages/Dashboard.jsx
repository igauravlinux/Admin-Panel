import React from 'react'
import dashboardData from '../data/dashboardData'
import StatCard from '../components/StatCard'
import RevenueChart from '../components/charts/RevenueChart'


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
              dashboardData.map((data,index) => (
                <StatCard data={data} />
              ))
            }
          </div>

          {/* Chart */}
            <div className='bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mt-6'>
              <RevenueChart />
            </div>
      </div>
  )
}

export default Dashboard