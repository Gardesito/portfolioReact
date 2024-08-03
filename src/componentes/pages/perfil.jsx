import React from "react";
import "./perfil.css";
const Perfil = () => {
  return (
    <>
      <div className="perfil">
        <div className="containerPerfil">
          <div className="boxImg1">
            <div className="boxImg2">
              <div className="boxImg3">
                <img
                  src="https://res.cloudinary.com/doo4zye2n/image/upload/v1722102651/SOY_UN_PNG_asahpu.png"
                  alt=""
                  className="imgPerfil"
                />
              </div>
            </div>
          </div>

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
              <div className="imgInfo">
                <img
                  src="https://framerusercontent.com/images/LnINChddZ7WxbcCRF4yX3pY30.svg"
                  alt=""
                />{" "}
              </div>
              <div className="textInfo">
                <p>Argentina</p>
              </div>
            </div>

            <div className="fondoInfo">
              <div className="imgInfo">
                {" "}
                <img
                  src="https://framerusercontent.com/images/Je0bncWlBPyemX1nWwnHkgx7Pd4.svg"
                  alt=""
                />
              </div>
              <div className="textInfo">
                <p>Spanish</p>
              </div>
            </div>

            <div className="fondoInfo">
              <div className="imgInfo">
                {" "}
                <img
                  src="https://framerusercontent.com/images/oT8R3yT3QObEqWbS7g0bAjsEjk.svg"
                  alt=""
                />
              </div>
              <div className="textInfo">
                <p>Diseñador</p>
              </div>
            </div>

            <div className="fondoInfo">
              <div className="imgInfo">
                {" "}
                <img
                  src="https://framerusercontent.com/images/zr11FpnutRZXbPLLyBlAwdp7vQ.svg"
                  alt=""
                />
              </div>
              <div className="textInfo">
                <p>Good Boy</p>
              </div>
            </div>

            <div className="fondoInfo">
              <div className="imgInfo">
                {" "}
                <img
                  src="https://framerusercontent.com/images/oT8R3yT3QObEqWbS7g0bAjsEjk.svg"
                  alt=""
                />
              </div>
              <div className="textInfo">
                <p>Developer</p>
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
              <div className="imgInfo">
                <img
                  src="https://framerusercontent.com/images/Noy5SjiQS1OWy3FZmUE4TGu45ZA.svg"
                  alt=""
                />
              </div>
              <div className="redestext">
                <p>Instagram</p>
              </div>
            </a>
          </div>

          <div className="container-redes">
            <a href="">
              <div className="imgInfo">
                <img
                  src="https://framerusercontent.com/images/Noy5SjiQS1OWy3FZmUE4TGu45ZA.svg"
                  alt=""
                />
              </div>
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
