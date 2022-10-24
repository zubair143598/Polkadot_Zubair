import React from "react";

const BuildingPolkadot = () => {
  return (
    <div className="BuildingPolkadot-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h1 className="p-3 mt-5 fw-bolder">Who's building Polkadot?</h1>
            <p className="mt-2 p-5 fs-4 text-white">
              Polkadot is the flagship project by , a Swiss Foundation founded
              to facilitate a fully functional and user-friendly decentralized
              web.
              <a href="#" className="text-white">
                Web3 Foundation
              </a>
              , a Swiss Foundation founded to facilitate a fully functional and
              user-friendly decentralized web.
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-5">
            <p className="mt-md-5 mt-2 p-2 fs-5 text-white">
            The Web3 Foundation is partnering with best-in-class entities to build Polkadot and foster development of the services and applications that will run on it.
            </p>
            <p className="mt-2 p-2 fs-5  text-white">
            Researchers from Inria Paris and ETH Zurich, developers from Parity Technologies, and capital partners from crypto-funds such as Polychain Capital are all working together to develop a superlative realization of Web3, with Polkadot at its core.
            </p>
            <p className="mt-2 p-2 fs-5 text-white">
            Web3 Foundation is  
              <a href="#" className="text-white">
              providing grants
              </a>
              for development of the ecosystem.
            </p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-3 mb-md-5 mb-5  col-4">
            <img
              src="./Assists/logo-circle-parity-white.svg"
              className="w-25 mb-md-5 mb-5"
              alt=""
            />
          </div>
          <div className="col-md-3 mb-md-5 mb-5  col-4">
            <img
              src="./Assists/logo-circle-chainsafe-white.svg"
              className="w-25 mb-md-5 mb-5"
              alt=""
            />
          </div>
          <div className="col-md-3 mb-md-5 mb-5  col-4">
            <img
              src="./Assists/logo-circle-soramitsu-white.svg"
              className="w-25 mb-md-5 mb-5"
              alt=""
            />
          </div>
          <div className="col-md-3  mb-md-5 mb-5 col-4">
            <img
              src="./Assists/logo-circle-polkadot-js-white.svg"
              className="w-25  mb-md-5 mb-5"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingPolkadot;
