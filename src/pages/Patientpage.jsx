import React from 'react'
import Aihelper from '../components/Aihelper'
import Patient from '../components/Patient'
import Hero from '../components/Hero'
import About from '../components/About'
import Support from '../components/Support'
import AllInOne from '../components/AllInOne'
import Pricing from '../components/Pricing'

const Patientpage = () => {
  return (
    <>
        <Patient />
        <Aihelper />
        <Hero />
        <Support />
        <AllInOne />
        <Pricing />
    </>
  )
}

export default Patientpage
