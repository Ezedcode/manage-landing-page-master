import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import * as C from "./styles";

const Navbar = () => {
  return (
    <BrowserRouter>
      <C.NavBar>
        <Link to="/">Pricing</Link>
        <Link to="/">Product</Link>
        <Link to="/">About us</Link>
        <Link to="">Careers</Link>
        <Link to="">Community</Link>
      </C.NavBar>
    </BrowserRouter>
  );
};

export default Navbar;
