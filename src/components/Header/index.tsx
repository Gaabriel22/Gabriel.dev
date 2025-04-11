import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react" // Ícones
import "./index.scss"

const sections = ["home", "about", "education", "services", "projects", "contact"]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const { offsetTop, offsetHeight } = el
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", onScroll)
    onScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev)
  }

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  const renderLink = (section: string) => (
    <li key={section}>
      <a
        href={`#${section}`}
        className={activeSection === section ? "active" : ""}
        onClick={handleLinkClick}
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
  )

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="container">
        <h1 className="logo">Gabriel.dev</h1>

        {/* Desktop links */}
        <ul className="nav-links">{sections.map(renderLink)}</ul>

        {/* Botão do menu mobile */}
        <button className="menu-toggle" onClick={handleMenuToggle}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu dropdown mobile */}
        {menuOpen && (
          <ul className="dropdown-menu">{sections.map(renderLink)}</ul>
        )}
      </nav>
    </header>
  )
}

export default Header
