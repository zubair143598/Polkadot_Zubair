import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
const ComBanner1 = () => {
  return (
    <div className="ComBanner1-section bg-black">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a href="#" style={{ textDecoration: "none",color:"black" }}>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3 col-4">
                      <AiFillTwitterCircle className="colorIcon" size={100} />
                    </div>
                    <div className="col-md-8 col-8">
                      <h1 className="fw-bolder">Twitter</h1>
                      <p className="">Follow Polkadot.</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#" style={{ textDecoration: "none",color:"black" }}>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3 col-4">
                      <AiFillTwitterCircle className="colorIcon" size={100} />
                    </div>
                    <div className="col-md-8 col-8">
                      <h1 className="fw-bolder">Twitter</h1>
                      <p className="">Follow Polkadot.</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#" style={{ textDecoration: "none",color:"black" }}>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3 col-4">
                      <AiFillTwitterCircle className="colorIcon" size={100} />
                    </div>
                    <div className="col-md-8 col-8">
                      <h1 className="fw-bolder">Twitter</h1>
                      <p className="">Follow Polkadot.</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="banner-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComBanner1;
