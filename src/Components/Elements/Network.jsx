import React from "react";

const Network = () => {
  return (
    <div className="network-section">
      <div className="container">
        <div className="row rowcent">
          <div className="col-md-4  urow ">
            <img src="./Assists/home-icon1.svg" className="img2" alt="" />
            <h3 className="mt-md-3">True interoperability</h3>
            <p className="mt-3">
              Polkadot enables cross-blockchain transfers of any type of data or
              asset, not just tokens. Connecting to Polkadot gives you the
              ability to interoperate with a wide variety of blockchains in the
              Polkadot network.
            </p>
          </div>
          <div className="col-md-4  urow">
            <img src="./Assists/home-icon2.svg" className="img2" alt="" />
            <h3 className="mt-md-3">Economic & transactional scalability</h3>
            <p className="mt-3">
              Polkadot provides unprecedented economic scalability by enabling a
              common set of validators to secure multiple blockchains. Polkadot
              provides transactional scalability by spreading transactions
              across multiple parallel blockchains.
            </p>
          </div>
          <div className="col-md-4  urow">
            <img src="./Assists/home-icon3.svg" className="img2" alt="" />
            <h3 className="mt-3">Easy blockchain innovation</h3>
            <p className="mt-3">
              Create a custom blockchain in minutes using the Substrate
              framework. Connect your chain to Polkadot and get interoperability
              and security from day one. This ease of development helps
              Polkadot's network grow.
            </p>
          </div>
          <div className="col-md-4">
            <img src="./Assists/home-icon4.svg" className="img2" alt="" />
            <h3 className="mt-3">High energy efficiency</h3>
            <p className="mt-3">
              Polkadot consumes a small fraction of the energy used by
              conventional blockchains thanks to its next-generation nominated
              proof-of-stake (NPoS) model. Using the equivalent of ~6.6 US
              households worth of energy per year, Polkadot has the lowest
              carbon footprint among proof-of-stake protocols analyzed in recent
              research.
            </p>
          </div>
          <div className="col-md-4">
            <img src="./Assists/home-icon5.svg" className="img2" alt="" />
            <h3 className="mt-3">Security for everyone</h3>
            <p className="mt-3">
              Polkadot's novel data availability and validity scheme allows
              chains to interact with each other in a meaningful way. Chains
              remain independent in their governance, but united in their
              security.
            </p>
          </div>
          <div className="col-md-4">
            <img src="./Assists/home-icon6.svg" className="img2" alt="" />
            <h3 className="mt-3">User-driven governance</h3>
            <p className="mt-3">
              Polkadot has a sophisticated governance system where all
              stakeholders have a voice. Network upgrades are coordinated
              on-chain and enacted autonomously and without forking the network,
              ensuring that Polkadot’s development remains future-proof and
              community-driven.
            </p>
          </div>
        </div>
        <div className="row text-center mt-5">
          <div className="col-md-3"></div>
          <div className="col-md-6 mt-5">
            <h1>Learn more about Polkadot's technology</h1>
            <a href="" className='btn border rounded-5 fs-5 p-3 m-3 fw-bolder'>Discover Polkadot</a>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Network;
