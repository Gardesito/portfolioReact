import React from "react";
import "./perfil.css";
const Perfil = () => {
  return (
    <>
      <div className="perfil">
        <div className="containerPerfil">
          <img
            src="https://res.cloudinary.com/doo4zye2n/image/upload/v1722102651/SOY_UN_PNG_asahpu.png"
            alt=""
            className="imgPerfil"
          />
          <div className="txtPerfil">
            <div className="textDisponible">
              <p>
                {" "}
                <span className="green">🟢</span> Available To Work
              </p>
            </div>

            <h1>Elias Solis</h1>

            <p>
              <span className="developer">i am Developer</span>
            </p>
          </div>
        </div>
        <div className="info">
          <div className="infoDate">
            <div className="fondoInfo">
              <div className="imgInfo"></div>
              <div className="textInfo">
                <p>Argentina</p>
              </div>
            </div>

            <div className="fondoInfo">
              <div className="imgInfo"></div>
              <div className="textInfo">
                <p>Spanish</p>
              </div>
            </div>

            <div className="fondoInfo">
              <div className="imgInfo"></div>
              <div className="textInfo">
                <p>Diseñador</p>
              </div>
            </div>

            <div className="fondoInfo">
              <div className="imgInfo"></div>
              <div className="textInfo">
                <p>Good Boy</p>
              </div>
            </div>

            <div className="fondoInfo">
              <div className="imgInfo"></div>
              <div className="textInfo">
                <p>Spanish</p>
              </div>
            </div>
          </div>
        </div>

        <div className="redes">
          <div className="container-redes">
            <a
              href=" https://www.instagram.com/elias_fx/?hl=es-la"
              target="_blank"
            >
              <div></div>
              <div className="redestext">
                <p>Instagram</p>
              </div>
            </a>
          </div>

          <div className="container-redes">
            <a href="">
              <div></div>
              <div className="redestext">
                <p>Whatasapp me</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { Perfil };
