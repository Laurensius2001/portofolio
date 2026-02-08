import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import './App.css'

function App() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Services />
        <Education />
        <Experience />
        <Skills />
        <Projects />
      </div>

      <div className="side-built">
        34+ PRE-BUILT SITES
      </div>

      <div className="messenger-bubble">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.453 5.503 3.735 7.152V22l3.43-1.884c.854.238 1.764.366 2.705.366 5.523 0 10-4.145 10-9.259C21.87 6.145 17.393 2 12 2zm.87 12.87l-2.58-2.75-5.06 2.75 5.56-5.9 2.65 2.82 4.93-2.82-5.5 5.9z" /></svg>
      </div>

      <footer className="container" style={{ padding: '40px 0', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '12px' }}>
        <p>© 2026 VirTuo. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App
