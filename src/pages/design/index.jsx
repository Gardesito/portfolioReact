import { Header } from "../../componentes/principal/header";
import { Footer } from "../../componentes/principal/footer";
import { Clientes } from "../../componentes/clientes";

import { Numeros } from "../../componentes/numeros";
import { Link } from "react-router-dom";

import "./design.css";

const Design = () => {
  return (
    <>
      <div className="portfolio">
        <div className="containerport">
          <div className="boxPort">
            <Header />

            <div className="containerWorks">
              <div className="btnWks">
                <div>
                  {" "}
                  <Link to="/work">
                    {" "}
                    <a href="" className="btnFondo">
                      <div>
                        {" "}
                        <p>Developer</p>
                      </div>
                    </a>
                  </Link>
                </div>

                <div>
                  {" "}
                  <Link to="/design">
                    {" "}
                    <a href="" className="btnFondo">
                      <div>
                        {" "}
                        <p> Designer</p>{" "}
                      </div>
                    </a>{" "}
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
              <div className="design">
                <div>
                  <Link to="/ilustration">
                    <a href="" className="containerD">
                      <div className="containerD2">
                        <div className="containerd3">
                          <img
                            src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715034889/blancaso_hyjkzz.png"
                            alt=""
                            className="imgD"
                          />
                        </div>
                      </div>

                      <div className="containerTxt">
                        <div className="containerTxt1">
                          <div className="containerTxt2">
                            <p>Fuua</p>
                          </div>
                          <div className="containerTxt3">
                            <p>Ecomerce</p>
                          </div>
                        </div>
                        <div className="iconD">
                          <div className="iconD1">
                            <div>
                              <img
                                src="https://framerusercontent.com/images/Lb6hmzD1rqwb6BVGnqeLP0ps88.svg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <Clientes />

            <Numeros />

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export { Design };
