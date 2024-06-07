import React from "react";
import Header from "../../Components/Header/Header.jsx";
import doctors from "../../assets/doctorsHome.svg";
import { Div, Box } from "./StyleHome.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

function Home() {
  return (
    <div className="container-home">
      <Header />
      <h1>Boas-vindas à ConnectCare</h1>
      <section>
        <Div>
          <p>
            Estamos aqui para ajudar você a manter sua saúde em dia com apenas
            alguns cliques. Nossos serviços são projetados para sua conveniência
            e facilidade de uso.
          </p>
          <img
            src={doctors}
            alt="Vetor simbolizando dois medicos brancos um homem e uma mulher"
          />
        </Div>
        <Box>
          <p>Descubra tudo o que a ConnectCare pode oferecer!</p>
        </Box>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
