import React from "react";
import * as C from "./styles";

const Items = ({ img, name, text }) => {
  return (
    <C.ContainerItem>
      <div>
        <img src={img} alt="img" />
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </C.ContainerItem>
  );
};

export default Items;
