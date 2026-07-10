import { siteData } from "../data/site"

function Footer() {
  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <a href={siteData.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            GitHub
          </a>
          <a href={siteData.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer