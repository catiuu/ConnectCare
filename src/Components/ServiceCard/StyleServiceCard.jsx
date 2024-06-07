import styled from "styled-components";

export const Box = styled.div`
  background-color: var(--secondary);
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 12rem;

  img {
    height: 4rem;
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
