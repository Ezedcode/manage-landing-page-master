import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 27rem;
  display: flex;
  align-items: end;
  overflow: scroll;

  & .container {
    display: flex;
  }

  & .mobileAvatar {
    display: none;
  }

  & .hideScroll {
    position: absolute;
    width: 100%;
    height: 3rem;
    background-color: hsl(0, 0%, 100%);
    top: 118.4rem;
  }

  @media (max-width: 375px) {
    height: 29rem;
    margin-top: 5rem;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    & .container {
      display: none;
    }

    & .mobileAvatar {
      display: block;
    }

    & .group1 {
      margin-top: 3rem;
    }

    & input {
      margin-left: 5px;
    }

    & input:before {
      content: "";
      display: block;
      position: relative;
      top: -1px;
      left: -1px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid hsl(12, 88%, 59%);
    }

    input[type="radio"]:checked:before {
      content: "";
      display: block;
      position: relative;
      top: -1px;
      left: -1px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: hsl(12, 88%, 59%);
    }

    & .hideScroll {
      display: none;
    }
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

  @media (max-width: 375px) {
    width: 95%;
    margin: 0 auto;

    & div {
      width: 100%;
    }

    & div p {
      width: 100%;
      padding: 0;
      margin-top: 2rem;
    }
  }
`;
