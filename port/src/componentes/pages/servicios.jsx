import React from "react";
import "./servicios.css";
import { Header } from "../principal/header";

const Servicios = () => {
  return (
    <>

    <div className="services">
      <Header />

      <div class="service">
        
        <div class="containerService">
          <div>
            <div class="containerTs">
              <div class="iconS">
                <div class="cajaS">
                  <div class="containerSvgS">
                    <img
                      src="https://framerusercontent.com/images/dns7tIoH7jlUuSiuKULcKfUet08.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="txtService">
                <h2>Desarrollo web</h2>
              </div>
            </div>
            <div></div>
          </div>
          <div class="txtSp">
            <p>
              Creación de sitios web funcionales con código limpio y diseño
              responsivo para cumplir con los objetivos del cliente y mejorar
              las experiencias del usuario.
            </p>
          </div>

          <div class="llamada">
            <a href="">
              <div>
                <div>
                  <img
                    src="https://framerusercontent.com/images/1i79OSogPnkvzpCkZ3nqdP1UKWY.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="textSp2">
                <p>Programar llaamada</p>
              </div>
            </a>
          </div>
        </div>

        <div class="carrusel"></div>
      </div>
      </div>
    </>
  );
};

export { Servicios };
