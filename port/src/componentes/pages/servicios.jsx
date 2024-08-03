import React from "react";
import "./servicios.css";
import { Header } from "../principal/header";
import { Footer } from "../principal/footer";
const Servicios = () => {
  return (
    <>
      <div className="services">
        <Header />

        <div className="service">
          <div className="containerService">
            <div>
              <div className="containerTs">
                <div className="iconS">
                  <div className="cajaS">
                    <div className="containerSvgS">
                      <img
                        src="https://framerusercontent.com/images/dns7tIoH7jlUuSiuKULcKfUet08.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="txtService">
                  <h2>Desarrollo web</h2>
                </div>
              </div>
              <div></div>
            </div>
            <div className="txtSp">
              <p>
                Creación de sitios web funcionales con código limpio y diseño
                responsivo para cumplir con los objetivos del cliente y mejorar
                las experiencias del usuario.
              </p>
            </div>

            <div className="llamada">
              <a href="">
                <div>
                  <div>
                    <img
                      src="https://framerusercontent.com/images/1i79OSogPnkvzpCkZ3nqdP1UKWY.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="textSp2">
                  <p>Programar llaamada</p>
                </div>
              </a>
            </div>
          </div>

          <div className="carrusel"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export { Servicios };
