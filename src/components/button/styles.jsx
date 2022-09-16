import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 25px;
  color: hsl(0, 0%, 98%);
  background: hsl(12, 88%, 59%);
  border-radius: 20px;
  box-shadow: 0px 5px 5px hsl(12, 88%, 59%, 0.5);
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background: hsl(13, 95%, 70%);
    box-shadow: 0px 5px 5px hsl(13, 95%, 70%, 0.5);
  }
`;
