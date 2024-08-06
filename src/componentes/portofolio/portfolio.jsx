import React from "react";
import { Footer } from "../principal/footer";
import { Header } from "../principal/header";
import { Perfil } from "../pages/perfil";
import { Numeros } from "../pages/numeros";
import { Clientes } from "../pages/clientes";
import { Projects } from "../pages/projects";
import { Follow } from "../pages/follow";
import { Contact } from "../pages/contact";

import "./portfolio.css";
const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <div className="containerport">
<div className="boxPort">
          <Header />
          <Perfil />
          <Numeros />
          <Clientes />
          <Follow />

          <Projects />
          <Contact />

          <Footer />
        </div>
        </div>

      </div>
    </>
  );
};

export { Portfolio };
