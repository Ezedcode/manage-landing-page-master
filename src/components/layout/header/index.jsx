import React from "react";
import Navbar from "../../navBar";
import Logo from "../../../img/logo.svg";
import Button from "../../button";
import Img from "../../../img/bg-tablet-pattern.svg";
import * as C from "./styles";

const Header = () => {
  return (
    <C.Container>
      <img src={Logo} alt="logo" />
      <Navbar />
      <Button id="Get Started" />
      <C.Img top="-10" left="48">
        <img src={Img} alt="background img" />
      </C.Img>
    </C.Container>
  );
};

export default Header;
