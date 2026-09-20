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

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

emailjs
  .sendForm(
    "service_6v7wbog",
    "template_o2pnpxn",
    e.target,
    "YzJBYp5X2jz8q7P4Q"
  )
  .then(
    (result) => {
      console.log("Mensaje enviado:", result.text);

      clearState();
      setSending(false);
      setStatus("success");
    },
    (error) => {
      console.error("Error al enviar:", error);

      setSending(false);
      setStatus("error");
    }
  );
  };

  /* WhatsApp */
  const whatsappNumber = "5491156564124";

  const whatsappMessage =
    "Hola Pellati IT, quisiera realizar una consulta sobre sus servicios.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

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

                <div className="contact-actions">
                  <button
                    type="submit"
                    className="btn btn-custom btn-lg"
                    disabled={sending}
                  >
                    {sending ? "Enviando..." : "Enviar consulta"}
                  </button>

                  <div className="whatsapp-wrapper">
                    <span className="whatsapp-tooltip">
                      Escribinos por WhatsApp
                    </span>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-button"
                      aria-label="Contactar por WhatsApp"
                    >
                      <i className="fa fa-whatsapp"></i>
                      WhatsApp
                    </a>
                  </div>
                </div>

                {status === "success" && (
                  <p className="form-success">
                    ✓ Consulta enviada correctamente.
                  </p>
                )}

                {status === "error" && (
                  <p className="form-error">
                    No pudimos enviar la consulta. Intentá nuevamente.
                  </p>
                )}
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