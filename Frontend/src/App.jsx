import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './layouts/navbar/navbar'
import Footer from './layouts/footer/footer'
import Headroom from 'react-headroom'


const App = () => {
  return (
    <div>
      <Headroom>
        <Navbar />
      </Headroom>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
