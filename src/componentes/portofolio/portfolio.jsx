import React from "react";
import { Footer } from "../principal/footer";
import { Header } from "../principal/header";
import { Perfil } from "../pages/perfil";
import { Numeros } from "../pages/numeros";
import { Clientes } from "../pages/clientes";
import { Projects } from "../pages/projects";
import { Follow } from "../pages/follow";
import { Contact } from "../pages/contact";
const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <Header />
        <Perfil />
        <Numeros />
        <Clientes />
        <Follow />

        <Projects />
        <Contact />

        <Footer />
      </div>
    </>
  );
};

export { Portfolio };
