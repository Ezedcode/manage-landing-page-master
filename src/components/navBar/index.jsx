import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import * as C from "./styles";

const Navbar = ({ activeClass }) => {
  return (
    <BrowserRouter>
      <C.NavBar display={activeClass ? "block" : "none"}>
        <div className={activeClass}>
          <Link to="/">Pricing</Link>
          <Link to="/">Product</Link>
          <Link to="/">About us</Link>
          <Link to="">Careers</Link>
          <Link to="">Community</Link>
        </div>
      </C.NavBar>
    </BrowserRouter>
  );
};

export default Navbar;
