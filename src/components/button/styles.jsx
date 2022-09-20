import styled from "styled-components";

export const Button = styled.button`
  height: 43px;
  padding: 12px 25px;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border-radius: 20px;
  box-shadow: ${(props) =>
    props.boxShadow === "true" ? "0px 5px 5px hsl(12, 88%, 59%, 0.5)" : "none"};
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    ${(props) =>
      props.colorBtn === "red"
        ? "background-color:hsl(13, 95%, 70%)"
        : "color: hsl(227, 12%, 61%);"};
    box-shadow: ${(props) =>
      props.boxShadow === "true"
        ? "0px 5px 5px hsl(13, 95%, 70%, 0.5)"
        : "none"};
  }
`;
