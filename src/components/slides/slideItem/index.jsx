import React from "react";
import * as C from "./styles";

const SlideItem = ({ img, name, text }) => {
  return (
    <C.Container>
      <div>
        <img src={img} alt="img" />
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </C.Container>
  );
};

export default SlideItem;
