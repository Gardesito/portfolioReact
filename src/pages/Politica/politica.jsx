import React from "react";
import { Header } from "../../componentes/principal/header";
import { Footer } from "../../componentes/principal/footer";
import "./politica.css";

const Politica = () => {
  return (
    <>
      <div className="portfolio">
        <div className="containerport">
          <div className="boxPort">
            <Header />

            <div className="containerIlustration">
              <div className="headerIlustration">
                <h1> Supermercado Dia </h1>
              </div>

              <div className="gallery1">
                <div className="video12">
                  <img
                    src="https://res.cloudinary.com/doo4zye2n/image/upload/v1730240127/42219645_2_1_asnuch.gif"
                    alt=""
                  />
                  <div className="btnTshirt">
                    <a
                      href="https://www.instagram.com/silvanaperezbonavita/?hl=es-la"
                      target="blank"
                    >
                      <div className="containerBtn">
                        <div>
                          <p className="txtPro">Show </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* <div className="Tshirtex">
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1724351207/Sin_t%C3%ADtulo-1_g14sog.png"
                      alt=""
                    />
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1724351636/Triden_8k_back_jsdrkd.png"
                      alt=""
                    />
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1724351637/Triden_logo_8k_p0hwhb.png"
                      alt=""
                    />
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1724351636/Triden_8k_front_1png_gatpvy.png"
                      alt=""
                    />
                  </div> */}
                </div>
              </div>
            </div>

            <div className="tshirt"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Politica };
