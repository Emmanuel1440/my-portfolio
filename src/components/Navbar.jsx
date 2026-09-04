import { siteData } from "../data/site"

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#faf7f2]/30 backdrop-blur-xl z-50 transition-all duration-300">
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="text-stone-950 font-black tracking-tight text-xl hover:text-rose-600 transition duration-300 cursor-pointer">
          {siteData.name}.
        </h1>
        <ul className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-stone-600">
          <li><a href="#about" className="hover:text-rose-500 transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-purple-500 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-amber-500 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-sky-500 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar