import styled from "styled-components";

export const Container = styled.div`
  height: 17em;
  background-color: hsl(233, 12%, 13%);
  display: flex;
  align-items: center;
  & > div {
    width: 80%;
    height: 53%;
    margin: auto;
    display: flex;
    flex-direction: column;

    p {
      top: -26px;
      width: 19em;
      align-self: end;
      position: relative;
      color: hsl(227, 12%, 61%);
      @media (max-width: 1024px) {
        width: 100%;
        justify-content: space-around;
        top: 414px;
      }
    }
    @media (max-width: 1024px) {
      height: 71%;
      width: 91%;
      flex-direction: column-reverse;
    }
  }
  & > div > div {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    .container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 1024px) {
        flex-direction: column-reverse;
      }
    }
    .navList {
      display: flex;
      flex-direction: column;
      text-align: left;
      a {
        line-height: 38px;
      }
    }
    .navBar {
      width: 27%;
      display: flex;
      justify-content: space-between;
      @media (max-width: 1024px) {
        width: 100%;
        height: 54em;
        margin-top: 65px;
        justify-content: space-around;
      }
    }
    .socialMedia {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      svg {
        font-size: 1.5em;

        @media (max-width: 1024px) {
          font-size: 2.5em;
        }
      }
    }
    a {
      color: hsl(0, 0%, 98%);
      text-decoration: none;
    }

    a:hover {
      color: hsl(12, 88%, 59%);
    }
    @media (max-width: 1024px) {
      flex-direction: column-reverse;
    }
  }

  @media (max-width: 1024px) {
    height: 37em;
    div {
      text-align: center;
    }
  }
`;
