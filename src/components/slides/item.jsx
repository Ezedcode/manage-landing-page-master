import React from "react";
import * as C from "./stylesItem";

const Items = ({ img, name, text }) => {
  return (
    <C.ContainerItem>
      <div>
        <img src={img} alt="img" />
        <h3>{name}</h3>
        {text}
      </div>
    </C.ContainerItem>
  );
};

export default Items;
