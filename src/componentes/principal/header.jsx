import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="containerHeader">
          <Link to="/">
            <a href="">
              <div>
                <img
                  src="https://framerusercontent.com/images/UxtYXPTmrBuqEzchBHNbgjpLc.svg"
                  alt=""
                  sizes="20px"
                  className="iconHeder"
                />
              </div>
              <div>
                <p>About</p>
              </div>
            </a>
          </Link>
        </div>
        <div className="containerHeader">
          <Link to="/work">
            <a href="">
              <div>
                <img
                  src="https://framerusercontent.com/images/CTXgMN1vdi3OdrtEdeyNoVBHvPo.svg"
                  alt=""
                  sizes="20px"
                  className="iconHeder"
                />
              </div>
              <div>
                <p>Work</p>
              </div>
            </a>
          </Link>
        </div>

        <div className="containerHeader">
          <Link to="/services">
            <a href="">
              <div>
                <img
                  src="https://framerusercontent.com/images/No8gGFl2W11B70rCtgMzDUosRs.svg"
                  alt=""
                  sizes="20px"
                  className="iconHeder"
                />
              </div>
              <div>
                <p>Services</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export { Header };
