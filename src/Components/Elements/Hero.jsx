import React from 'react'

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className='heading1'>The multichain vision for Web3 starts here.</h1>
            <p>Polkadot unites and secures a growing ecosystem of specialized blockchains called parachains. Apps and services on Polkadot can securely communicate across chains, forming the basis for a truly interoperable decentralized web.</p>
            <a href="" className='btn border rounded-5 fs-5 p-3 m-3 fw-bolder'>Learn Parachains</a>
            <a href="" className='btn border rounded-5 fs-5 p-3 m-3 fw-bolder'>Learn Cross-Chain</a>
          </div>
          <div className="col-md-6 col2">
            <img src="./Assists/xcm-animation-outer.svg" className='w-75 ' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero