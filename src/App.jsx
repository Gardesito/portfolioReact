import { Routes, Route } from "react-router-dom";

import { Works } from "./pages/work";
import { Portfolio } from "./pages/portfolio";
import { Servicios } from "./pages/services";
import { Error } from "./pages/error";
import { Proyectos } from "./componentes/designs/proyectos/index";
import { Ilustration } from "./pages/ilustration/ilustration";
import "./App.css";
import { Design } from "./pages/design";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/work" element={<Works />} />
        <Route path="/services" element={<Servicios />} />
        <Route path="/error" element={<Error />} />
        <Route path="/design" element={<Design />} />
        <Route path="/ilustration" element={<Ilustration />} />

        <Route path="/proyectos/:id" element={<Proyectos />} />
      </Routes>
    </>
  );
}

export default App;
