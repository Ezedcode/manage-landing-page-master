import React, { useState } from "react";
import ImgIntro from "../../../img/illustration-intro.svg";
import Img1 from "../../../img/avatar-anisha.png";
import Img2 from "../../../img/avatar-ali.png";
import Img3 from "../../../img/avatar-richard.png";
import Img4 from "../../../img/avatar-shanai.png";
import * as C from "./styles";
import Button from "../../button";
import WhatSaidSlide from "../../slides/whatSaidSlides/index";

const Home = () => {
  const [Item, setItem] = useState([]);

  const listItems = [
    {
      img: Img1,
      name: "Anisha Li",
      text: (
        <p>
          Manage has supercharged our team's workflow. The
          <br />
          ability to maintain visibility on larger milestones at all times
          <br />
          keeps everyone motivated.
        </p>
      ),
    },
    {
      img: Img2,
      name: "Ali Bravo",
      text: (
        <p>
          "We have been able to cancel so many other subscriptions
          <br />
          since using Manage. There is no more cross-Channel
          <br />
          confusion and everyone is much more focused"
        </p>
      ),
    },
    {
      img: Img3,
      name: "Richard Watts",
      text: (
        <p>
          "Manage allows us to provide structs and process. It
          <br />
          keeps us organized and focused. I can't stop recommending
          <br />
          them to everyone I talk to!"
        </p>
      ),
    },
    {
      img: Img4,
      name: "Shanai Gough",
      text: (
        <p>
          "Their software allows us to track, manage and collaborate
          <br />
          on our projects from anywhere. It keeps the whole team in-
          <br />
          sync without being intrusive."
        </p>
      ),
    },
  ];
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
              Manage makes it simple for software teams
              <br />
              to plan day-to-day tasks while keeping the
              <br />
              larger team goals in view.
            </p>
            <Button
              id="Get Started"
              color="hsl(0, 0%, 98%)"
              background="hsl(12, 88%, 59%)"
              colorBtn="red"
            />
          </div>
          <C.Img>
            <img src={ImgIntro} alt="Img Intro" />
          </C.Img>
        </C.IllustrationIntro>
        <C.AboutManage>
          <div>
            <h2>
              What's different about
              <br />
              Manage?
            </h2>
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
              <C.Number>01</C.Number>
              <div>
                <h3>Track company-wide progress</h3>
                <p>
                  See how your day-to-day tasks fit into the wider vision.
                  <br />
                  Go from tracking progress at the milestone level all the way
                  done done to the smallest of details. Never lose sight of{" "}
                  <br />
                  the bigger picture again.
                </p>
              </div>
            </C.List>
            <C.List>
              <C.Number>02</C.Number>
              <div>
                <h3>Advanced built-in reports</h3>
                <p>
                  Set internal delivery estimates and track progress toward
                  company goals. Our customizable dashboard helps you <br />
                  build out the reports you need to keep key stakeholders
                  <br />
                  informed.
                </p>
              </div>
            </C.List>
            <C.List>
              <C.Number>03</C.Number>
              <div>
                <h3>Everything you need in one place</h3>
                <p>
                  Stop jumping from one service to another to <br />
                  Communicate, store files, track tasks and share
                  <br /> documents. Manage offers an all-in-one team
                  <br />
                  productivity solution.
                </p>
              </div>
            </C.List>
          </div>
        </C.AboutManage>
        <C.WhatSaid>
          <h2>What they've said</h2>
          <WhatSaidSlide listItems={listItems} />
          <Button
            id="Get Started"
            color="hsl(0, 0%, 98%)"
            background="hsl(12, 88%, 59%)"
            colorBtn="red"
          />
        </C.WhatSaid>
        <C.Simplify>
          <div>
            <h2>
              Simplify how your team <br />
              works today.
            </h2>
            <Button
              id="Get Started"
              color="hsl(12, 88%, 59%)"
              background="hsl(0, 0%, 98%)"
              colorBtn="white"
            />
          </div>
        </C.Simplify>
      </C.Container>
    </>
  );
};

export default Home;
