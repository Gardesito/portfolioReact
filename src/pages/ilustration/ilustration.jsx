import React from "react";
import "./ilustration.css";
import { Link } from "react-router-dom";
import { Header } from "../../componentes/principal/header";
import { Footer } from "../../componentes/principal/footer";
const Ilustration = () => {
  return (
    <>
      <div className="portfolio">
        <div className="containerport">
          <div className="boxPort">
            <Header />

            <div className="containerIlustration">
              <div className="headerIlustration">
                <h1 className="logo">Coleccion de Comida</h1>
              </div>
              <div className="gallery1">
                <div className="item">
                  <a href="/">
                    <img
                      className="imgIlu"
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562452/Sin-t%C3%ADtulo-2-_16_-_8__01_jxaoky.jpg"
                      alt="image"
                    />
                    <h3>Photographer Name</h3>
                  </a>
                </div>
                <div className="item">
                  <a href="/">
                    <img
                      className="imgIlu"
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562452/Sin-t%C3%ADtulo-2-_16_-_8__05_bsrgyj.jpg"
                      alt="image"
                    />
                    <h3>Photographer Name</h3>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <img
                      className="imgIlu"
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562452/Sin-t%C3%ADtulo-2-_16_-_8__06_v2msiq.jpg"
                      alt="image"
                    />
                    <h3>Photographer Name</h3>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <img
                      className="imgIlu"
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562452/Sin-t%C3%ADtulo-2-_16_-_8__04_zix0t0.jpg"
                      alt="image"
                    />
                    <h3>Photographer Name</h3>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <img
                      className="imgIlu"
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562452/Sin-t%C3%ADtulo-2-_16_-_8__04_zix0t0.jpg"
                      alt="image"
                    />
                    <h3>Photographer Name</h3>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <img
                      className="imgIlu"
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562451/Sin-t%C3%ADtulo-2-_16_-_8__03_l21bdk.jpg"
                      alt="image"
                    />
                    <h3>Photographer Name</h3>
                  </a>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="containerIlustration">
              <div className="profile">
                <div className="profile-image">
                  <img
                    className="imgIlu"
                    src="https://res.cloudinary.com/dtmziqubb/image/upload/v1714084360/logito_n7giri.png"
                    alt=""
                  />
                </div>

                <div className="profile-user-settings">
                  <h1 className="profile-user-name">elias_solis</h1>

                  <button className="btn profile-edit-btn">
                    Editar Perfil
                  </button>

                  <button
                    className="btn profile-settings-btn"
                    aria-label="profile settings"
                  >
                    {/*         <i className="fas fa-cog" aria-hidden="true" style="color: white;"></i>
                     */}{" "}
                  </button>
                </div>

                <div className="profile-stats">
                  <ul>
                    <li>
                      <span className="profile-stat-count">6</span>{" "}
                      publicasiones
                    </li>
                    <li>
                      <span className="profile-stat-count">21,1 mil</span>{" "}
                      seguidores
                    </li>
                    <li>
                      <span className="profile-stat-count">206</span> seguidos
                    </li>
                  </ul>
                </div>
                <div className="profile-bio">
                  <p>
                    <span className="profile-real-name">Elias</span> Diseña crea
                    y emprende de la mejor manera 📷✈️🏕️
                  </p>
                </div>
              </div>

              <div className="gallery">
                <div className="gallery-item" tabindex="0">
                  <img
                    src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562452/Sin-t%C3%ADtulo-2-_16_-_8__01_jxaoky.jpg"
                    className="gallery-imageIlu"
                    alt=""
                  />

                  <div class="gallery-item-info">
                    <ul>
                      <li class="gallery-item-likes">
                        <span class="visually-hidden">Likes:</span>
                        <i class="fas fa-heart" aria-hidden="true"></i> 56
                      </li>
                      <li class="gallery-item-comments">
                        <span class="visually-hidden">Comments:</span>
                        <i class="fas fa-comment" aria-hidden="true"></i> 2
                      </li>
                    </ul>
                  </div>
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

export { Ilustration };
