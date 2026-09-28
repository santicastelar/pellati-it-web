import React, { useState } from "react";

export const Header = () => {
  const [leavingTitle, setLeavingTitle] = useState(false);

  const handleMouseLeave = () => {
    setLeavingTitle(true);

    setTimeout(() => {
      setLeavingTitle(false);
    }, 350);
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1
                  className={leavingTitle ? "title-led-exit" : ""}
                  onMouseLeave={handleMouseLeave}
                >
                  Soporte informático
                </h1>

                <p>
                 Soporte técnico y soluciones IT para tu empresa.
                </p>

                <a
                  href="#services"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Conocé nuestros servicios
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};