import React from "react";
import "./skills.css";
const Skills = () => {
  return (
    <>
      <div className="clientes">
        <div className="containerClientes">
          <div>
            <div className="clientesTxt">
              <div className="imgInfo">
                <img
                  src="https://framerusercontent.com/images/DA2ntLBrnMTMATZ9YGNSceTqhY.svg"
                  alt=""
                />
              </div>
              <div>
                <p className="textC1">My Skills</p>
              </div>
            </div>
            <div className="clientesTxt">
              <p className="textC2">Satisfied Partners</p>
            </div>
          </div>
          <div>
            <div>
              <div class="slider">
                <div className="skill">
                  <div className="img-skill">
                    <img
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1733969979/klipartz.com_2_xpju2e.png"
                      alt=""
                    />
                  </div>
                  <div className="img-skill">
                    <img
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1733970624/klipartz.com_4_lckhjf.png"
                      alt=""
                    />
                  </div>
                  <div className="img-skill">
                    <img
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1733970955/klipartz.com_5_mdnxfk.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Skills };
