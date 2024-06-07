import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
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
