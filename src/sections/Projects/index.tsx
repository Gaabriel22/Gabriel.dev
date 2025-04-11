import "./index.scss"
import GitHubIcon from "../../components/icons/GitHubIcon"

const projects = [
  {
    name: "Robo SEFAZ",
    description:
      "Bot que automatiza o processo de contagem de cupons fiscais no SEFAZ.",
    link: "https://github.com/Gaabriel22/robo-sefaz",
  },
  {
    name: "Review Watcher App",
    description: "App para monitoramento de reviews de negócios em tempo real.",
    link: "https://github.com/Gaabriel22/ReviewWatcherApp",
  },
  {
    name: "Product Description AI",
    description:
      "Geração automática de descrições de produtos usando OpenAI e Bluesoft.",
    link: "https://github.com/Gaabriel22/ProductDescriptionAI",
  },
  {
    name: "Jobs API",
    description:
      "API RESTful para cadastro e gerenciamento de empresas, vagas e candidatos.",
    link: "https://github.com/Gaabriel22/jobs-api",
  },
]

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projetos</h2>

        <div className="cards">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                <GitHubIcon />
                Ver no GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
