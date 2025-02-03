import { Footer } from "../../componentes/principal/footer";
import { Header } from "../../componentes/principal/header";
import { Perfil } from "../../componentes/perfil";
import { Numeros } from "../../componentes/numeros";
import { Clientes } from "../../componentes/clientes";
import { Projects } from "../../componentes/projects";
import { Follow } from "../../componentes/follow";
import { Contact } from "../../componentes/contact";

import "./portfolio.css";
import { Skills } from "../../componentes/skills/skills";
import { Skills2 } from "../../componentes/skill2/skill2";
const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <div className="containerport">
          <div className="boxPort">
            <Header />

            <Perfil />
            <Skills />          
            <Skills2 />

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
