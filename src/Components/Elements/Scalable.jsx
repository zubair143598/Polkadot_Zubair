import React from "react";

const Scalable = () => {
  return (
    <>
      <div className="scalable-section">
        <div className="container">
          <div className="row my-5 ">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
              <h1 className="scalableheading">
                A scalable, interoperable & secure network protocol for the next
                web
              </h1>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
      <div className="banner1-section ">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 mt-2 card1">
              <div className="card border-white">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 col-4">
                      <img src="./Assists/github.svg" className="w-75" alt="" />
                    </div>
                    <div className="col-md-8 col-8">
                      <h3>GitsdaHub</h3>
                      <p>Latest veraion & histry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mt-2 card2">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 col-4">
                      <img src="./Assists/github.svg" className="w-75" alt="" />
                    </div>
                    <div className="col-md-8 col-8">
                      <h3>GitHub</h3>
                      <p>Latest veraion & histry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mt-2 card3">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 col-4">
                      <img src="./Assists/github.svg" className="w-75" alt="" />
                    </div>
                    <div className="col-md-8 col-8">
                      <h3>GitHub</h3>
                      <p>Latest veraion & histry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-8 my-5">
              <img
                src="./Assists/dg-network-xl-2.svg"
                className="w-100 mt-5 img5"
                alt=""
              />
            </div>
            <div className="col-md-4 text-white mt-5">
              <h1 className="mt-5">
                Any type of data across any type of blockchain
              </h1>
              <p>
                Polkadot is a network protocol that allows arbitrary data—not
                just tokens—to be transferred across blockchains.
              </p>
              <p>
                This means Polkadot is a true multi-chain application
                environment where things like cross-chain registries and
                cross-chain computation are possible.
              </p>
              <p>
                Polkadot can transfer this data across public, open,
                permissionless blockchains as well as private, permissioned
                blockchains.
              </p>
              <p className="mb-5">
                This makes it possible to build applications that get
                permissioned data from a private blockchain and use it on a
                public blockchain. For instance, a school's private,
                permissioned academic records chain could send a proof to a
                degree-verification smart contract on a public chain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scalable;
