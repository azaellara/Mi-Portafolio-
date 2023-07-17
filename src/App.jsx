import React from "react";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import Formulario from "./Components/Formulario/Formulario";
import Footer from "./Components/Footer/Footer";
import Boton from "./Components/Boton/Boton";
import Carta from "./Components/Card/Card";

export default function App() {
  return (
    <>
      <Header />
      <Skills />
      <Carta />
      <Formulario />
      <Footer />
      <Boton />
    </>
  );
}
