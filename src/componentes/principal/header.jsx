import { Link, useLocation } from "react-router-dom";

import "./header.css";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <div className="header">
        <div className="containerHeader">
          <Link to="/">
            <a className={location.pathname === "/" ? "active" : ""}>
              <div>
                <img
                  src="https://framerusercontent.com/images/UxtYXPTmrBuqEzchBHNbgjpLc.svg"
                  alt=""
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
            <a className={location.pathname === "/work" ? "active" : ""}>
              <div>
                <img
                  src="https://framerusercontent.com/images/CTXgMN1vdi3OdrtEdeyNoVBHvPo.svg"
                  alt=""
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
            <a className={location.pathname === "/services" ? "active" : ""}>
              <div>
                <img
                  src="https://framerusercontent.com/images/No8gGFl2W11B70rCtgMzDUosRs.svg"
                  alt=""
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
