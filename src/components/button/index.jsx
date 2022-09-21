import React from "react";
import * as C from "./styles";

const Button = (props) => {
  return (
    <C.Button
      type={props.type}
      color={props.color}
      background={props.background}
      colorBtn={props.colorBtn}
      boxShadow={props.boxShadow}
      onClick={props.onClick}
    >
      {props.id}
    </C.Button>
  );
};

export default Button;
