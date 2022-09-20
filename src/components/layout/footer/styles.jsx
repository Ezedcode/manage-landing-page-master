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
    justify-content: space-between;
    .container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .navList {
      display: flex;
      flex-direction: column;
      a {
        line-height: 38px;
      }
    }
    .socialMedia {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      svg {
        font-size: 1.5em;
      }
    }
    a {
      color: hsl(0, 0%, 98%);
      text-decoration: none;
    }
    p {
      color: hsl(227, 12%, 61%);
      font-size: 10.5px;
    }
    a:hover {
      color: hsl(12, 88%, 59%);
    }
  }
`;
