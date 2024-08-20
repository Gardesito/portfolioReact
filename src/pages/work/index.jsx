import "./work.css";
import { WorksP } from "../../componentes/workprojects";
import { Header } from "../../componentes/principal/header";
import { Footer } from "../../componentes/principal/footer";
import { Clientes } from "../../componentes/clientes";
import { Numeros } from "../../componentes/numeros";
import { Link } from "react-router-dom";

const workP = [
  {
    name: "Fuua",
    img: "https://res.cloudinary.com/doo4zye2n/image/upload/v1723587639/para_fuua_mru9hg.png",
    url: "https://heroic-souffle-4e46a6.netlify.app/",
    sub: "Ecommerce",
  },

  {
    name: "gym",
    img: "https://res.cloudinary.com/doo4zye2n/image/upload/v1717441193/cld-sample-4.jpg",
    url: "https://heroic-souffle-4e46a6.netlify.app/",
    sub: "Ecommerce",
  },
];

const Works = () => {
  return (
    <>
      <div className="portfolio">
        <div className="containerport">
          <div className="boxPort">
            <Header />

            <div className="containerWorks">
              <div className="btnWks">
                <div>
                  <Link to="/work">
                    <a href="" className="btnFondo">
                      <div>
                        <p>Developer</p>
                      </div>
                    </a>
                  </Link>
                </div>

                <div>
                  <Link to="/design">
                    <a href="" className="btnFondo">
                      <div>
                        <p> Designer</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>

              <div>
                <div className="clientesTxt">
                  <div className=" imgInfo">
                    {" "}
                    <img
                      src="https://framerusercontent.com/images/lE0OpV0YSJdyz68uieRVwXtcr3k.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="textC1">My clientess</p>
                  </div>
                </div>
                <div className="clientesTxt">
                  <p className="textC2">Satisfied Partners</p>
                </div>
              </div>

              {workP.map((work, index) => (
                <WorksP work={work} key={index} />
              ))}
            </div>

            <Clientes />

            <Numeros />

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export { Works };
