import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 3em auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.div`
  position: absolute;
  width: 50vw;
  top: ${(props) => props.top}em;
  left: ${(props) => props.left}%;
  right: ${(props) => props.right}%;
  z-index: -1;
  img {
    width: 65vw;
  }
`;
