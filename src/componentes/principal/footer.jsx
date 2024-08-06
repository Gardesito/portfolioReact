import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <div className="containerF">
            <div>
              <Link to="/">
                <a>
                  <p className="txtF">Home</p>
                </a>
              </Link>
            </div>
            <div>
              <Link to="/work">
                <a>
                  <p className="txtF">Works</p>
                </a>
              </Link>
            </div>
            <div>
              <Link to="/services">
                <a>
                  <p className="txtF">Services</p>
                </a>
              </Link>
            </div>
            <div>
              <Link to="/error">
                <a href="">
                  <p className="txtF">404</p>
                </a>
              </Link>
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
