import "./index.scss"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>Sobre Mim</h2>
        <p>
          Sou um desenvolvedor focado em criar soluções inovadoras e eficientes,
          com atenção aos detalhes e foco em entregar resultados reais.
        </p>

        <div className="info">
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
