import styled, { keyframes } from "styled-components";
const showMenu = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const closeMenu = keyframes`
  to {
    opacity: 0;
    transform: rotate(-360deg);
  }
`;
export const Container = styled.div`
  min-width: 71rem;
  max-width: 79rem;
  margin: 62px auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn {
    @media (max-width: 1024px) {
      display: none;
    }
  }
  .menuButton {
    display: none;
    height: 16px;
    background-color: #fff;
    transition: 0.5s;
    &:hover {
      cursor: pointer;
    }
    .closeMenu {
      animation: ${closeMenu} 1s !important;
    }
    .closeBtn {
      animation: ${showMenu} 1s;
    }

    @media (max-width: 1024px) {
      display: block;
    }
  }
  @media (max-width: 1024px) {
    width: 282px;
  }
`;

export const Img = styled.div`
  position: absolute;
  top: -20em;
  left: 52%;
  z-index: -1;
  @media (max-width: 1024px) {
    top: -6em;
    left: 8%;
    width: 27em;
    img {
      width: 100%;
    }
  }
`;
