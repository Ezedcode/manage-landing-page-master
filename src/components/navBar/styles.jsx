import styled, { keyframes } from "styled-components";
const ShowNavbar = keyframes`
  from {
    top: 0px;
    opacity: 0;
  }
  to {
    top: 44px;
    opacity: 1;
  }
`;

const CloseNavbar = keyframes`
  from {
    top: 44px;
    opacity: 1;
  }
  to {
    top: 0px;
    opacity: 0;
  }
`;
export const NavBar = styled.nav`
  height: 27px;
  display: flex;
  align-items: start;
  position: relative;

  a {
    color: hsl(228, 39%, 23%);
    padding: 0 12px;
    text-decoration: none;
  }

  a:hover {
    color: hsl(227, 12%, 61%);
  }

  @media (max-width: 1024px) {
    display: ${(props) => props.display};
    position: absolute;
    top: 26px;
    left: 0%;

    width: 100%;
    .active,
    .closeNavBar {
      position: relative;
      top: 44px;
      height: 16rem;
      width: 80%;
      border-radius: 5px;
      padding: 20px 0;
      background-color: hsl(0, 0%, 98%);
      box-shadow: 5px 77rem 23rem 72rem rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      margin: 0 auto;
      z-index: 1;
    }

    .active {
      animation: ${ShowNavbar} 0.5s;
    }
    .closeNavBar {
      animation: ${CloseNavbar} 0.5s !important;
    }
  }
`;
