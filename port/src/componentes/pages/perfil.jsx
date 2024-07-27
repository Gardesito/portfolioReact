import React from "react";
import "./perfil.css";
const Perfil = () => {
  return (
    <>
      <div class="perfil">
        <div class="containerPerfil">
          <img
            src="https://res.cloudinary.com/doo4zye2n/image/upload/v1722102651/SOY_UN_PNG_asahpu.png"
            alt=""
            class="imgPerfil"
          />
          <div class="txtPerfil">
            <div class="textDisponible">
              <p>
                {" "}
                <span className="green">🟢</span> Available To Work
              </p>
            </div>

            <h1>Elias Solis</h1>
          
            <p>
              <span class="developer">i am Developer</span>
            </p> 
          </div>
        </div>
        <div class="info">
          <div class="infoDate">
            <div class="fondoInfo">
              <div class="imgInfo"></div>
              <div class="textInfo">
                <p>Argentina</p>
              </div>
            </div>

            <div class="fondoInfo">
              <div class="imgInfo"></div>
              <div class="textInfo">
                <p>Spanish</p>
              </div>
            </div>

            <div class="fondoInfo">
              <div class="imgInfo"></div>
              <div class="textInfo">
                <p>Diseñador</p>
              </div>
            </div>

            <div class="fondoInfo">
              <div class="imgInfo"></div>
              <div class="textInfo">
                <p>Good Boy</p>
              </div>
            </div>

            <div class="fondoInfo">
              <div class="imgInfo"></div>
              <div class="textInfo">
                <p>Spanish</p>
              </div>
            </div>
          </div>
        </div>

        <div class="redes">
          <div class="container-redes">
            <a
              href=" https://www.instagram.com/elias_fx/?hl=es-la"
              target="_blank"
            >
              <div></div>
              <div class="redestext">
                <p>Instagram</p>
              </div>
            </a>
          </div>

          <div class="container-redes">
            <a href="">
              <div></div>
              <div class="redestext">
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
