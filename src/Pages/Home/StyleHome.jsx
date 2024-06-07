import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 63rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  background-color: var(--tertiary);

  p {
    font-size: 1.5em;
    font-weight: bold;
    color: var(--background);
  }
`;

export const Heading = styled.h1`
  text-align: center;
`;
