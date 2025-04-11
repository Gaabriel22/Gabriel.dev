import { useEffect, useState } from "react"
import "./index.scss"

const sections = [
  "home",
  "about",
  "education",
  "services",
  "projects",
  "contact",
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const { offsetTop, offsetHeight } = el
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", onScroll)
    onScroll() // inicializa no load

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="container">
        <h1 className="logo">Gabriel.dev</h1>
        <ul className="nav-links">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? "active" : ""}
              >
                {section === "home"
                  ? "Início"
                  : section === "about"
                  ? "Sobre"
                  : section === "education"
                  ? "Formação"
                  : section === "services"
                  ? "Serviços"
                  : section === "projects"
                  ? "Projetos"
                  : "Contato"}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
