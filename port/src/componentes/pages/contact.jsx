import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <div class="contact">
        <div class="boxC">
          <div class="boxC1">
            <div>
              <div>
                <div class="boxCimg">
                  <img
                    src="https://framerusercontent.com/images/RNhprVgPRIRYVpd0baDySQLMk.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="boxCtxt1">
              <h2>Let’s Work Together</h2>
            </div>
          </div>
          <div class="boxCtxt2">
            <p>Let's Make Magic Happen Together!</p>
          </div>
        </div>

        <div class="containerC2">
          <div class="llamada">
            <a href="">
              <div>
                <div>
                  <img
                    src="https://framerusercontent.com/images/4rZDKWUuqRB6ULj5HSwlfav8tZg.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="textSp2">
                <p>Email Me</p>
              </div>
            </a>
          </div>
        </div>
        <div class="containerC2">
          <div class="llamada">
            <a href="">
              <div>
                <div>
                  <img
                    src="https://framerusercontent.com/images/1i79OSogPnkvzpCkZ3nqdP1UKWY.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="textSp2">
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
