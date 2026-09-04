import { siteData } from "../data/site"

function Footer() {
  return (
    <footer className="py-8 mt-12 border-t border-slate-900/60 bg-slate-950 text-xs text-slate-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <a href={siteData.github} target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">GitHub</a>
          <a href={siteData.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer