import "aos/dist/aos.css"
import "./index.scss"

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h1 data-aos="fade-down" data-aos-duration="1000">
          Gabriel Amaral
        </h1>
        <h2 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          Desenvolvedor Full Stack
        </h2>
        <p
          className="subtitle"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          Especialista em aplicações web modernas, performáticas e escaláveis.
        </p>
        <a
          href="#contact"
          className="btn"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          Contato
        </a>
      </div>
    </section>
  )
}

export default Home
