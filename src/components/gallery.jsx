import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
      <h2>Experiencia</h2>
<p>
  Soluciones tecnológicas aplicadas a las necesidades de cada cliente.
</p>
        </div>

        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((item, i) => (
                  <div
                    key={`${item.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
        <Image
  title={item.title}
  smallImage={item.smallImage}
/>
                  </div>
                ))
              : "Cargando..."}
          </div>
        </div>
      </div>
    </div>
  );
};