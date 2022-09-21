import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Input from "../../input";
import Logo from "../../../img/logo.svg";

import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import * as C from "./styles";

const Footer = () => {
  return (
    <BrowserRouter>
      {" "}
      <C.Container>
        <div>
          <div>
            <div className="container">
              <div>
                <img src={Logo} alt="logo" />
              </div>
              <div className="socialMedia">
                <Link>
                  <FaFacebook />
                </Link>
                <Link>
                  <FaYoutube />
                </Link>
                <Link>
                  <FaTwitter />
                </Link>
                <Link>
                  <FaPinterest />
                </Link>
                <Link>
                  <FaInstagram />
                </Link>
              </div>
            </div>
            <div className="navBar">
              <div className="navList">
                <Link to="/">Home</Link>
                <Link to="/">Pricing</Link>
                <Link to="/">Product</Link>
                <Link to="/">About us</Link>
              </div>
              <div className="navList">
                <Link to="/">Careers</Link>
                <Link to="/">Community</Link>
                <Link to="/">Privacy</Link>
              </div>
            </div>

            <Input />
          </div>
          <p>&copy; Copyright 2022. All Rights Reserved</p>
        </div>
      </C.Container>
    </BrowserRouter>
  );
};

export default Footer;
