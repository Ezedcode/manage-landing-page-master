import styled from "styled-components";

export const ContainerItem = styled.div`
  display: flex;
  margin: 7em auto 4em auto;
  width: 555px;
  background-color: red;
  div {
    margin: auto;
  }
  img {
    position: absolute;
    width: 6em;
    top: 4em;
    transform: translateX(-50%);
  }
  h3 {
    padding-top: 5em;
  }
`;
