import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import UndrawEnergize from '../assets/undraw_energizer_re_vhjv 1.svg'

const Formulario = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [dados, setDados] = useState({
    cpf: '',
    dataNascimento: '',
    email: '',
    senha: '',
    confirmacaoSenha: '',
  });

  const onSubmit = (data) => {
    console.log('Dados do Formulário:', data);
    // Aqui você pode enviar os dados para o servidor
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div>
    <img src={UndrawEnergize} alt="" />
      <div>
        <p>Boas-vindas! Para iniciarmos seu cadastro, informe os <strong>dados da conta</strong></p>

        <div>
          <div className={`step ${step === 1 ? 'active' : ''}`}>1</div>
          <div className={`step ${step === 2 ? 'active' : ''}`}>2</div>
          <div className={`step ${step === 3 ? 'active' : ''}`}>3</div>
        </div>

        {step === 1 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="cpf">CPF/CNPJ:</label>
              <input
                type="text"
                id="cpf"
                {...register('cpf', { required: true, maxLength: 14, pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/ })}
                placeholder="123.456.789-11"
              />
              {errors.cpf && <span className="error">CPF inválido</span>}
            </div>
            <div>
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
              <input
                type="date"
                id="dataNascimento"
                {...register('dataNascimento', { required: true })}
              />
              {errors.dataNascimento && <span className="error">Data de nascimento obrigatória</span>}
            </div>
            <button type="submit" className="next-button">Próximo</button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                placeholder="maria.silva@gmail.com"
              />
              {errors.email && <span className="error">Email inválido</span>}
            </div>
            <div>
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                {...register('senha', { required: true, minLength: 6 })}
                placeholder="senha123"
              />
              {errors.senha && <span>Senha inválida</span>}
            </div>
            <div>
              <label htmlFor="confirmacaoSenha">Confirmação de Senha:</label>
              <input
                type="password"
                id="confirmacaoSenha"
                {...register('confirmacaoSenha', { required: true, validate: (value) => value === dados.senha })}
                placeholder="senha123"
              />
              {errors.confirmacaoSenha && (
                <span>As senhas não coincidem</span>
              )}
            </div>
            <button type="button" onClick={handlePrevious}>Voltar</button>
            <button type="submit" >Próximo</button>
          </form>
        )}

        {step === 3 && (
          <div>
            <h2>Confirmação de Dados</h2>
            <p><strong>CPF/CNPJ:</strong> {dados.cpf}</p>
            <p><strong>Data de Nascimento:</strong> {dados.dataNascimento}</p>
            <p><strong>E-mail:</strong> {dados.email}</p>
            <p><strong>Senha:</strong> {dados.senha}</p>
            <button type="button" onClick={handlePrevious}>Voltar</button>
            <button type="button" onClick={onSubmit}>Continuar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Formulario;