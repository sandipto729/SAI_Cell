import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './layouts/navbar/navbar'
import Footer from './layouts/footer/footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
