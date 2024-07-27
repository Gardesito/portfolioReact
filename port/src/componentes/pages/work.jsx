import React from "react";
import "./work.css";
import { WorksP } from "./worksproject";
import { Header } from "../principal/header";
import { Footer } from "../principal/footer";
import { Clientes } from "./clientes";

import { Numeros } from "./numeros";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <>
      <div className="work">
        <Header />

        <div className="containerWorks">

<div className="btnWks">
<div > <Link to="/work"> <a href="" className="btnFondo"><div> <p>Developer</p></div></a></Link>
  </div>

 <div > <Link to="/design"> <a href="" className="btnFondo"><div> <p> Designer</p> </div>
 </a> </Link></div>
</div>


          <div>
            <div class="clientesTxt">
              <div></div>
              <div>
                <p class="textC1">My clientess</p>
              </div>
            </div>
            <div class="clientesTxt">
              <p class="textC2">Satisfied Partners</p>
            </div>
          </div>
          <WorksP />
          <WorksP />
          <WorksP />
          <WorksP />
          <WorksP />
        </div>
        <Clientes />

        <Numeros />

        <Footer />
      </div>
    </>
  );
};

export { Works };
