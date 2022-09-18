import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 25px;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border-radius: 20px;
  box-shadow: ${(props) =>
    props.colorBtn === "red" ? "0px 5px 5px hsl(12, 88%, 59%, 0.5)" : "none"};
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    ${(props) =>
      props.colorBtn === "red"
        ? "background-color:hsl(13, 95%, 70%)"
        : "color:hsl(13, 95%, 70%)"};
    box-shadow: ${(props) =>
      props.colorBtn === "red" ? "0px 5px 5px hsl(13, 95%, 70%, 0.5)" : "none"};
  }
`;
