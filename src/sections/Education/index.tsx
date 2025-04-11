import "./index.scss"

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="container">
        <h2>Formação</h2>

        <div className="cards">
          <div className="card">
            <span className="period">2022 - 2023</span>
            <h3>Graduação em Análise e Desenvolvimento de Sistemas</h3>
            <h4>UNIP</h4>
            <p>
              Formação voltada para o desenvolvimento de software, gestão de
              projetos de TI, análise de sistemas, modelagem de dados,
              consultoria em tecnologia da informação e soluções baseadas em
              nuvem.
            </p>
          </div>

          <div className="card">
            <span className="period">2023 - 2024</span>
            <h3>Desenvolvimento Full Stack JavaScript</h3>
            <h4>OneBitCode</h4>
            <p>
              Formação intensiva com foco em desenvolvimento web utilizando
              tecnologias modernas como HTML5, CSS3, JavaScript, TypeScript,
              React, Node.js, Next.js, Express, SQL e MongoDB.
            </p>
          </div>

          <div className="card">
            <span className="period">03 / 2025 - 04 / 2025</span>
            <h3>Formação IA para Devs</h3>
            <h4>OneBitCode</h4>
            <p>
              Curso voltado ao domínio de ferramentas de inteligência artificial
              para programadores, com foco em ChatGPT, GitHub Copilot,
              engenharia de prompts e integração da IA no fluxo de
              desenvolvimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
