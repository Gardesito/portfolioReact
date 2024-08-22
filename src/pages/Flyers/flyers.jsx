import React from "react";
import { Header } from "../../componentes/principal/header";
import { Footer } from "../../componentes/principal/footer";
const Flyer = () => {
  return (
    <>
      <div className="portfolio">
        <div className="containerport">
          <div className="boxPort">
            <Header />

            <div className="containerIlustration">
              <div className="headerIlustration">
                <h1>Flyers Mokup</h1>
              </div>

              <div className="gallery1">
                <div className="item">
                  <img
                    className="imgIlu"
                    src="https://res.cloudinary.com/doo4zye2n/image/upload/v1724364303/luck_ra_ixpx2u.png"
                    alt="image"
                  />
                  <h3>Luck Ra evento</h3>
                </div>

                <div className="item">
                  <img
                    className="imgIlu"
                    src="https://res.cloudinary.com/doo4zye2n/image/upload/v1724364302/pet_shop_2_wcfniu.png"
                    alt="image"
                  />
                  <h3>Veterinaria</h3>
                </div>

                <div className="item">
                  <img
                    className="imgIlu"
                    src="https://res.cloudinary.com/doo4zye2n/image/upload/v1724364302/dia_del_ni%C3%B1o_iege4a.png"
                    alt="image"
                  />
                  <h3>Dia del Niño</h3>
                </div>

                <div className="item">
                  <img
                    className="imgIlu"
                    src="https://res.cloudinary.com/doo4zye2n/image/upload/v1724364314/manicura_jmawrv.png"
                    alt="image"
                  />
                  <h3>Manicura</h3>
                </div>

                <div className="item">
                  <img
                    className="imgIlu"
                    src="https://res.cloudinary.com/doo4zye2n/image/upload/v1724364304/destival_vsiedf.png"
                    alt="image"
                  />
                  <h3>Festival</h3>
                </div>

                <div className="item">
                  <img
                    className="imgIlu"
                    src="https://res.cloudinary.com/doo4zye2n/image/upload/v1724364302/dentista_d4elyb.png"
                    alt="image"
                  />
                  <h3>Dentista</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Flyer };
