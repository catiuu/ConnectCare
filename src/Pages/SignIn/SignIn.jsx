import React, { useState } from 'react';
import Undraw from "../../assets/undraw_medicine.svg"
import { Container, Main, Imag } from "./StyleSignIn"
import logo from "../../assets/logo.svg"
import { Link} from "react-router-dom"

function SignIn() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateCpf = (inputCpf) => {
    if (inputCpf.length !== 11 || !inputCpf.match(/^\d+$/)) {
      setCpfError('Invalid CPF');
      return false;
    }
    setCpfError('');
    return true;
  };

  const validatePassword = (inputPassword) => {
    if (inputPassword.length < 11) {
      setPasswordError('Password too short');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isCpfValid = validateCpf(cpf);
    const isPasswordValid = validatePassword(password);

    if (isCpfValid && isPasswordValid) {
      alert(`CPF: ${cpf}\nPassword: ${password}`);
    }
  };

  return (
    <Main>
      <div>
        <img src={Undraw} alt="iconlogin" />
      </div>
      <Container>
        <Imag src={logo} alt="login" />
        <h2>Que bom te ver!</h2>
        <p>Por favor, faça login para continuar</p>
        <form className="Information"onSubmit={handleSubmit}>

          <label htmlFor="cpf">CPF/RNE:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            onBlur={() => validateCpf(cpf)}
          />
          {cpfError && <div className="error">{cpfError}</div>}

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => validatePassword(password)}
          />
          {passwordError && <div className="error">{passwordError}</div>}
          <button> <Link to="/home" >Entrar</Link> </button>
        </form>
        <p>Ainda não tem cadastro?</p>
        <Link to="/register">Cadastre-se</Link>
      </Container>


    </Main>
  );
}

export default SignIn;