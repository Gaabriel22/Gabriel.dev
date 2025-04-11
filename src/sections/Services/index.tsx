import "./index.scss"
import { Code, Bug, Cloud, Server, Wrench, Sparkles } from "lucide-react"

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 data-aos="fade-up">Serviços</h2>

        <div className="cards">
          <div className="card" data-aos="zoom-in" data-aos-delay="100">
            <Code size={32} />
            <h3>Frontend</h3>
            <p>
              Criação de interfaces modernas, responsivas e otimizadas com foco
              em experiência do usuário.
            </p>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <Server size={32} />
            <h3>Backend</h3>
            <p>
              Desenvolvimento de APIs RESTful, autenticação, bancos de dados e
              lógica de negócio robusta.
            </p>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="300">
            <Cloud size={32} />
            <h3>Web Completa</h3>
            <p>
              Aplicações full stack completas, do front ao back, com deploy em
              nuvem e integração contínua.
            </p>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="400">
            <Bug size={32} />
            <h3>Correção de Bugs</h3>
            <p>
              Identificação e resolução de falhas críticas ou de comportamento
              inesperado em sistemas web.
            </p>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="500">
            <Wrench size={32} />
            <h3>Melhoria de Código</h3>
            <p>
              Refatoração e otimização de código com foco em performance,
              legibilidade e boas práticas.
            </p>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="600">
            <Sparkles size={32} />
            <h3>Consultoria Técnica</h3>
            <p>
              Ajuda especializada para decisões técnicas, arquitetura de
              sistemas e melhores práticas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
