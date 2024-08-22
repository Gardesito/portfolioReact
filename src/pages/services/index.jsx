import "./servicios.css";
import { Header } from "../../componentes/principal/header";
import { Footer } from "../../componentes/principal/footer";
import { Projects } from "../../componentes/projects";
import { Link } from "react-router-dom";

const Servicios = () => {
  return (
    <>
      <div className="portfolio">
        <div className="containerport">
          <div className="boxPort">
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
                    Creación de sitios web funcionales con código limpio y
                    diseño responsivo para cumplir con los objetivos del cliente
                    y mejorar las experiencias del usuario.
                  </p>
                </div>

                <div className="llamada">
                  <a href="https://calendly.com/elias-e-solis" target="blank">
                    <div>
                      <div>
                        <img
                          src="https://framerusercontent.com/images/1i79OSogPnkvzpCkZ3nqdP1UKWY.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="textSp2">
                      <p>Programar Reunion</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="carrusel"></div>
            </div>

            <div className="service">
              <div className="containerService">
                <div>
                  <div className="containerTs">
                    <div className="iconS">
                      <div className="cajaS">
                        <div className="containerSvgS">
                          <img
                            src="https://framerusercontent.com/images/9pEvtSXW0V5eTW4mYMFL5aNXNk.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="txtService">
                      <h2>Social Media Design</h2>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="txtSp">
                  <p>
                    Creación de diseños para tus redes sociales, dándole vida a
                    tus ideas de una manera que pueda impactar a tú público
                  </p>
                </div>

                <div className="llamada">
                  <a href="https://calendly.com/elias-e-solis" target="blank">
                    <div>
                      <div>
                        <img
                          src="https://framerusercontent.com/images/1i79OSogPnkvzpCkZ3nqdP1UKWY.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="textSp2">
                      <p>Programar Reunion</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="carrusel"></div>
            </div>
            <Projects />

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export { Servicios };
