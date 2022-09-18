import React from "react";
import SlideItem from "../slideItem";
import * as C from "./styles";

const WhatSaidSlide = ({ listItems }) => {
  return (
    <C.Container>
      {listItems?.map((item) => (
        <SlideItem img={item.img} name={item.name} text={item.text} />
      ))}
    </C.Container>
  );
};

export default WhatSaidSlide;
