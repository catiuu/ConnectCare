import { Link } from "react-router-dom";
import logo from "../../assets/logoHeader.svg";
import icon from "../../assets/icon.svg";
import { Nav, Img, Div } from "./StyleHeader.jsx";

function Header() {
  return (
    <Nav>
      <Link to="/home">
        <Img src={logo} alt="ConnectCare" />
      </Link>
      <li>
        {" "}
        <Link to="/scheduling"> Agendar consulta </Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/news"> Novidades </Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/our-services"> Nossos Serviços </Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/faq"> Perguntas frequentes </Link>{" "}
      </li>
      <Div>
        <Link to="/profile">
          <img src={icon} alt="Icone de perfil" />
        </Link>
        <Link to="/profile">
          <p>Olá, Maria!</p>
        </Link>
      </Div>
    </Nav>
  );
}

export default Header;
