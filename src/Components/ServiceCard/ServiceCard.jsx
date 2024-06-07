import { Link } from "react-router-dom";
import calendarIcon from "../../assets/calendarIcon.svg";
import { Box } from "./StyleServiceCard.jsx";

function ServiceCard() {
  return (
    <Link>
      <Box>
        <img src={calendarIcon} alt="icone de calendario" id="img" />
        <label htmlFor="img">Agendar consulta</label>
      </Box>
    </Link>
  );
}

export default ServiceCard;
