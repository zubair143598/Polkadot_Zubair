import React from "react";
import { Link } from "react-router-dom";
import {BsGithub} from "react-icons/bs";
import {AiOutlineTwitter} from "react-icons/ai"
import {SiDiscord} from "react-icons/si"


const Header = () => {
  return (
    <header>
      <nav className="navbar navbar--secondary navbar-expand-lg navbar-light bg-white border-bottom py-0">
        <div className="container">
          <div className="collapse navbar-collapse navMenu justify-content-between">
            <div className="d-flex justify-content-end justify-content-lg-start pt-1 pt-md-0 order-2 order-lg-1">
              <div className="dropdown dropdown-lng-choice">
                <button
                  className="btn dropdown-toggle btn-lng-choice mb-1 mb-lg-0"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="lng text-uppercase">en</span>
                </button>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item lng-choice"
                    data-lng="es"
                    href="/es/"
                  >
                    español
                  </a>
                  <a
                    className="dropdown-item lng-choice"
                    data-lng="zh-cn"
                    href="/zh-cn/"
                  >
                    中文
                  </a>
                  <a
                    className="dropdown-item lng-choice"
                    data-lng="ja"
                    href="/ja/"
                  >
                    日本語
                  </a>
                  <a
                    className="dropdown-item lng-choice"
                    data-lng="ko"
                    href="/ko/"
                  >
                    한국어
                  </a>
                  <a
                    className="dropdown-item lng-choice"
                    data-lng="ru"
                    href="/ru/"
                  >
                    русский
                  </a>
                  <a
                    className="dropdown-item lng-choice"
                    data-lng="tr"
                    href="/tr/"
                  >
                    Türkçe
                  </a>
                </div>
              </div>
            </div>
            <div className="py-1 d-flex flex-wrap align-items-center justify-content-between justify-content-lg-end order-1 order-lg-2">
              <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item">
                  <a
                    id="#lightpaper"
                    href="/Polkadot-lightpaper.pdf"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-small nav-link pl-0 pl-lg-2 pr-1 font-weight-bold"
                  >
                    Lightpaper
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/PolkaDotPaper.pdf"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-small nav-link pl-0 pl-lg-2 pr-1 font-weight-bold"
                  >
                    Whitepaper
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://wiki.polkadot.network"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-small nav-link px-2 mr-2 font-weight-bold"
                  >
                    Wiki
                  </a>
                </li>
              </ul>
              <ul className="list-social-links navbar-nav d-none d-lg-flex flex-row">
                <li>
                  <a
                    href="https://github.com/paritytech/polkadot"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-dark"
                  >
                    <BsGithub size={30} className="p-1 border rounded-5 border-dark m-1" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://dot.li/discord"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-dark"
                  >
                    <SiDiscord size={30} className="p-1 border rounded-5 border-dark m-1" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Polkadot"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-dark"
                  >
                    <AiOutlineTwitter size={30} className="p-1 border rounded-5 border-dark m-1" />
                  </a>
                </li>
                <li className=" border p-1 border-dark rounded-5">
                  <a
                    id="support-link"
                    href="https://support.polkadot.network"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-dark  p-2 font-weight-bold"
                    style={{textDecoration:"none"}}
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar header  navbar-expand-lg bg-light">
        <hr />
        <div className="container position-sticky">
          <Link className="  nav-link active" aria-current="page" to="home">
            <img
              src="./Assists/logo-polkadot.svg"
              alt=""
              className="logo p-1  w-50 "
            />
          </Link>

          <button
            className=" color navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link fs-5 clr text-black"
                  aria-current="page"
                  to="technology"
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link clr fs-5 text-black" to="community">
                  Community
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 clr text-black" to="About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 clr text-black" to="Blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 clr text-black" to="Build">
                  Build
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 clr text-black" to="Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
