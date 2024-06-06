import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`

export const Form = styled.form`
  flex-direction: column;
  height: 100vh;
  width: 40vw;
  padding: 20vh;

  input {
    margin-bottom: 15px;
    align-items: center;
  }

  button {
    margin-top: 20px;
  }
`