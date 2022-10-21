import React from "react";

const Connecting = () => {
  return (
    <div className="Connecting-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="mt-md-5">Connecting the dots</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card border-white my-md-5 my-2">
              <div className="card-body">
                <img
                  src="./Assists/icon-glossary-relay-chain.svg"
                  className="w-50"
                  alt=""
                />
                <h1>Relay Chain </h1>
                <p>
                  The heart of Polkadot, responsible for the network’s shared
                  security, consensus and cross-chain interoperability.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-white my-md-5 my-2">
              <div className="card-body">
                <img
                  src="./Assists/icon-glossary-parachain.svg"
                  className="w-50"
                  alt=""
                />
                <h1>Parachains</h1>
                <p>
                  Sovereign blockchains that can have their own tokens and
                  optimize their functionality for specific use cases.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-white my-md-5 my-2">
              <div className="card-body">
                <img
                  src="./Assists/icon-glossary-parathread.svg"
                  className="w-50"
                  alt=""
                />
                <h1>Parathreads</h1>
                <p>
                  Similar to parachains but with a pay-as-you-go model. More
                  economical for blockchains that don’t need continuous
                  connectivity to the network.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-white my-md-5 my-2">
              <div className="card-body">
                <img
                  src="./Assists/icon-glossary-bridge.svg"
                  className="w-50"
                  alt=""
                />
                <h1>Bridges</h1>
                <p>
                  Allow parachains and parathreads to connect and communicate
                  with external networks like Ethereum and Bitcoin.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1>Consensus Roles</h1>
          </div>
          <div className="col-md-3">
            <div className="card border-white my-md-5 my-2">
              <div className="card-body">
                <img
                  src="./Assists/icon-glossary-nominator.svg"
                  className="w-50"
                  alt=""
                />
                <h1>Nominators</h1>
                <p>
                  Secure the Relay Chain by selecting trustworthy validators and
                  staking dots.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-white my-md-5 my-2">
              <div className="card-body">
                <img
                  src="./Assists/icon-glossary-validator.svg"
                  className="w-50"
                  alt=""
                />
                <h1> Validators</h1>
                <p>
                  Secure the relay chain by staking dots, validating proofs from
                  collators and participating in consensus with other
                  validators.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-white my-md-5 my-2">
              <div className="card-body">
                <img
                  src="./Assists/icon-glossary-collator.svg"
                  className="w-50"
                  alt=""
                />
                <h1>Collators</h1>
                <p>
                  Maintain shards by collecting shard transactions from users
                  and producing proofs for validator
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1>Governance Roles</h1>
          </div>
          <div className="col-md-3">
            <div className="card border-white my-md-5 my-2">
              <div className="card-body">
                <img
                  src="./Assists/icon-glossary-council-member-2.svg"
                  className="w-50"
                  alt=""
                />
                <h1> Council Members</h1>
                <p>
                  Elected to represent passive stakeholders in two primary
                  governance roles: proposing referenda and vetoing dangerous or
                  malicious referenda.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-white my-md-5 my-2">
              <div className="card-body">
                <img
                  src="./Assists/icon-glossary-technical-committee-2.svg"
                  className="w-50"
                  alt=""
                />
                <h1>Technical Committee</h1>
                <p>
                  Composed of teams actively building Polkadot. Can propose
                  emergency referenda, together with the council, for
                  fast-tracked voting and implementation.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Connecting;
