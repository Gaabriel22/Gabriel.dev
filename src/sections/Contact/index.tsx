import "./index.scss"
import { SiGithub, SiLinkedin, SiGmail, SiWhatsapp } from "react-icons/si"

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 data-aos="fade-up">Contato</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Fique à vontade para me chamar em qualquer uma das redes abaixo 👇
        </p>
        <div className="contact-links">
          <a
            href="https://github.com/Gaabriel22"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <SiGithub size={24} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gabrielamaral22"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <SiLinkedin size={24} />
            LinkedIn
          </a>

          <a
            href="mailto:gabrielvieira2205@gmail.com"
            className="icon-link"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <SiGmail size={24} />
            Email
          </a>

          <a
            href="https://wa.me/5511987164669"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <SiWhatsapp size={24} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
