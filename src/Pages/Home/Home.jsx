import React from "react";
import Header from "../../Components/Header/Header.jsx";
import doctors from "../../assets/doctorsHome.svg";
import { Div, Box, Heading } from "./StyleHome.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import ServiceCard from "../../Components/ServiceCard/ServiceCard.jsx";

function Home() {
  return (
    <>
      <Header />
      <Heading>Boas-vindas à ConnectCare</Heading>
      <Div>
        <p>
          Estamos aqui para ajudar você a manter sua saúde em dia com apenas
          alguns cliques. Nossos serviços são projetados para sua conveniência e
          facilidade de uso.
        </p>
        <img
          src={doctors}
          alt="Vetor simbolizando dois medicos brancos um homem e uma mulher"
        />
      </Div>
      <Box>
        <p>Descubra tudo o que a ConnectCare pode oferecer!</p>
      </Box>

      <h2>Nossos serviços</h2>
      <ServiceCard />
      <section>
        <h2>Novidades por aí</h2>
        <p>
          Estamos sempre empenhados em fornecer acesso fácil e conveniente a
          serviços de saúde de alta qualidade. Em breve, traremos novas
          funcionalidades para melhorar ainda mais a sua experiência.
        </p>
      </section>
      <section>
        <h2>Perguntas Frequentes</h2>
      </section>
      <Footer />
    </>
  );
}

export default Home;
