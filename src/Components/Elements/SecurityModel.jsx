import React from "react";

const SecurityModel = () => {
  return (
    <>
      <div className="securityModel-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <h1 className="mt-5 mt-5 px-md-5">A better security model</h1>
              <p className="px-md-5 mt-5" style={{ fontSize: "19px" }}>
                In both Proof-of-Work and Proof-of-Stake systems, blockchains
                compete with each other over resources to secure their networks,
                and blockchains are easily attacked until they develop a
                significant community to support their network.
              </p>
              <p className="px-md-5" style={{ fontSize: "19px" }}>
                Polkadot takes a different approach by letting blockchains pool
                their security, which means that the blockchains' security is
                aggregated and applied to all.
              </p>
              <p className="px-md-5 " style={{ fontSize: "19px" }}>
                By connecting to Polkadot, blockchain developers can secure
                their blockchain from day one
              </p>
            </div>
            <div className="col-md-6 mt-5">
              <img
                src="./Assists/dg-security-model.svg"
                className="p-5"
                style={{ width: "45%", marginTop: "7rem" }}
                alt=""
              />
            </div>

            <div className="col-md-4 text-end mt-5">
              <img
                src="./Assists/dg-xcm.svg"
                className="p-5"
                style={{ width: "70%", marginTop: "7rem" }}
                alt=""
              />
            </div>
            <div className="col-md-7 mt-5">
              <h1 className="mt-5 mt-5 px-md-5">A better security model</h1>
              <p className="px-md-5 mt-5" style={{ fontSize: "19px" }}>
                For blockchains to work together and form the basis of Web3,
                they need a common language for communication. Polkadot sets the
                standard with XCM, a cross-consensus communication format and
                programming language that allows blockchains of different
                designs to securely exchange arbitrary data, code, and value. In
                this way, a new wave of rich cross-chain applications and
                services can be built that tap into the features and benefits of
                different chains.
              </p>
              <a
                className="px-md-5 "
                href="#"
                style={{ fontSize: "19px", color: "black" }}
              >
                Learn more about XCM
              </a>
            </div>

            <div className="col-md-6 mt-5">
              <h1 className="mt-5 mt-5 px-md-5">
                A green, energy-efficient protocol
              </h1>
              <p className="px-md-5 mt-5" style={{ fontSize: "19px" }}>
                It’s hard to get behind blockchain as the next technological
                revolution when it wastes so much energy. Polkadot is designed
                to power the web’s next big wave of innovation, without the high
                energy consumption of conventional proof-of-work blockchains.
              </p>
              <p className="px-md-5" style={{ fontSize: "19px" }}>
                Polkadot’s Nominated Proof-of-stake (NPoS) model uses a small
                fraction of the energy consumed by conventional blockchains, and
                has the{" "}
                <a href="#" style={{ fontSize: "19px", color: "black" }}>
                  lowest carbon footprint
                </a>{" "}
                among proof-of-stake protocols analyzed in{" "}
                <a href="#" style={{ fontSize: "19px", color: "black" }}>
                  recent research
                </a>
                .
              </p>
            </div>
            <div className="col-md-6 mt-5">
              <img
                src="./Assists/dg-green-energy.svg"
                className="p-5"
                style={{ width: "45%", marginTop: "7rem" }}
                alt=""
              />
            </div>

            <div className="col-md-4 text-end mt-5">
              <img
                src="./Assists/dg-governance.svg"
                className="p-5"
                style={{ width: "70%", marginTop: "7rem" }}
                alt=""
              />
            </div>
            <div className="col-md-7 mt-5">
              <h1 className="mt-5 mt-5 px-md-5">
                Transparent on-chain governance
              </h1>
              <p className="px-md-5 mt-5" style={{ fontSize: "19px" }}>
                Updates to the protocol happen fork-free via transparent
                on-chain voting, so protocol development never stalls due to the
                lack of a clear process. The relay chain uses a sophisticated
                governance mechanism that is designed to establish a
                transparent, accountable and binding process for resolving
                disputes and upgrading the network.
              </p>
              <p className="px-md-5" style={{ fontSize: "19px" }}>
                DOT tokens are used to participate in governance decisions,
                including tabling proposals, voting, and bonding.
              </p>
              <p className="px-md-5 " style={{ fontSize: "19px" }}>
                Parachains are free to design their own governance mechanisms,
                allowing for maximum freedom without affecting other parachains.
              </p>
              <p className="px-md-5 " style={{ fontSize: "19px" }}>
                <a href="#" style={{ fontSize: "19px", color: "black" }}>
                  Learn more about Polkadot’s governance
                </a>
              </p>
            </div>

            <div className="col-md-6 mt-5">
              <h1 className="mt-5 mt-5 px-md-5">
                On-chain treasury for decentralized project funding
              </h1>
              <p className="px-md-5 mt-5" style={{ fontSize: "19px" }}>
                Polkadot’s governance system also features an on-chain treasury
                that the community can use to fund projects that benefit the
                network. Any DOT holder can submit project funding and bounty
                proposals, and can nominate community members for tips based on
                work completed.
              </p>
              <p className="px-md-5" style={{ fontSize: "19px" }}>
                With tens of millions of DOT available for spending, the
                treasury represents a powerful resource for fueling Web3
                innovation.
              </p>
              <p className="px-md-5 " style={{ fontSize: "19px" }}>
                <a href="#" style={{ fontSize: "19px", color: "black" }}>
                  Learn more about the Polkadot treasury
                </a>
              </p>
            </div>
            <div className="col-md-6 mt-5">
              <img
                src="./Assists/dg-treasury.svg"
                className="p-5"
                style={{ width: "45%", marginTop: "7rem" }}
                alt=""
              />
            </div>

            <div className="col-md-4 text-end mt-5">
              <img
                src="./Assists/dg-consensus.svg"
                className="p-5"
                style={{ width: "70%", marginTop: "7rem" }}
                alt=""
              />
            </div>
            <div className="col-md-7 mt-5">
              <h1 className="mt-5 mt-5 px-md-5">
                Learn more about the Polkadot treasury
              </h1>
              <p className="px-md-5 mt-5" style={{ fontSize: "19px" }}>
                Polkadot uses its original GRANDPA (GHOST-based Recursive
                Ancestor Deriving Prefix Agreement) consensus for a more secure
                and resilient network.
              </p>
              <p className="px-md-5" style={{ fontSize: "19px" }}>
                Under good network conditions, GRANDPA can finalize blocks
                nearly instantly. Under bad network conditions, like a network
                partition, GRANDPA can finalize large quantities of blocks
                (theoretically millions) at once when the partitions resolve.
              </p>
              <p className="px-md-5 " style={{ fontSize: "19px" }}>
                <a href="#" style={{ fontSize: "19px", color: "black" }}>
                  Learn more about GRANDPA.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Roadmap-section">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-7  text-white my-5">
              <span className="p-md-5 fs-5">
                <h1 className="mt-5 mx-5 p-2 unb fw-bolder">Roadmap</h1>
                <p className="mb-5 fs-5 px-4">
                The launch of Polkadot v1 began in May 2020 with the Relay Chain genesis block and finished in December 2021 with the launch of parachains. Several post-launch developments and optimizations are expected for 2022 and beyond.
                </p>
                <a href="" className='btn border rounded-5 fs-5 p-3 m-3 mb-5 fw-bolder'>See Launch Roadmap</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityModel;
