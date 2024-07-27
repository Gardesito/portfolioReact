import React from "react";
import "./numeros.css";

const Numeros = () => {
  return (
    <>
      <div class="numeros">
        <div class="containerNum">
          <div class="containerNum2">
            <div class="NumBox">
              <div class="numP">
                <p>56</p>
              </div>
              <div></div>
            </div>
            <div class="projectsNum">
              <div></div>
              <div class="txtN">
                <p>Prjects</p>
              </div>
            </div>
          </div>
        </div>
        <div class="containerNum">
          <div class="containerNum2">
            <div class="NumBox">
              <div class="numP">
                <p>5</p>
              </div>
              <div></div>
            </div>
            <div class="projectsNum">
              <div></div>
              <div class="txtN">
                <p>Clientes</p>
              </div>
            </div>
          </div>
        </div>
        <div class="containerNum">
          <div class="containerNum2">
            <div class="NumBox">
              <div class="numP">
                <p>3</p>
              </div>
              <div>
                <p></p>
              </div>
            </div>
            <div class="projectsNum">
              <div></div>
              <div class="txtN">
                <p>Years experience</p>
              </div>
            </div>
          </div>
        </div>

        <div class="containerNum">
          <div class="containerNum2">
            <div class="NumBox">
              <div class="numP">
                <p>CV</p>
              </div>
              <div></div>
            </div>
            <div class="projectsNum">
              <div></div>
              <a href="" download="CV">
                <div class="txtN cv">
                  <p>Dowland</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Numeros };
