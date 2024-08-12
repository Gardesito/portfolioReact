import React from "react";
import "./ilustration.css";
import { Header } from "../../componentes/principal/header";
import { Footer } from "../../componentes/principal/footer";
import { proyectos } from "../../data";

const Ilustration = () => {
  return (
    <>
      <div className="portfolio">
        <div className="containerport">
          <div className="boxPort">
            <Header />
            {proyectos.map((proyecto) => (
              <div className="containerIlustration">
                <div className="headerIlustration">
                  <h1>{proyecto.title}</h1>
                </div>

                <div className="gallery1">
                  {proyecto.imageneScroll.map((img) => (
                    <div className="item">
                      <img className="imgIlu" src={img.url} alt="image" />
                      <h3>{img.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {/*  */}

           
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Ilustration };
