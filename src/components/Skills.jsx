import { siteData } from "../data/site"

function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {siteData.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills