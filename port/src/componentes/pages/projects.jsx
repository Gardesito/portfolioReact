import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <div class="containerClientes">
          <div className="cc1">
            <div class="clientesTxt">
              <div></div>
              <div>
                <p class="textC1">Projects</p>
              </div>
            </div>
            <div class="clientesTxt">
              <p class="textC2">Work Gallery</p>
            </div>
          </div>
          <div>
            <div>
              <div class="logos">
                <div class="logos-slide">
                  <img
                    class="imgP"
                    src="https://framerusercontent.com/images/h0bHFfufoXohXyRRUZq1vePOgM.png"
                  />
                  <img
                    class="imgP"
                    src="https://framerusercontent.com/images/h0bHFfufoXohXyRRUZq1vePOgM.png"
                  />
                  <img
                    class="imgP"
                    src="https://framerusercontent.com/images/h0bHFfufoXohXyRRUZq1vePOgM.png"
                  />
                  <img
                    class="imgP"
                    src="https://framerusercontent.com/images/h0bHFfufoXohXyRRUZq1vePOgM.png"
                  />
                  <img
                    class="imgP"
                    src="https://framerusercontent.com/images/h0bHFfufoXohXyRRUZq1vePOgM.png"
                  />
                  <img
                    class="imgP"
                    src="https://framerusercontent.com/images/h0bHFfufoXohXyRRUZq1vePOgM.png"
                  />
                  <img
                    class="imgP"
                    src="https://framerusercontent.com/images/h0bHFfufoXohXyRRUZq1vePOgM.png"
                  />
                  <img
                    class="imgP"
                    src="https://framerusercontent.com/images/h0bHFfufoXohXyRRUZq1vePOgM.png"
                  />
                </div>
                <div class="btnPro">
                  <div class="btnpro2">
                    <Link to="work">
                      <a href="">
                        <div class="containerBtn">
                          <div>
                            <p class="txtPro">View Workss</p>
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
