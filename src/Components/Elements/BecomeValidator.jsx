import React from "react";

const BecomeValidator = () => {
  return (
    <div className="BecomeValidator-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-2 mt-md-5">
            <h1 className="fw-bolder mt-2 mt-md-5" style={{ fontSize: "3rem" }}>
              Become a validator
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2 className="mt-md-5 mt-2">1. Set up your machine</h2>
            <p className="fs-5 mt-md-5 mt-2">
              In addition to any usual CLI parameters that you run polkadot
              with, you'll need to add an extra two:
              <li className="mt-md-2 mt-1">
                --validator This tells your node to try to validate when it sees
                itself as a listed authority on the network;
              </li>
              <li className="mt-md-2 mt-1">
                --key {"<SEED>"} This provides your node with a secret key that
                lets it know whether it's a listed authority on the network,
                and, if it is, lets it sign statements to authorise the creation
                of new blocks.
              </li>
            </p>
          </div>
          <div className="col-md-6">
            <h2 className="mt-md-5 mt-2">2. Apply to validate</h2>
            <p className="fs-5 mt-md-5 mt-2">
              New validators will be chosen every 24 hours on mainnet. You’ll
              need to create separate accounts for Controller, Session, and
              Stash keys on the Polkadot UI
              <a href="" className="linkstyle" style={{ color: "black" }}>
                (https://polkadot.js.org/apps/# /accounts/create)
              </a>
              . These accounts will be used to represent and control the
              validator node you just set up.
            </p>
            <p className="fs-5 mt-md-5 mt-2">
              Next you will need to get some DOT from the faucet or by asking on
              Element. Assuming you have more DOT than the lowest staked
              validator or there is an open validator slot, you can register to
              be staked. A step-by-step guide demonstrating how to set up your
              accounts and bond your DOT is available on the
              <a href="" className="linkstyle" style={{ color: "black" }}>
                wiki
              </a>
              .
            </p>
          </div>
        </div>
        <div className="row mt-md-5 mt-3">
            <div className="col-md-12 mt-md-5 mt-3 text-center">
                <h1 className="fw-bolder mt-md-5">Get your questions <br /> answered</h1>
                <a href="" className='btn border rounded-5 fs-5 p-3 m-3 mb-5 fw-bolder'>Join the Polkadot Chat</a>
                <p className="fs-5" style={{marginBottom:"6rem"}}>
                or learn how to 
              <a href="" className="linkstyle" style={{ color: "black" }}>
              build on Polkadot
              </a>
              .
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeValidator;
