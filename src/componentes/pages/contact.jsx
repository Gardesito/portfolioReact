import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="boxC">
          <div className="boxC1">
            <div>
              <div>
                <div className="boxCimg">
                  <img
                    src="https://framerusercontent.com/images/RNhprVgPRIRYVpd0baDySQLMk.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="boxCtxt1">
              <h2>Let’s Work Together</h2>
            </div>
          </div>
          <div className="boxCtxt2">
            <p>Let's Make Magic Happen Together!</p>
          </div>
        </div>

        <div className="containerC2">
          <div className="llamada">
            <a href="mail:correo@correo.com">
              <div>
                <div>
                  <img
                    src="https://framerusercontent.com/images/4rZDKWUuqRB6ULj5HSwlfav8tZg.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="textSp2">
                <p>Email Me</p>
              </div>
            </a>
          </div>
        </div>
        <div className="containerC2">
          <div className="llamada">
            <a href="">
              <div>
                <div>
                  <img
                    src="https://framerusercontent.com/images/1i79OSogPnkvzpCkZ3nqdP1UKWY.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="textSp2">
                <p>Schedule a Call</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { Contact };
