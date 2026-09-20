import React from "react";

export const Services = (props) => {
  const services = props.data || [];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros servicios</h2>
          <p>
            Soluciones informáticas pensadas para mantener tu infraestructura
            funcionando de forma eficiente, segura y confiable.
          </p>
        </div>

        <div className="row">
          {services.slice(0, 3).map((service, i) => (
            <div key={`${service.name}-${i}`} className="col-md-4">
              <i className={service.icon}></i>

              <div className="service-desc">
                <h3>{service.name}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          {services.slice(3, 6).map((service, i) => (
            <div key={`${service.name}-${i}`} className="col-md-4">
              <i className={service.icon}></i>

              <div className="service-desc">
                <h3>{service.name}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};