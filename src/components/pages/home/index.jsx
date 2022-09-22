import React, { useState } from "react";
import ImgIntro from "../../../img/illustration-intro.svg";
import * as C from "./styles";
import Button from "../../button";
import ImgTablet from "../../../img/bg-tablet-pattern.svg";
import * as S from "../../layout/header/styles";

import SlidesWhatSaid from "../../slides";

const Home = () => {
  return (
    <>
      <C.Container>
        <C.IllustrationIntro>
          <div>
            <h1>
              Bring everyone
              <br />
              together to build
              <br />
              better products.
            </h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <Button
              id="Get Started"
              color="hsl(0, 0%, 98%)"
              background="hsl(12, 88%, 59%)"
              colorBtn="red"
              boxShadow="true"
            />
          </div>
          <C.Img>
            <img src={ImgIntro} alt="Img Intro" />
          </C.Img>
        </C.IllustrationIntro>
        <C.AboutManage>
          <div>
            <h2>What's different about Manage?</h2>
            <p>
              Manage provides all the functionality your
              <br />
              team needs, without the complexity. Our
              <br />
              software is tailor-made for modern digital
              <br />
              product teams.
            </p>
          </div>
          <div>
            <C.List>
              <div>
                <h3>
                  <C.Number>01</C.Number>Track company-wide progress
                </h3>
                <p>
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  done to the smallest of details. Never lose sight of the
                  bigger picture again.
                </p>
              </div>
            </C.List>
            <C.List>
              <div>
                <h3>
                  <C.Number>02</C.Number>Advanced built-in reports
                </h3>
                <p>
                  Set internal delivery estimates and track progress toward
                  company goals. Our customizable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </C.List>
            <C.List>
              <div>
                <h3>
                  <C.Number>03</C.Number>Everything you need in one place
                </h3>
                <p>
                  Stop jumping from one service to another to Communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </C.List>
          </div>
        </C.AboutManage>
        <S.Img top="72" left="-32" position="">
          <img src={ImgTablet} alt="background img" />
        </S.Img>
        <C.WhatSaid>
          <h2>What they've said</h2>
          <SlidesWhatSaid />
          <div className="btn">
            <Button
              id="Get Started"
              color="hsl(0, 0%, 98%)"
              background="hsl(12, 88%, 59%)"
              colorBtn="red"
              boxShadow="true"
            />
          </div>
        </C.WhatSaid>
        <C.Simplify>
          <div>
            <h2>Simplify how your team works today.</h2>
            <Button
              id="Get Started"
              color="hsl(12, 88%, 59%)"
              background="hsl(0, 0%, 98%)"
              colorBtn="white"
              boxShadow="false"
            />
          </div>
        </C.Simplify>
      </C.Container>
    </>
  );
};

export default Home;
