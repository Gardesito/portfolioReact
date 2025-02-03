import "./projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <div className="containerClientes">
          <div className="cc1">
            <div className="clientesTxt">
              <div className="imgInfo">
                {" "}
                <img
                  src="https://framerusercontent.com/images/pWnyWbSLaOXRIu2gmjo18aL9N0.svg"
                  alt=""
                />
              </div>
              <div>
                <p className="textC1">Projects</p>
              </div>
            </div>
            <div className="clientesTxt">
              <p className="textC2">Work Gallery</p>
            </div>
          </div>
          <div>
            <div>
              <div class="slider pro1">
                <div class="slide-track pro3">
                  <div class="slide">
                    <img
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1738603382/Sin_t%C3%ADtulo-1_tqloct.png"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1723469147/1_v234e3.png"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1724352335/res_m8mpky.png"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1730238772/asdxc_cufzr9.jpg"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1730238772/cabildo_abierto_goghej.jpg"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1724352335/res_m8mpky.png"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1738603382/Sin_t%C3%ADtulo-1_tqloct.png"
                      alt=""
                    />
                  </div>

                  <div class="slide">
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1723469147/1_v234e3.png"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1724352335/res_m8mpky.png"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1738603382/Sin_t%C3%ADtulo-1_tqloct.png"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1723469147/1_v234e3.png"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1724352335/res_m8mpky.png"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://res.cloudinary.com/doo4zye2n/image/upload/v1723469147/1_v234e3.png"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      src="https://res.cloudinary.com/dtmziqubb/image/upload/v1738603382/Sin_t%C3%ADtulo-1_tqloct.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="btnPro">
                  <div className="btnpro2">
                    <Link to="/work">
                      <a href="">
                        <div className="containerBtn">
                          <div>
                            <p className="txtPro">View Workss</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Projects };
