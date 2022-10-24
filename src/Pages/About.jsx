import React from 'react'
import AboutBanner from '../Components/Elements/AboutBanner'
import AboutBelog from '../Components/Elements/AboutBelog'

import BuildingPolkadot from '../Components/Elements/BuildingPolkadot'
import FounderDetails from '../Components/Elements/FounderDetails'
import Founders from '../Components/Elements/Founders'
import Gettouch from '../Components/Elements/Gettouch'

const About = () => {
  return (
    <>
    <AboutBanner/>
    <BuildingPolkadot/>
    <Founders/>
    <FounderDetails/>
    <Gettouch/>
    <AboutBelog/>
    </>
  )
}

export default About