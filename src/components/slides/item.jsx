import React from "react";
import * as C from "./stylesItem";

const Items = ({ img, name, text }) => {
  return (
    <C.ContainerItem className="avatar">
      <div>
        <img src={img} alt="img" />
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </C.ContainerItem>
  );
};

export default Items;
