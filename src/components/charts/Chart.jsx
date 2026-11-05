import React from 'react'
import {Chart as ChartJs , CategoryScale , LinearScale , PointElement , LineElement , Title , Tooltip , Legend} from 'chart.js'

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Chart = () => {


  return (
    <div>Chart</div>
  )
}

export default Chart