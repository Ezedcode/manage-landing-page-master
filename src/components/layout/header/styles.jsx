import styled, { keyframes } from "styled-components";
const showMenu = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const closeMenu = keyframes`
  to {
    transform: rotate(-360deg);
  }
`;
export const Container = styled.div`
  width: 80%;
  margin: 3em auto 0 auto;
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
`;

export const Img = styled.div`
  display: none;
  position: absolute;
  top: ${(props) => props.top}em;
  left: ${(props) => props.left}%;
  right: ${(props) => props.right}%;
  z-index: -1;
`;
