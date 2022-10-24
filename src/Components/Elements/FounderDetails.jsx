import React from "react";

const FounderDetails = () => {
  return (
    <div className="FounderDetails-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-md-5 mb-2">
            <div className="card mb-5 border-white">
              <div className="card-body">
                <h3 className="fw-bolder">
                  <a href="" style={{ textDecoration: "none", color: "black" }}>
                    {" "}
                    Robert Habermeier{" "}
                  </a>
                </h3>
                <p className="fs-5">Founder</p>
                <p className="fs-5">
                  Robert Habermeier is a Thiel Fellow and co-founder of
                  Polkadot. He has a research and development background in
                  blockchains, distributed systems, and cryptography. A longtime
                  member of the Rust community, he has focused on leveraging the
                  language’s features to build highly parallel and performant
                  solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-md-5 mb-2">
            <div className="card mb-5 border-white">
              <div className="card-body">
                <h3 className="fw-bolder">
                  <a href="" style={{ textDecoration: "none", color: "black" }}>
                    {" "}
                    Dr. Gavin Wood{" "}
                  </a>
                </h3>
                <p className="fs-5">Founder</p>
                <p className="fs-5">
                  Gavin began originating blockchain technology as co-founder
                  and CTO of Ethereum. He invented fundamental components of the
                  blockchain industry, including Solidity, Proof-of-Authority
                  consensus, and Whisper. At Parity, Gavin currently leads
                  innovation on Substrate and Polkadot. He coined the term Web
                  3.0 in 2014 and serves as President of Web3 Foundation.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card  border-white">
              <div className="card-body">
              <h3 className="fw-bolder">
                  <a href="" style={{ textDecoration: "none", color: "black" }}>
                    Peter Czaban
                  </a>
                </h3>
                <p className="fs-5">Founder</p>
                <p className="fs-5">
                Peter is the Technology Director of the Web3 Foundation, where he works on supporting the development of the next generation of distributed technologies. He obtained his Masters of Engineering degree at the University of Oxford, reading Engineering Science where he focused on Bayesian Machine Learning. He has worked across defense, finance and data analytics industries, working on mesh networks, distributed knowledge bases, quantitative pricing models, machine learning and business development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderDetails;
