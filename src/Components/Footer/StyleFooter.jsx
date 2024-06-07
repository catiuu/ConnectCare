import styled from "styled-components";

export const Box = styled.div`
  background-color: var(--secondary);
  height: 7rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  p {
    text-align: center;
    font-weight: bold;
    font-size: 1em;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 1rem;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    all: unset;
    font-weight: 700;
  }

  a:hover {
    cursor: pointer;
    color: var(--tertiary);
  }
`;
