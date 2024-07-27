import React from "react";
import "./fuua.css";
const Food = () => {
  return (
    <>
      <div class="container">
        <div class="header">
          <h1 class="logo">Coleccion de Comida</h1>
        </div>
        <div class="gallery1">
          <div class="item">
            <a href="/">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562452/Sin-t%C3%ADtulo-2-_16_-_8__01_jxaoky.jpg"
                alt="image"
              />
              <h3>Photographer Name</h3>
            </a>
          </div>
          <div class="item">
            <a href="/">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562452/Sin-t%C3%ADtulo-2-_16_-_8__05_bsrgyj.jpg"
                alt="image"
              />
              <h3>Photographer Name</h3>
            </a>
          </div>
          <div class="item">
            <a href="">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562452/Sin-t%C3%ADtulo-2-_16_-_8__06_v2msiq.jpg"
                alt="image"
              />
              <h3>Photographer Name</h3>
            </a>
          </div>
          <div class="item">
            <a href="">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562452/Sin-t%C3%ADtulo-2-_16_-_8__04_zix0t0.jpg"
                alt="image"
              />
              <h3>Photographer Name</h3>
            </a>
          </div>
          <div class="item">
            <a href="">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715562452/Sin-t%C3%ADtulo-2-_16_-_8__04_zix0t0.jpg"
                alt="image"
              />
              <h3>Photographer Name</h3>
            </a>
          </div>
          <div class="item">
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

          <div class="profile-user-settings">
            <h1 class="profile-user-name">elias_solis</h1>

            <button class="btn profile-edit-btn">Editar Perfil</button>

            <button
              class="btn profile-settings-btn"
              aria-label="profile settings"
            >
              {/*         <i class="fas fa-cog" aria-hidden="true" style="color: white;"></i>
               */}{" "}
            </button>
          </div>

          <div class="profile-stats">
            <ul>
              <li>
                <span class="profile-stat-count">6</span> publicasiones
              </li>
              <li>
                <span class="profile-stat-count">21,1 mil</span> seguidores
              </li>
              <li>
                <span class="profile-stat-count">206</span> seguidos
              </li>
            </ul>
          </div>
          <div class="profile-bio">
            <p>
              <span class="profile-real-name">Elias</span> Diseña crea y
              emprende de la mejor manera 📷✈️🏕️
            </p>
          </div>
        </div>


        
      </div>
    </>
  );
};

export { Food };
