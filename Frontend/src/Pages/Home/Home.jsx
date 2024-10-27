import React from 'react'
import HeroCrousel from './../../Components/ImageCrousel/ImageCrousel'
import About from './../../Components/HomeAbout/About'
import AlumniMentor from '../../Components/AlumniMentor/AlumniMentor'

const Home = () => {
  return (
    <div>
      <HeroCrousel/>
      <About/>
      <AlumniMentor/>
    </div>
  )
}

export default Home
