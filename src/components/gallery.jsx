import React from "react";

export const Gallery = () => {
  const videos = [
    {
      src: "/img/portfolio/01-hardware.mp4",
      title: "Hardware y mantenimiento",
      description: "Revisión, limpieza y mejora de equipos",
    },
    {
      src: "/img/portfolio/02-software.mp4",
      title: "Optimización y software",
      description: "Configuración, rendimiento y puesta a punto",
    },
    {
      src: "/img/portfolio/03-soporte-remoto.mp4",
      title: "Soporte remoto",
      description: "Asistencia técnica rápida y segura",
    },
    {
      src: "/img/portfolio/04-redes.mp4",
      title: "Redes e infraestructura",
      description: "Conectividad y soluciones para empresas",
    },
  ];

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Experiencia</h2>
          <p>
            Soluciones tecnológicas aplicadas a las necesidades de cada cliente.
          </p>
        </div>

        <div className="experience-video-grid">
          {videos.map((video, index) => (
            <div
              className={`experience-video-card experience-card-${index + 1}`}
              key={video.src}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={video.src} type="video/mp4" />
              </video>

              <div className="experience-video-overlay">
                <div className="experience-video-text">
                  <span className="experience-line"></span>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};