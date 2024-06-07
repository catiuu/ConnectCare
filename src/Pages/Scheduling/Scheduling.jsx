import { Container } from "@mui/material"
import GoBackButton from "../../Components/GoBackButton/GoBackButton"
import Header from "../../Components/Header/Header"
import Step1 from "./components/Step1/Step1"
// import Input from "../../Components/Input/Input"
function Scheduling() {
  return (
    <>
      <Header />
      {/* <Input /> */}
      <GoBackButton />
      <Container>
        <Step1 />
      </Container>
    </>
  )
}

export default Scheduling