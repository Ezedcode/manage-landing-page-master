import styled from "styled-components";
import bck from "../../../img/bg-simplify-section-desktop.svg";

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
    line-height: 1.7em;
  }
`;

export const IllustrationIntro = styled.section`
  width: 80%;
  margin: 7em auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 3.3em;
  }
`;

export const AboutManage = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const WhatSaid = styled.section`
  width: 100%;
  margin: 7em auto;
  text-align: center;
`;

export const Simplify = styled.section`
  width: 100%;
  height: 13em;
  background-color: hsl(12, 88%, 59%);
  background-image: url(${bck});
  background-repeat: no-repeat;
  background-position: right -9em;
  div {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      color: hsl(0, 0%, 98%);
    }
  }
`;

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
