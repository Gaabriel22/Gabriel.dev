import "./index.scss"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 data-aos="fade-up">Sobre Mim</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Sou um desenvolvedor focado em criar soluções inovadoras e eficientes,
          com atenção aos detalhes e foco em entregar resultados reais.
        </p>

        <div className="info" data-aos="fade-up" data-aos-delay="400">
          <ul>
            <li>
              <strong>Nome:</strong> Gabriel Amaral
            </li>
            <li>
              <strong>Endereço:</strong> São Paulo - SP
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:gabrielvieira2205@gmail.com">
                gabrielvieira2205@gmail.com
              </a>
            </li>
            <li>
              <strong>Telefone:</strong>{" "}
              <a href="tel:+5511987164669">+55 11 98716-4669</a>
            </li>
          </ul>
        </div>

        <a
          data-aos="zoom-in"
          data-aos-delay="100"
          href="/docs/CV-Gabriel-Amaral.pdf"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </section>
  )
}

export default About
