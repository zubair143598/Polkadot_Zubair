import React from "react";

const mainBelog = () => {
  return (
    <div className="belog-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12  text-center mt-5">
            <h1 className="fw-bolder mt-5">From the blog</h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <img src="./Assists/image1.png" className="w-100" alt="" />
                  <div className="p-3">
                    <p className="mt-3 " style={{ color: "#C60E86" }}>
                      Parachain
                    </p>
                    <h4 className="fw-bolder">
                      First Parachain Successfully Migrates from Kusama to
                      Polkadot
                    </h4>
                    <p className="mt-2">
                      KILT Protocol's migration from Kusama to Polkadot is an
                      important technical milestone and the first parachain
                      migration. Polkadot's 'canary network' model allows Web3
                      projects to test their technology in a real-world
                      environment before upgrading to stable production
                      networks....
                    </p>
                  </div>
                </div>
                <p><img src="./Assists/ghost_avatar_polkadot.png" className="img1" alt="" /> Polkadot</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <img src="./Assists/image1.png" className="w-100" alt="" />
                  <div className="p-3">
                    <p className="mt-3 " style={{ color: "#C60E86" }}>
                      Parachain
                    </p>
                    <h4 className="fw-bolder">Polkadot Roadmap Roundup</h4>
                    <p className="mt-2">
                      A proposed roadmap for upcoming developments on Polkadot.
                      Get the latest status on asynchronous backing,
                      parathreads, XCMv3, governance, common-good parachains and
                      more....
                    </p>
                  </div>
                </div>
                <p><img src="./Assists/ghost_avatar_polkadot.png" className="img1" alt="" /> Polkadot</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 ">
                <div className="card-body">
                  <img src="./Assists/image1.png" className="w-100" alt="" />
                  <div className="p-3">
                    <p className="mt-3 " style={{ color: "#C60E86" }}>
                      Parachain
                    </p>
                    <h4 className="fw-bolder">
                      Sub0, the Polkadot Developer Conference, comes to Lisbon
                      in November
                    </h4>
                    <p className="mt-2">
                      The two-day live sub0 conference will run on November
                      28th-29th. Featuring keynote presentations, breakout
                      sessions, workshops & side events. Sign up for ticket
                      updates....
                    </p>
                  </div>
                </div>
                <p><img src="./Assists/ghost_avatar_polkadot.png" className="img1" alt="" /> Polkadot</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row row3 text-center">
            <div className="col-md-12">
                <h1 className="fw-bolder ">Want to get involved?</h1>
                <a href="#" className='btn border rounded-5 fs-5 p-3 m-3 fw-bolder'>Join The Community</a>
                <p className="mb-5">or learn about how to <a href="#" style={{color:"#E6007A"}}> build on Polkadot</a>.</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default mainBelog;
