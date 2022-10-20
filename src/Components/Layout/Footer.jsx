import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { AiFillRedditCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li className="py-0 py-md-1">
                <h4 className="mt-5">
                  <a href="/about" className="text-white">
                    General
                  </a>
                </h4>
              </li>
              <li className="py-0 py-md-1">
                <a href="/about" className="text-white ">
                  About
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a
                  href="https://telemetry.polkadot.io/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-white"
                >
                  Telemetry
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a href="/launch-roadmap" className="text-white">
                  Roadmap
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a href="/faq" className="text-white">
                  FAQ
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a
                  href="https://support.polkadot.network"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-white"
                >
                  Support
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a href="/build" className="text-white">
                  Build
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a
                  href="https://web3.foundation/grants/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-white"
                >
                  Grants and Bounties
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a href="/jobs" className="text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li className="py-0 py-md-1">
                <h4 className="mt-5">
                  <a href="/about" className="text-white">
                    Technology
                  </a>
                </h4>
              </li>
              <li className="py-0 py-md-1">
                <a href="/about" className="text-white ">
                  Technology
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a
                  href="https://telemetry.polkadot.io/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-white"
                >
                  Staking
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a href="/launch-roadmap" className="text-white">
                  XCM
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a href="/faq" className="text-white">
                  Parachains
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a
                  href="https://support.polkadot.network"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-white"
                >
                  Token
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a href="/build" className="text-white">
                  Substrate
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a
                  href="https://web3.foundation/grants/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-white"
                >
                  Lightpaper
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a href="/jobs" className="text-white">
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li className="py-0 py-md-1">
                <h4 className="mt-5">
                  <a href="/about" className="text-white">
                    General
                  </a>
                </h4>
              </li>
              <li className="py-0 py-md-1">
                <a href="/about" className="text-white ">
                  About
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a
                  href="https://telemetry.polkadot.io/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-white"
                >
                  Telemetry
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a href="/launch-roadmap" className="text-white">
                  Roadmap
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a href="/faq" className="text-white">
                  FAQ
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a
                  href="https://support.polkadot.network"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-white"
                >
                  Support
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a href="/build" className="text-white">
                  Build
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a
                  href="https://web3.foundation/grants/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-white"
                >
                  Grants and Bounties
                </a>
              </li>
              <li className="py-0 py-md-1">
                <a href="/jobs" className="text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 text-white">
            <a
              href="https://github.com/paritytech/polkadot"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-dark"
            >
              <BsGithub size={45} className="p-1 border rounded-5 mt-5 icons" />
            </a>
            <a
              href="https://dot.li/discord"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-dark"
            >
              <SiDiscord
                size={45}
                className="p-1 border rounded-5 mt-5 icons"
              />
            </a>
            <a
              href="https://twitter.com/Polkadot"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-dark"
            >
              <AiOutlineTwitter
                size={45}
                className="p-1 border rounded-5 mt-5 icons"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCB7PbjuZLEba_znc7mEGNgw"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <BsYoutube
                className="p-1 border rounded-5 mt-5 icons"
                size={45}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCB7PbjuZLEba_znc7mEGNgw"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <AiFillRedditCircle
                className="p-1 border rounded-5 mt-5 icons"
                size={45}
              />
            </a>
            <p className="mt-3">Subscribe to the newsletter to hear about Polkadot updates and events.</p>
            <a href="#" className='btn border rounded-5 fs-5 p-3 m-3 fw-bolder'>Subscribe</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
