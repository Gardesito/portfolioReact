import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <div className="containerF">
            <div>
              <a href="">
                <p className="txtF">Home</p>
              </a>
            </div>
            <div>
              <a href="">
                <p className="txtF">Works</p>
              </a>
            </div>
            <div>
              <a href="">
                <p className="txtF">Services</p>
              </a>
            </div>
            <div>
              <a href="">
                <p className="txtF">404</p>
              </a>
            </div>
          </div>
        </div>
        <div className="infoFooter">
          <p className="txtF">Created by Elias Solis</p>
        </div>

        <div className="infoFooter">
          <div>
            <p className="txtF">@2024 All Rights Reservced</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Footer };
