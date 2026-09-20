import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clearState = () => {
    setState({ ...initialState });
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

const handleMouseLeave = (e) => {
  e.currentTarget.style.setProperty("--x", "18%");
  e.currentTarget.style.setProperty("--y", "50%");
};

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, message);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
       <h2 className="contact-glow">
  Contactanos
</h2>

                <p>
                  Contanos qué necesitás y nos pondremos en contacto con vos.
                </p>
              </div>

              <form name="contactForm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nombre"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Correo electrónico"
                        required
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar consulta
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Información de contacto</h3>

              {props.data?.address && (
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Ubicación
                  </span>
                  {props.data.address}
                </p>
              )}
            </div>

            {props.data?.phone && (
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Teléfono
                  </span>
                  {props.data.phone}
                </p>
              </div>
            )}

            {props.data?.email && (
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>
                  {props.data.email}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; {new Date().getFullYear()} Pellati IT. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </div>
  );
};