import React from "react";
import { Footer } from "../principal/footer";
import { Header } from "../principal/header";
import { Perfil } from "../pages/perfil";
import { Numeros } from "../pages/numeros";
import { Clientes } from "../pages/clientes";
import { Projects } from "../pages/projects";
const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <Header />
        <Perfil />
        <Numeros />
        <Clientes />
        <Projects />

        <Footer />
      </div>
    </>
  );
};

export { Portfolio };
