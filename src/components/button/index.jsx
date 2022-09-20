import React from "react";
import * as C from "./styles";

const Button = ({ id, color, background, colorBtn, boxShadow }) => {
  return (
    <C.Button
      color={color}
      background={background}
      colorBtn={colorBtn}
      boxShadow={boxShadow}
    >
      {id}
    </C.Button>
  );
};

export default Button;
