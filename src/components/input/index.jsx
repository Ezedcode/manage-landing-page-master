import React, { useState } from "react";
import * as C from "./styles";
import Button from "../button";

const Input = () => {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function sendEmail(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log(userEmail);
  }

  function clearEmail() {
    setUserEmail("");
  }

  return (
    <div>
      <C.Input
        type="email"
        placeholder="Updates in your inbox..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        type="submit"
        id="Go"
        color="hsl(0, 0%, 98%)"
        background="hsl(12, 88%, 59%)"
        colorBtn="red"
        boxShadow="false"
        onClick={sendEmail}
      />
      {userEmail}
    </div>
  );
};

export default Input;
