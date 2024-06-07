import React from "react";
import Home from "./Pages/Home/Home.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Scheduling from "./Pages/Scheduling/Scheduling.jsx";

function Navegation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/scheduling" element={<Scheduling/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Navegation;
