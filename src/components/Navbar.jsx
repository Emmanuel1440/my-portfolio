import { siteData } from "../data/site"

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur border-b border-slate-800 z-50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-white font-bold text-lg">{siteData.name}</h1>
        <ul className="hidden md:flex gap-6 text-slate-300">
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar