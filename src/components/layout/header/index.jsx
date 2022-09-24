import React from "react";
import Navbar from "../../navBar";

import HamburgerBtn from "../../../img/icon-hamburger.svg";
import CloseBtn from "../../../img/icon-close.svg";
import Button from "../../button";
import Img from "../../../img/bg-tablet-pattern.svg";
import * as C from "./styles";
import { useState } from "react";
import Logo from "../../../img/logo";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(undefined);
  const [showNavBar, setShowNavBar] = useState(false);

  const clickMenuBtn = () => {
    if (!showMenu) {
      setShowMenu(true);
      setShowNavBar("active");
    } else {
      setCloseMenu("closeMenu");
      setShowNavBar("closeNavBar");

      setTimeout(() => {
        setShowMenu(false);
        setCloseMenu(undefined);
        setShowNavBar(undefined);
      }, 5 * 100); // 1second
    }
  };

  return (
    <C.Container>
      <Logo />

      <Navbar activeClass={showNavBar} />

      <div className="btn">
        <Button
          id="Get Started"
          color="hsl(0, 0%, 98%)"
          background="hsl(12, 88%, 59%)"
          colorBtn="red"
          boxShadow="true"
        />
      </div>

      <button className="menuButton" onClick={clickMenuBtn}>
        {showMenu ? (
          <img
            src={CloseBtn}
            alt="menuBtn"
            className={`closeBtn ${closeMenu}`}
          />
        ) : (
          <img src={HamburgerBtn} alt="menuBtn" className={"hamburgerBtn"} />
        )}
      </button>

      <C.Img>
        <img src={Img} alt="background img" />
      </C.Img>
    </C.Container>
  );
};

export default Header;

/*
<picture>
          <source media="(max-width: 670px)" srcset="imagens/dan-droids-pq.png">
          <img src="imagens/dan-droids.png" alt="first mascot">
        </picture>*/
