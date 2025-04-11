import "./styles/App.scss"
import AOS from "aos"

import { useEffect } from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"

// Seções da página
import Home from "./sections/Home"
import About from "./sections/About"
import Education from "./sections/Education"
import Services from "./sections/Services"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])
  
  return (
    <>
      <Header />

      <main>
        <Home />
        <About />
        <Education />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
