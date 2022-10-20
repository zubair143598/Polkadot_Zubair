import React from "react";

const Powering = () => {
  return (
    <div className="powering-section">
      <div className="container  text-center">
        <div className="row mt-5">
          <div className="col-md-12 mt-5">
            <h1 className="mt-5">Powering the Polkadot network</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <p className="mt-3  fs-5">
              The DOT token serves three distinct purposes: governance over the
              network, staking and bonding.
            </p>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md-4 p-3">
            <div className="card bg-black">
              <div className="card-body p-4">
                <img
                  src="./Assists/home-icon-token-1.svg"
                  className="w-50"
                  alt=""
                />
                <h3>Governance</h3>
                <p>
                  Polkadot token holders have complete control over the
                  protocol. All privileges, which on other platforms are
                  exclusive to miners, will be given to the Relay Chain
                  participants (DOT holders), including managing exceptional
                  events such as protocol upgrades and fixes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card bg-black">
              <div className="card-body p-4">
                <img
                  src="./Assists/home-icon-token-2.svg"
                  className="w-50"
                  alt=""
                />
                <h3> Staking</h3>
                <p>
                  Game theory incentivizes token holders to behave in honest
                  ways. Good actors are rewarded by this mechanism whilst bad
                  actors will lose their stake in the network. This ensures the
                  network stays secure.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card bg-black">
              <div className="card-body p-4">
                <img
                  src="./Assists/home-icon-token-3.svg"
                  className="w-50"
                  alt=""
                />
                <h3> Bonding</h3>
                <p>
                  New parachains are added by bonding tokens. Outdated or
                  non-useful parachains are removed by removing bonded tokens.
                  This is a form of proof of stake.
                </p>
              </div>
              
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 p-5 mt-5">
                <h2 className="fw-bolder">Learn more about the DOT token</h2>
                <button className='btn border rounded-5 fs-5 p-3 m-3 fw-bolder text-white mb-5'>Discover BOT</button>
            </div>
            <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Powering;
