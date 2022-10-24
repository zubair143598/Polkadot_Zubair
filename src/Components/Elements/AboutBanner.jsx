import React from "react";

const AboutBanner = () => {
  return (
    <>
      <div className="AboutBanner-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 mt-md-5 mt-2 mb-md-5 mb-2">
              <h1
                className="fw-bolder mt-md-5 mt-2 mb-md-5 mb-2"
                style={{ fontSize: "4rem" }}
              >
                About Polkadot, a platform for Web3
              </h1>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
      <div className="polkadotmission-section bg-black text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mt-md-5 mt-2">
              <h1
                className="fw-bolder mt-md-5 mt-2"
                style={{ fontSize: "3rem" }}
              >
                The Polkadot <br /> mission
              </h1>
              <p className="fs-5 mt-4">
                We envision a Web where our identity and our data is our own -
                safely secured from any central authority.
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 mt-md-5 mt-2">
              <p className="fs-5 mt-md-5">
                Polkadot will enable a completely decentralized web where users
                are in control.
              </p>
              <p className="fs-5 mt-4">
                Polkadot is built to connect private and consortium chains,
                public and permissionless networks, oracles, and future
                technologies that are yet to be created. Polkadot facilitates an
                internet where independent blockchains can exchange information
                and transactions in a trustless way via the Polkadot relay
                chain.
              </p>
              <p className="fs-5 mt-4">
                Polkadot makes it easier than ever to create and connect
                decentralized applications, services, and institutions. By
                empowering innovators to build better solutions, we seek to free
                society from its reliance on a broken web where its large
                institutions can’t violate our trust.
              </p>
              <a href="" className='btn border rounded-5 text-white p-2 m-3 mb-5 fw-bolder'>Learn About the Technology</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;
