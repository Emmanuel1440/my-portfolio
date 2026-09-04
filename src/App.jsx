import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="bg-slate-950/40 min-h-screen relative overflow-hidden selection:bg-violet-500/30 selection:text-violet-200">
      <Navbar />
      <div className="relative z-10 space-y-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

export default App