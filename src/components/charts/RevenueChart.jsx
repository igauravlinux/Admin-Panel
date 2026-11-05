import React from 'react'
import {Line} from 'react-chartjs-2'
import { Chart as ChartJs , CategoryScale , LinearScale, PointElement,LineElement , Title , Tooltip , Legend, plugins, scales } from 'chart.js'

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const RevenueChart = () => {

  const data = {
      labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],

      datasets: [
        {
          label : "Revenue",
          data: [12000,18000,15000,25000,22000,35000,40000,43000,38000,52000,58000,62000]

        }
      ]
  }

  const options = {
    responsive : true,

    plugins :{
      title : {
        display :true ,
        text : "Monthly Revenue"
      },

      legend :{
        display : true,
        position : "bottom"
      },

      tooltip:{
        enabled : true
      },

    },

    scales :{
        x:{
            title :{
              display : true,
              text : "Months"
            }
         },
         y:{
            title :{
              display : true,
              text : "Revenue (₹)",
              ticks : {
                
              }
            }
         }
    }
  }



  return (
    <div>
        <Line data={data} options={options} />
    </div>
  )
}

export default RevenueChart