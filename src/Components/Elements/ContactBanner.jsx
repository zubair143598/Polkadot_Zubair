import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiElement } from "react-icons/si";

const ContactBanner = () => {
  return (<>
    <div className="ContactBanner-section bg-black">
      <div className="container">
        <div className="row ">
          <div className="col-md-4 my-md-5 my-2">
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              <div className="card my-md-5 my-2">
                <div className="card-body  p-1">
                  <div className="row">
                    <div className="col-md-2 col-4">
                      <SiElement className="colorIcon" size={70} />
                    </div>
                    <div className="col-md-9 col-8">
                      <h3 className="fw-bolder">For general chat</h3>
                      <p className="fs-5">
                        Join the{" "}
                        <a
                          href=""
                          className=""
                          style={{ textDecoration: "none", color: "#E6007A" }}
                        >
                          watercooler
                        </a>{" "}
                        or{" "}
                        <a
                          href=""
                          className=""
                          style={{ textDecoration: "none", color: "#E6007A" }}
                        >
                          Discord
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 my-md-5 my-2">
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              <div className="card my-md-5 my-2">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-md-3 col-4">
                      <AiFillTwitterCircle className="colorIcon" size={80} />
                    </div>
                    <div className="col-md-8 col-8">
                      <h3 className="fw-bolder">For press inquiries</h3>
                      <p className="fs-5">
                        Please fill out 
                        <a
                          href=""
                          className=""
                          style={{ textDecoration: "none", color: "#E6007A" }}
                        >
                           this
                        </a> form.</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 my-md-5 my-2">
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              <div className="card my-md-5 my-2">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-md-3 col-4">
                      <AiFillTwitterCircle className="colorIcon" size={80} />
                    </div>
                    <div className="col-md-8 col-8">
                      <h3 className="fw-bolder">Twitter</h3>
                      <p className="fs-5">Follow Polkadot.</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="row text-white ">
          <div className="col-md-6 mb-md-5 mb-2 text-center" >
            <h1 className="fw-bolder conBannerhead2">Stay informed of updates and events</h1>
            <p className="fs-4 mb-md-5 mb-2"><a className="text-white" href="">Subscribe to the newsletter  </a> or <a className="text-white" href="">  read the blog</a></p>
          </div>
          <div className="col-md-6 mb-md-5 mb-2 border-start ">
          <h1 className="fw-bolder conBannerhead2">Join the teams building Polkadot</h1>
            <p className="fs-4 mb-md-5 mb-2">See jobs at <a className="text-white" href="">Web3 Foundation   </a> or at <a className="text-white" href="">   Parity Technologies</a></p>
          </div>
        </div>
      </div>
    </div>

    <div className="row row4 my-md-5 my-3">
            <div className="col-md-3"></div>
          <div className="col-md-5 mt-md-5 mt-3 text-center">
            <h1 className="fw-bolder mt-md-5">
            Have a question about building on Polkadot?
            </h1>
            <a
              href=""
              className="btn border rounded-5 fs-5 p-3 m-3 mb-5 fw-bolder"
            >
              Let's Connect
            </a>
            <div className="col-md-3"></div>
          </div>
        </div>
    </>
  );
};

export default ContactBanner;
