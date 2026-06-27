import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import CompetitiveProgramming from './components/CompetitiveProgramming'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Education />
      <div className="divider" />
      <CompetitiveProgramming />
      <div className="divider" />
      <Certificates />
      <div className="divider" />
      <Contact />
      <Footer />
    </>
  )
}
