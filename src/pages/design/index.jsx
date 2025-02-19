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
                  <Link to="/dia">
                    <a href="" className="containerD">
                      <div className="containerD2">
                        <div className="containerd3">
                          <img
                            src="https://res.cloudinary.com/doo4zye2n/image/upload/v1730238772/asdxc_cufzr9.jpg"
                            alt=""
                            className="imgD"
                          />
                        </div>
                      </div>

                      <div className="containerTxt">
                        <div className="containerTxt1">
                          <div className="containerTxt2">
                            <p>Videos</p>
                          </div>
                          <div className="containerTxt3">
                            <p>Supermercado Dia</p>
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

                  <Link to="/gym">
                    <a href="" className="containerD">
                      <div className="containerD2">
                        <div className="containerd3">
                          <img
                            src="https://res.cloudinary.com/dtmziqubb/image/upload/v1739818640/Capa_1_jx6e7t.jpg"
                            alt=""
                            className="imgD"
                          />
                        </div>
                      </div>

                      <div className="containerTxt">
                        <div className="containerTxt1">
                          <div className="containerTxt2">
                            <p>Videos</p>
                          </div>
                          <div className="containerTxt3">
                            <p>Core Sport Center</p>
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

                  <Link to="/Politica">
                    <a href="" className="containerD">
                      <div className="containerD2">
                        <div className="containerd3">
                          <img
                            src="https://res.cloudinary.com/doo4zye2n/image/upload/v1730238772/cabildo_abierto_goghej.jpg"
                            alt=""
                            className="imgD"
                          />
                        </div>
                      </div>

                      <div className="containerTxt">
                        <div className="containerTxt1">
                          <div className="containerTxt2">
                            <p>Publicidad (imagenes y videos)</p>
                          </div>
                          <div className="containerTxt3">
                            <p>Partido Politico (Uruguay)</p>
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

                  <Link to="/ilustration">
                    <a href="" className="containerD">
                      <div className="containerD2">
                        <div className="containerd3">
                          <img
                            src="https://res.cloudinary.com/doo4zye2n/image/upload/v1723470558/aver_urxvgf.png"
                            alt=""
                            className="imgD"
                          />
                        </div>
                      </div>

                      <div className="containerTxt">
                        <div className="containerTxt1">
                          <div className="containerTxt2">
                            <p>Community Manager</p>
                          </div>
                          <div className="containerTxt3">
                            <p>Example</p>
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

                  <Link to="/tshirt">
                    <a href="" className="containerD">
                      <div className="containerD2">
                        <div className="containerd3">
                          <img
                            src="https://res.cloudinary.com/dtmziqubb/image/upload/v1723522182/RE_SEEE_vims4r.png"
                            alt=""
                            className="imgD"
                          />
                        </div>
                      </div>

                      <div className="containerTxt">
                        <div className="containerTxt1">
                          <div className="containerTxt2">
                            <p>T Shirt</p>
                          </div>
                          <div className="containerTxt3">
                            <p>Trident</p>
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
                  <Link to="/flyer">
                    <a href="" className="containerD">
                      <div className="containerD2">
                        <div className="containerd3">
                          <img
                            src="https://res.cloudinary.com/doo4zye2n/image/upload/v1724364842/FLYERS_nsny1s.png"
                            alt=""
                            className="imgD"
                          />
                        </div>
                      </div>

                      <div className="containerTxt">
                        <div className="containerTxt1">
                          <div className="containerTxt2">
                            <p>Flyers</p>
                          </div>
                          <div className="containerTxt3">
                            <p>Mokups</p>
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
