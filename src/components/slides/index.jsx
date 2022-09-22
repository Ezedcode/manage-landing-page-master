import React, { useEffect, useState } from "react";
import Img1 from "../../img/avatar-anisha.png";
import Img2 from "../../img/avatar-ali.png";
import Img3 from "../../img/avatar-richard.png";
import Img4 from "../../img/avatar-shanai.png";

import Items from "./item";
import * as C from "./stylesItem";
//Anisha Li
const SlidesWhatSaid = () => {
  const listItems = [
    {
      img: Img1,
      name: "Get Started",
      text: (
        <p>
          "Manage has supercharged our team's workflow. The ability to maintain
          visibility on larger milestones at all times keeps everyone
          motivated."
        </p>
      ),
    },
    {
      img: Img2,
      name: "Ali Bravo",
      text: (
        <p>
          "We have been able to cancel so many other subscriptions since using
          Manage. There is no more cross-Channel confusion and everyone is much
          more focused"
        </p>
      ),
    },
    {
      img: Img3,
      name: "Richard Watts",
      text: (
        <p>
          "Manage allows us to provide structs and process. It keeps us
          organized and focused. I can't stop recommending them to everyone I
          talk to!"
        </p>
      ),
    },
    {
      img: Img4,
      name: "Shanai Gough",
      text: (
        <p>
          "Their software allows us to track, manage and collaborate on our
          projects from anywhere. It keeps the whole team in- sync without being
          intrusive."
        </p>
      ),
    },
  ];

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <C.Container>
      <div className="container">
        {listItems.map((item) => (
          <Items img={item.img} name={item.name} text={item.text} />
        ))}
      </div>
    </C.Container>
  );
};

export default SlidesWhatSaid;
