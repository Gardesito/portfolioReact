import React from "react";
import "./fuua.css";
const Food = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="logo">Coleccion de Comida</h1>
        </div>
        <div className="gallery1">
          <div className="item">
            <a href="/">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562452/Sin-t%C3%ADtulo-2-_16_-_8__01_jxaoky.jpg"
                alt="image"
              />
              <h3>Photographer Name</h3>
            </a>
          </div>
          <div className="item">
            <a href="/">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562452/Sin-t%C3%ADtulo-2-_16_-_8__05_bsrgyj.jpg"
                alt="image"
              />
              <h3>Photographer Name</h3>
            </a>
          </div>
          <div className="item">
            <a href="">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562452/Sin-t%C3%ADtulo-2-_16_-_8__06_v2msiq.jpg"
                alt="image"
              />
              <h3>Photographer Name</h3>
            </a>
          </div>
          <div className="item">
            <a href="">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562452/Sin-t%C3%ADtulo-2-_16_-_8__04_zix0t0.jpg"
                alt="image"
              />
              <h3>Photographer Name</h3>
            </a>
          </div>
          <div className="item">
            <a href="">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562452/Sin-t%C3%ADtulo-2-_16_-_8__04_zix0t0.jpg"
                alt="image"
              />
              <h3>Photographer Name</h3>
            </a>
          </div>
          <div className="item">
            <a href="">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562451/Sin-t%C3%ADtulo-2-_16_-_8__03_l21bdk.jpg"
                alt="image"
              />
              <h3>Photographer Name</h3>
            </a>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="container">
        <div className="profile">
          <div className="profile-image">
            <img
              src="https://res.cloudinary.com/dtmziqubb/image/upload/v1714084360/logito_n7giri.png"
              alt=""
            />
          </div>

          <div className="profile-user-settings">
            <h1 className="profile-user-name">elias_solis</h1>

            <button className="btn profile-edit-btn">Editar Perfil</button>

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
                <span className="profile-stat-count">6</span> publicasiones
              </li>
              <li>
                <span className="profile-stat-count">21,1 mil</span> seguidores
              </li>
              <li>
                <span className="profile-stat-count">206</span> seguidos
              </li>
            </ul>
          </div>
          <div className="profile-bio">
            <p>
              <span className="profile-real-name">Elias</span> Diseña crea y
              emprende de la mejor manera 📷✈️🏕️
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Food };
