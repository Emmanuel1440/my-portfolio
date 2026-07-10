import { siteData } from "../data/site"

function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 pt-20">
        <p className="text-cyan-400 mb-3">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{siteData.name}</h1>
        <h2 className="text-2xl md:text-4xl text-slate-300 font-semibold mb-6">{siteData.role}</h2>
        <p className="max-w-2xl text-slate-400 mb-8">{siteData.tagline}</p>
        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg">
            {siteData.ctaPrimary}
          </a>
          <a href="#contact" className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg">
            {siteData.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero