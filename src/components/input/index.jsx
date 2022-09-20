import React from "react";
import * as C from "./styles";
import Button from "../button";

const Input = () => {
  return (
    <div>
      <C.Input type="email" placeholder="Updates in your inbox..." />
      <Button
        id="Go"
        color="hsl(0, 0%, 98%)"
        background="hsl(12, 88%, 59%)"
        colorBtn="red"
        boxShadow="false"
      />
    </div>
  );
};

export default Input;
