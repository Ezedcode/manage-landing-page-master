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
      <Button
        id="Get Started"
        color="hsl(0, 0%, 98%)"
        background="hsl(12, 88%, 59%)"
        colorBtn="red"
      />
      <C.Img top="-10" left="52" position="absolute">
        <img src={Img} alt="background img" />
      </C.Img>
    </C.Container>
  );
};

export default Header;
