import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'
import AllInOne from '../components/AllInOne'
import Pricing from '../components/Pricing'

const Homepage = () => {
  return (
    <>
        <Home />
        <Services />
        <AllInOne />
        <Pricing />
    </>
  )
}

export default Homepage