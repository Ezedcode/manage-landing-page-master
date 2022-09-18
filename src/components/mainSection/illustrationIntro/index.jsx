import React from "react";
import Button from "../../button";
import ImgIntro from "../../../img/illustration-intro.svg";
import * as C from "./styles";

const IllustrationIntro = () => {
  return (
    <C.Conatiner>
      <div>
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button
          id="Get Started"
          color="hsl(0, 0%, 98%)"
          background="hsl(12, 88%, 59%)"
          colorBtn="red"
        />
      </div>
      <div>
        <img src={ImgIntro} alt="Img Intro" />
      </div>
    </C.Conatiner>
  );
};

export default IllustrationIntro;
