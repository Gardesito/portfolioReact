import "./error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="error">
        <div className="bg-purple">
          <div className="stars">
            <div className="custom-navbar">
              <div className="brand-logo">
                <h1>Elias Solis</h1>
                {/* <img
                  src="http://salehriaz.com/404Page/img/logo.svg"
                  width="80px"
                /> */}
              </div>
            </div>
            <div className="central-body">
              <img
                className="image-404"
                src="http://salehriaz.com/404Page/img/404.svg"
                width="300px"
              />
              <Link to="/">
                <a
                  href="http://salehriaz.com/404Page/404.html"
                  className="btn-go-home"
                  target="_blank"
                >
                  GO BACK HOME
                </a>
              </Link>
            </div>
            <div className="objects">
              <img
                className="object_rocket"
                src="http://salehriaz.com/404Page/img/rocket.svg"
                width="40px"
              />
              <div className="earth-moon">
                <img
                  className="object_earth"
                  src="http://salehriaz.com/404Page/img/earth.svg"
                  width="100px"
                />
                <img
                  className="object_moon"
                  src="http://salehriaz.com/404Page/img/moon.svg"
                  width="80px"
                />
              </div>
              <div className="box_astronaut">
                <img
                  className="object_astronaut"
                  src="http://salehriaz.com/404Page/img/astronaut.svg"
                  width="140px"
                />
              </div>
            </div>
            <div className="glowing_stars">
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Error };
