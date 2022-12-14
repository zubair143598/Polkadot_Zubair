import React from "react";

const Parachains = () => {
  return (<>
    <div className="Parachains-section bg-black">
      <div className="container text-white ">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-5 text-center">
            <h1
              className="p-2 fw-bolder mt-md-5 mt-3"
              style={{ fontSize: "3rem" }}
            >
              Parachains: parallel transaction processing
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <p className="fs-5">
              Parachains are specialized blockchains that connect to Polkadot.
              They will have characteristics specialized for their use cases and
              the ability to control their own governance.
            </p>
            <p className="fs-5">
              Interactions on parachains are processed in parallel, enabling
              highly scalable systems.
            </p>
            <p className="fs-5">
              Transactions can be spread out across the chains, allowing many
              more transactions to be processed in the same period of time.
            </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <p className="fs-5 fw-bolder">Current method: </p>
            <p className="fs-5">Single transaction</p>
            <img src="./Assists/dg-transactions-old.svg" alt="" />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <p className="fs-5 fw-bolder">Polkadot method: </p>
            <p className="fs-5">Multi parallelized transactions</p>
            <img src="./Assists/dg-transactions-new.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="netglos-section">
        <div className="container text-center">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-7  text-white my-5">
                    <span className='p-md-5 fs-5'><h1 className='mt-5 mx-5 p-2 '>Groundbreaking Technology</h1>
                    <p className='mb-5'>Polkadot is solving many of the problems that have held back blockchain technology so far ??? all in one place, without compromising..</p></span>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Parachains;
