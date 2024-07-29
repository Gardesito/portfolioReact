import React from "react";
import "./numeros.css";

const Numeros = () => {
  return (
    <>
      <div className="numeros">
        <div className="containerNum">
          <div className="containerNum2">
            <div className="NumBox">
              <div className="numP">
                <p>56</p>
              </div>
              <div></div>
            </div>
            <div className="projectsNum">
              <div></div>
              <div className="txtN">
                <p>Prjects</p>
              </div>
            </div>
          </div>
        </div>
        <div className="containerNum">
          <div className="containerNum2">
            <div className="NumBox">
              <div className="numP">
                <p>5</p>
              </div>
              <div></div>
            </div>
            <div className="projectsNum">
              <div></div>
              <div className="txtN">
                <p>Clientes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="containerNum">
          <div className="containerNum2">
            <div className="NumBox">
              <div className="numP">
                <p>3</p>
              </div>
              <div>
                <p></p>
              </div>
            </div>
            <div className="projectsNum">
              <div></div>
              <div className="txtN">
                <p>Years experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="containerNum">
          <div className="containerNum2">
            <div className="NumBox">
              <div className="numP">
                <p>CV</p>
              </div>
              <div></div>
            </div>
            <div className="projectsNum">
              <div></div>
              <a href="" download="CV">
                <div className="txtN cv">
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
