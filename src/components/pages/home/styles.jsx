import styled from "styled-components";

export const Container = styled.div`
  h1,
  h2,
  h3 {
    color: hsl(228, 39%, 23%);
  }
  h2 {
    font-size: 37.7px;
  }
  p {
    color: hsl(227, 12%, 61%);
    padding: 2em 0;
  }
`;

export const IllustrationIntro = styled.section`
  width: 80%;
  margin: 7em auto;
  display: flex;
  h1 {
    margin-top: 1.5em;
    font-size: 3.3em;
  }
  p {
    width: 22em;
  }
`;

export const AboutManage = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  h2 {
    width: 12em;
  }
  p {
    width: 22em;
  }
`;

export const WhatSaid = styled.section``;

export const Simply = styled.section``;

export const Img = styled.div``;

export const Number = styled.span`
  margin-right: 25px;
  margin-bottom: auto;
  padding: 10px 25px;
  border-radius: 20px;
  color: hsl(0, 0%, 98%);
  background-color: hsl(12, 88%, 59%);
`;

export const List = styled.div`
  width: 580px;
  display: flex;
  h3 {
    padding-top: 10px;
  }
  p {
    width: 100%;
  }
`;
