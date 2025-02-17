import React from "react";
import { Header } from "../../componentes/principal/header";
import { Footer } from "../../componentes/principal/footer";

const Gym = () => {
  return (
    <>
      <div className="portfolio">
        <div className="containerport">
          <div className="boxPort">
            <Header />

            <div className="containerIlustration">
              <div className="headerIlustration">
                <h1> Core Sports Center </h1>
              </div>

              <div className="gallery1">
                <div className="video12">
                  <img
                    src="https://res.cloudinary.com/dtmziqubb/image/upload/v1739820919/WhatsApp_Image_2025-02-17_at_4.35.09_PM_w4gugy.jpg"
                    alt=""
                  />
                  <div className="btnTshirt">
                    <a
                      href="https://www.instagram.com/p/DEitWO8R566/?hl=es-la"
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
              <div className="video12">
                <img
                  src="https://res.cloudinary.com/dtmziqubb/image/upload/v1739821058/WhatsApp_Image_2025-02-17_at_4.36.57_PM_azci20.jpg"
                  alt=""
                />
                <div className="btnTshirt">
                  <a
                    href="https://www.instagram.com/coresportscenter/reels/?hl=es-la"
                    target="blank"
                  >
                    <div className="containerBtn">
                      <div>
                        <p className="txtPro">More </p>
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

            <div className="tshirt"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Gym };
