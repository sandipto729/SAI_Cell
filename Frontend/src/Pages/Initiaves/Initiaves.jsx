import React from 'react'
import Stamp from '../../Components/Stamp/Stamp'
import TechSurfers from '../../Components/TechSurfers/TechSurfer'
import SAM from '../../Components/SAM/SAM'
import Stank from '../../Components/ScholarTank/Stank'
import Bschool from '../../Components/Bschool/Bshool'


const Initiaves = () => {
  return (
    <div>
      <section id='stamp'>
        <Stamp />
      </section>
      
    <section id='techsurfers'>
      <TechSurfers />
    </section>

    <section id='sam'>
      <SAM />
    </section>

    <section id='stank'>
      <Stank />
    </section>

    <section id='bschool'>
      <Bschool />
    </section>


    </div>


  )
}

export default Initiaves
