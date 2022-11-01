import React, { useState } from "react";
import Img1 from "../../img/avatar-anisha.png";
import Img2 from "../../img/avatar-ali.png";
import Img3 from "../../img/avatar-richard.png";
import Img4 from "../../img/avatar-shanai.png";

import data from "../../data/data.json";

import Items from "./item";
import * as C from "./stylesItem";

const SlidesWhatSaid = () => {
  const [nextAvatar, setNextAvatar] = useState(0);

  const avatar = [Img1, Img2, Img3, Img4];

  return (
    <C.Container>
      <div className="container">
        {data.map((item, index) => (
          <Items
            img={avatar[index]}
            name={data[index].name}
            text={data[index].text}
          />
        ))}
      </div>
      <div className="mobileAvatar">
        {" "}
        <Items
          img={avatar[nextAvatar]}
          name={data[nextAvatar].name}
          text={data[nextAvatar].text}
        />
        <div className="group1">
          <input
            type="radio"
            name="group1"
            defaultChecked
            onChange={() => setNextAvatar(0)}
          />
          <input type="radio" name="group1" onChange={() => setNextAvatar(1)} />
          <input type="radio" name="group1" onChange={() => setNextAvatar(2)} />
          <input type="radio" name="group1" onChange={() => setNextAvatar(3)} />
        </div>
      </div>
      <div className="hideScroll"></div>
    </C.Container>
  );
};

export default SlidesWhatSaid;
