import styled from "styled-components";


export const Nav = styled.nav`
  background-color: var(--secondary);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 7rem;


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


export const Img = styled.img`
  width: 6.25rem;
  height: 6.25rem;
`;


export const Div = styled.div`
  display: flex;
  align-items: center;


  img {
    margin-right: 0.5rem;
  }
`;


