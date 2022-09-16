import styled from "styled-components";

export const NavBar = styled.nav`
  height: 27px;
  display: flex;
  align-items: start;

  a {
    color: hsl(228, 39%, 23%);
    padding: 0 20px;
    text-decoration: none;
  }

  a:hover {
    color: hsl(227, 12%, 61%);
  }
`;
