import React from "react"

function Login(){
    return(
        <section>
            <div>
                <figure>
                    <img src="assets/logo.svg" alt="" />
                </figure>
            </div>
            <div className="Box">
                <form action="">
                    <h1>Faça o seu Login</h1>
                    <input type="register" placeholder="CPF/RNE" />
                    <input type="password" placeholder="Senha"/>
                </form>
                <h3>Esqueci minha senha</h3>
                <button>Entrar</button>
                <h3>Ainda não tem cadastro?</h3>
                <h2>Cadastre-se</h2>
            </div>
        </section>
    )
}
export default Login