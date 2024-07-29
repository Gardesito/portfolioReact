import React from "react";
import "./work.css";
import { WorksP } from "./worksproject";
import { Header } from "../principal/header";
import { Footer } from "../principal/footer";
import { Clientes } from "./clientes";

import { Numeros } from "./numeros";
import { Link } from "react-router-dom";

const workP = [
  {
    name: "fuua",
    img: "https://res.cloudinary.com/doo4zye2n/image/upload/v1717441194/cld-sample-5.jpg",
    url: "https://www.google.com",
    sub: "Ecommerce",
  },

  {
    name: "gym",
    img: "https://res.cloudinary.com/doo4zye2n/image/upload/v1717441193/cld-sample-4.jpg",
    url: "https://www.youtube.com/",
    sub: "Ecommerce",
  },
];

const Works = () => {
  return (
    <>
      <div className="work">
        <Header />

        <div className="containerWorks">
          <div className="btnWks">
            <div>
              <Link to="/work">
                <a href="" className="btnFondo">
                  <div>
                    <p>Developer</p>
                  </div>
                </a>
              </Link>
            </div>

            <div>
              <Link to="/design">
                <a href="" className="btnFondo">
                  <div>
                    <p> Designer</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <div>
            <div className="clientesTxt">
              <div></div>
              <div>
                <p className="textC1">My clientess</p>
              </div>
            </div>
            <div className="clientesTxt">
              <p className="textC2">Satisfied Partners</p>
            </div>
          </div>

          {workP.map((work) => (
            <WorksP work={work} />
          ))}
        </div>
        <Clientes />

        <Numeros />

        <Footer />
      </div>
    </>
  );
};

export { Works };
