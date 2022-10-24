import React from 'react'
import mainBelog from '../Components/Elements/mainBelog';
import Founded from '../Components/Elements/Founded';
import Hero from '../Components/Elements/Hero';
import Network from '../Components/Elements/Network';
import Powering from '../Components/Elements/Powering';
import Protocole from '../Components/Elements/Protocole';
import SecurityModel from '../Components/Elements/SecurityModel';
// import Faqs from '../Components/Utils/Faqs'

const Home = () => {
  return (
    <>
    <Hero/>
    <Network/>
    <Powering/>
    <Protocole/>
    <Founded/>
    <mainBelog/>
    <SecurityModel/>


    {/* <Faqs/> */}
    </>
  )
}

export default Home