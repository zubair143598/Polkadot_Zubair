import React from "react";

const Protocole = () => {
  return (
    <div className="Protocole-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h1 className="p-3 protocolheading mt-5">
              An open-source protocol built for everyone
            </h1>
          </div>
          <div className="col-md-6 mt-5">
            <p className="mt-5 p-5 fs-4 text-white">
              Polkadot is an open-source project founded by the{" "}
              <a href="#" className="text-white">
                Web3 Foundation
              </a>
              . <br /> <br /> Web3 Foundation has commissioned five teams and
              over 100 developers to build Polkadot, including:
            </p>
            <p className="p-5"></p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-3 col-4">
            <img
              src="./Assists/logo-circle-parity-white.svg"
              className="img1"
              alt=""
              />
          </div>
          <div className="col-md-3 col-4">
            <img
              src="./Assists/logo-circle-chainsafe-white.svg"
              className=" img1"
              alt=""
            />
          </div>
          <div className="col-md-3 col-4">
            <img
              src="./Assists/logo-circle-soramitsu-white.svg"
              className=" img1"
              alt=""
              />
          </div>
          <div className="col-md-3 col-4">
            <img
              src="./Assists/logo-circle-polkadot-js-white.svg"
              className=" img1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protocole;
