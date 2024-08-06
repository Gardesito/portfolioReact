import { Routes, Route } from "react-router-dom";

import { Header } from "./componentes/principal/header.jsx";
import { Perfil } from "./componentes/pages/perfil.jsx";
import { Works } from "./componentes/pages/work.jsx";
import { Clientes } from "./componentes/pages/clientes.jsx";
import { Numeros } from "./componentes/pages/numeros.jsx";
import { Projects } from "./componentes/pages/projects.jsx";
import { Footer } from "./componentes/principal/footer.jsx";
import { Portfolio } from "./componentes/portofolio/portfolio";
import { Design } from "./componentes/pages/design.jsx";
import { Food } from "./componentes/pages/designs/fuua/fuua.jsx";
import { Follow } from "./componentes/pages/follow.jsx";
import { Servicios } from "./componentes/pages/servicios.jsx";
import { Contact } from "./componentes/pages/contact.jsx";

import { Error } from "./componentes/pages/error.jsx";

import { Proyectos } from "./componentes/pages/designs/proyectos/index.jsx";

import "./App.css";
import { Complementos } from "./componentes/pages/complementos.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/header" element={<Header />} />
        <Route path="/work" element={<Works />} />
        <Route path="/numeros" element={<Numeros />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/design" element={<Design />} />
        <Route path="/food" element={<Food />} />
        <Route path="/services" element={<Servicios />} />
        <Route path="/follow" element={<Follow />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
        <Route path="/complementos" element={<Complementos />} />

        <Route path="/proyectos/:id" element={<Proyectos />} />

        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
