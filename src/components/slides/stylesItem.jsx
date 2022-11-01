import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 27rem;
  display: flex;
  align-items: end;
  overflow: scroll;

  .container {
    display: flex;
  }

  & .hideScroll {
    position: absolute;
    width: 100%;
    height: 3rem;
    background-color: hsl(0, 0%, 100%);
    top: 118.4rem;
  }
`;
export const ContainerItem = styled.div`
  height: 227px;
  background-color: hsl(0, 0%, 98%);
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  margin: 0 1rem;
  div {
    padding: 0 2rem;
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
