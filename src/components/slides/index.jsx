import React, { useState } from "react";
import Img1 from "../../img/avatar-anisha.png";
import Img2 from "../../img/avatar-ali.png";
import Img3 from "../../img/avatar-richard.png";
import Img4 from "../../img/avatar-shanai.png";
import { Carousel } from "react-responsive-carousel";
import Items from "./item";
import * as C from "./styles";

const SlidesWhatSaid = () => {
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
    <C.Container>
      {listItems.map((item) => (
        <Items img={item.img} name={item.name} text={item.text} />
      ))}
    </C.Container>
  );
};

export default SlidesWhatSaid;
