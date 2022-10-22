import React from "react";

const TeamsBuildExp = () => {
  return (
    <div className="TeamsBuildExp-section">
      <div className="container">
        <div className="row mt-md-5 mt-2">
          <div className="col-md-3"></div>
          <div className="col-md-6 mt-md-5 mt-2">
            <h1>What are teams building on Polkadot? Just a few examples:</h1>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p>
                  <span className="fw-bolder "> Smart contract chains</span>{" "}
                  with WebAssembly smart contracts{" "}
                  <a href="" className="linkstyle" style={{ color: "black" }}>
                    (Astar, Moonbeam)
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card ">
              <div className="card-body">
                <p>
                  <span className="fw-bolder "> Data curation networks</span>{" "}
                  that connect all file storage chains into curated data sets
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card ">
              <div className="card-body">
                <p>
                  <span className="fw-bolder ">Oracle chains</span> that make
                  off-chain data available to all contracts on the Polkadot
                  network{" "}
                  <a href="" className="linkstyle" style={{ color: "black" }}>
                    (ChainLink)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card ">
              <div className="card-body">
                <p>
                  <span className="fw-bolder "> Identity chains</span> that link
                  accounts to a persistent identity and enable access to other
                  parachains through fewer accounts
                  <a href="" className="linkstyle" style={{ color: "black" }}>
                    (Kilt)
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card ">
              <div className="card-body">
                <p>
                  <span className="fw-bolder "> Financial chains</span> that
                  allow you to hold all your assets in one portfolio, including
                  via bridges to Bitcoin, Ethereum, Bitcoin Cash, Litecoin and
                  ZCash
                  <a href="" className="linkstyle" style={{ color: "black" }}>
                    (Acala, Parallel Finance)
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card ">
              <div className="card-body">
                <p>
                  <span className="fw-bolder "> Smart contract chains</span>{" "}
                  with WebAssembly smart contracts{" "}
                  <a href="" className="linkstyle" style={{ color: "black" }}>
                    (Astar, Moonbeam)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row bb">
          <div className="col-md-4">
            <div className="card ">
              <div className="card-body">
                <p>
                  <span className="fw-bolder "> Zero Knowledge </span>privacy chains, or bridges to existing ZK-snarks chains
                  </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card ">
              <div className="card-body">
                <p>
                  <span className="fw-bolder "> File storage chains</span> that incentivize storing data on-chain
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card">
              <div className="card-body">
                <p>
                  <span className="fw-bolder "> Bridge to Ethereum</span>, allowing Ethereum smart contracts to interact with the Polkadot network
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-md-5 mb-3">
            <div className="col-md-12 mb-md-5 mb-3 text-center">
                <h1>Want to get started?</h1>
                <a href="" className='btn border rounded-5 fs-5 p-3 m-3 mb-5 fw-bolder'>Build on Polkadot</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsBuildExp;
