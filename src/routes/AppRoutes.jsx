import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Analytics from '../pages/Analytics'
import Settings from '../pages/Settings'
import Users from '../pages/Users'
import Layout from '../components/Layout'
import Products from '../pages/Products'
import Orders from '../pages/Orders'
import Logout from '../pages/Logout'
const AppRoutes = () => {
  return (
    <div>
        <Routes>
         <Route element={ <Layout/>}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/users' element={<Users />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/products' element={<Products />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/logout' element={<Logout />} />
         </Route>
        </Routes>
    </div>
  )
}

export default AppRoutes