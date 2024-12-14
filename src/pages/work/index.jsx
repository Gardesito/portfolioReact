import "./work.css";
import { WorksP } from "../../componentes/workprojects";
import { Header } from "../../componentes/principal/header";
import { Footer } from "../../componentes/principal/footer";
import { Clientes } from "../../componentes/clientes";
import { Numeros } from "../../componentes/numeros";
import { Link } from "react-router-dom";

const workP = [
  {
    name: "FFTECH",
    img: "https://res.cloudinary.com/doo4zye2n/image/upload/v1734131037/ftech_peph4r.png",
    url: "https://heroic-souffle-4e46a6.netlify.app/",
    sub: "Ecommerce (disponible proximamente )",
  },

  {
    name: "Aoni",
    img: "https://res.cloudinary.com/doo4zye2n/image/upload/v1734128853/ahoa_si_r3cbix.png",
    url: "https://heroic-souffle-4e46a6.netlify.app/",
    sub: "Landing-Page (disponible proximamente )",
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
