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
              <div className="mas">
                <p>+</p>
              </div>
            </div>
            <div className="projectsNum">
              <div className="txtN">
                <div>
                  <img
                    src="https://framerusercontent.com/images/TtE1Ucrq3H5xVwYxH1lG8IiWM.svg"
                    alt=""
                  />
                </div>
                <p>Projects</p>
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
              <div className="mas">
                <p>+</p>
              </div>
            </div>
            <div className="projectsNum">
              <div className="txtN">
                <div>
                  {" "}
                  <img
                    src="https://framerusercontent.com/images/3g2Cba5ZQlYmKnSN67kVjWlItTk.svg"
                    alt=""
                  />
                </div>

                <p>Happy Clients</p>
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
              <div className="mas">
                <p>+</p>
              </div>
            </div>
            <div className="projectsNum">
              <div className="txtN">
                <div>
                  {" "}
                  <img
                    src="https://framerusercontent.com/images/BwWdTTsCmCvWVRIwVB2vLrPGY.svg"
                    alt=""
                  />
                </div>

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
              {/* <a href="" download="CV">
                <div className="txtN cv">
                  <p>Dowland</p>
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Numeros };
