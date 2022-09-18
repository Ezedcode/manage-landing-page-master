import React from "react";
import * as C from "./styles";

const Button = ({ id, color, background, colorBtn }) => {
  return (
    <C.Button color={color} background={background} colorBtn={colorBtn}>
      {id}
    </C.Button>
  );
};

export default Button;
