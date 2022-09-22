import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 23rem;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  .container {
    width: 80%;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const ContainerItem = styled.div`
  width: 555px;
  height: 227px;
  background-color: hsl(0, 0%, 98%);
  display: flex;
  align-items: center;
  div {
    margin: auto;
  }
  h3 {
    margin-top: 21px;
  }
  img {
    width: 6em;
    margin-top: -5.5em;
    margin-bottom: 0.5em;
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
