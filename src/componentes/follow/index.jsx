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
              href=" https://www.behance.net/elias-solis"
              className="containerFollow"
              target="blank"
            >
              <div>
                <div>
                  <div className="fondoImg">
                    <svg
                      width="23"
                      height="15"
                      viewBox="0 0 23 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.43302 7.14413C9.43302 7.14413 11.5423 6.96836 11.5423 4.50758C11.5423 2.0468 9.84315 0.875 7.67532 0.875H0.46875V14.7022H7.67532C7.67532 14.7022 12.0696 14.8194 12.0696 10.6009C12.011 10.6009 12.2453 7.14413 9.43302 7.14413ZM3.63261 3.33578H7.67532C7.67532 3.33578 8.67135 3.33578 8.67135 4.80053C8.67135 6.26528 8.08545 6.44105 7.44096 6.44105H3.6912V3.33578H3.63261ZM7.44096 12.1829H3.63261V8.4917H7.67532C7.67532 8.4917 9.14007 8.4917 9.14007 10.3666C9.08148 12.0071 8.02686 12.1829 7.44096 12.1829Z"
                        fill="#F1F2F2"
                      />
                      <path
                        d="M20.6237 1.69525H14.9405V3.39436H20.6237V1.69525Z"
                        fill="#F1F2F2"
                      />
                      <path
                        d="M17.87 4.39038C12.5383 4.39038 12.5383 9.72207 12.5383 9.72207C12.5383 9.72207 12.1867 14.9952 17.87 14.9952C17.87 14.9952 22.6158 15.2881 22.6158 11.304H20.155C20.155 11.304 20.2136 12.7687 17.9286 12.7687C17.9286 12.7687 15.4678 12.9445 15.4678 10.3666H22.6158C22.6744 10.3666 23.4946 4.39038 17.87 4.39038ZM15.5264 8.49168C15.5264 8.49168 15.8193 6.38244 17.9286 6.38244C20.0378 6.38244 20.0378 8.49168 20.0378 8.49168H15.5264Z"
                        fill="#F1F2F2"
                      />
                    </svg>

                    {/* <img
                      src="https://framerusercontent.com/images/KShAuJGlJT3gKlP3U7qAKXdIw.svg"
                      alt=""
                    /> */}
                  </div>
                </div>
              </div>
              <div className="containerTxtInsta">
                <p className="txtInsta">Elias Design</p>
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
