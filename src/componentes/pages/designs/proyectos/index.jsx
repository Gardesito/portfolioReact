import React from "react";
import { proyectos } from "../../../../data";

import { useParams } from "react-router-dom";

const Proyectos = () => {
  let { id } = useParams();
  const proyecto = proyectos.find((p) => p.id == id);
  return (
    <>
      <h1>{proyecto.title}</h1>

      <div className="gallery1">
        {proyecto.imageneScroll.map((proyecto) => (
          <div key={proyecto.id} className="item">
            <a href="/">
              <img src={proyecto.url} alt="image" />
              <h3>Photographer Name</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export { Proyectos };
