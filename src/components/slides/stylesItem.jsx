import styled from "styled-components";

export const ContainerItem = styled.div`
  display: flex;
  position: relative;
  right: 154px;
  margin: 7em auto 3em auto;
  padding-bottom: 2em;
  width: 555px;
  background-color: hsl(0, 0%, 98%);
  div {
    margin: auto;
  }
  img {
    position: absolute;
    width: 6em;
    top: -49px;
    transform: translateX(-50%);
  }
  h3 {
    padding-top: 5em;
  }
  p {
    width: 452px;
  }
  @media (max-width: 1024px) {
    width: 343px;
    position: static;
    p {
      width: 341px;
    }
    img {
      top: 62px;
    }
  }
`;
