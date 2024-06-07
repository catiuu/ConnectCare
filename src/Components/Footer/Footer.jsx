import { Link } from "react-router-dom";
import { Nav, Box } from "./StyleFooter.jsx";

function Footer() {
  return (
    <Box>
      <Nav>
        <li>
          {" "}
          <Link to="/home"> Política de Privacidade</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/home"> Termos de Uso</Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            to="https://www.sirio-libanes.org.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sirio-Libanês
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            to="https://www.vainaweb.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Vai na web{" "}
          </Link>{" "}
        </li>
      </Nav>
      <p>ConnectCare © 2024 connectcare.app.br</p>
    </Box>
  );
}

export default Footer;
