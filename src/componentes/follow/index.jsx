import React from "react";
import "./follow.css";
const Follow = () => {
  return (
    <>
      <div className="follow">
        <div>
          <div className="boxFollowText">
            <div>
              <img
                src="https://framerusercontent.com/images/0vhyMwtblVaa7PxizFESpz2nQ.svg"
                alt=""
              />
            </div>
            <div>
              <p className="textFollow1">Follow me</p>
            </div>
          </div>
          <div>
            <p className="textFollow2">Online Presence</p>
          </div>
        </div>

        <div className="folloR">
          <div>
            <a
              href=" https://www.instagram.com/elias_fx/"
              className="containerFollow"
              target="blank"
            >
              <div>
                <div>
                  <div className="fondoImg">
                    <img
                      src="https://framerusercontent.com/images/KShAuJGlJT3gKlP3U7qAKXdIw.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="containerTxtInsta">
                <p className="txtInsta">@elias_fx</p>
              </div>
              <div>
                <div className="iconFlechaFollow">
                  <img
                    src="https://framerusercontent.com/images/rbjLs5E9OAFmj40dHBQlVXz5ii4.svg"
                    alt=""
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="folloR">
          <div>
            <a
              href=" https://www.linkedin.com/in/elias-solis/"
              className="containerFollow"
              target="blank"
            >
              <div>
                <div>
                  <div className="fondoImg">
                    <img
                      src="https://framerusercontent.com/images/cKpPPh92KzrcERv5MNOVmrY1h0.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="containerTxtInsta">
                <p className="txtInsta">@Elias Solis</p>
              </div>
              <div>
                <div className="iconFlechaFollow">
                  <img
                    src="https://framerusercontent.com/images/rbjLs5E9OAFmj40dHBQlVXz5ii4.svg"
                    alt=""
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { Follow };
