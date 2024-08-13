import React from "react";
import { Header } from "../../componentes/principal/header";
import { Footer } from "../../componentes/principal/footer";
import "./tshirt.css";

const Tshirt = () => {
  return (
    <>
      <div className="portfolio">
        <div className="containerport">
          <div className="boxPort">
            <Header />

            <div className="containerIlustration">
              <div className="headerIlustration">
                <h1> TShirt </h1>
              </div>

              <div className="gallery1">
                <div className="video12">
                  {/* <iframe
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/989322266?h=fc8161378d=60&autoplay=1&controls=0&loop=1"
                    width="100%"
                    height="600"
                    frameborder="0"
                    className="video1"
                    allowfullscreen
                  ></iframe> */}

                  <img
                    src="https://res.cloudinary.com/dtmziqubb/image/upload/v1723520789/TRIDENT_VIDEO_2_gh1lig.gif"
                    alt=""
                  />
                  <h3></h3>
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

export { Tshirt };
