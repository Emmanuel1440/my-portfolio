import Reveal from "./Reveal"

const skills = [
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "TAILWIND CSS",
  "NODE.JS",
  "GITHUB ACTIONS",
  "AZURE",
  "UI/UX"
]

function Skills() {
  return (
    <section id="skills" className="py-16 text-[#231b15] relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="bg-white/50 backdrop-blur-xl p-10 border border-white/40 rounded-[0px_40px_0px_40px] shadow-lg">
            <div className="mb-8 flex items-center gap-3">
              <h2 className="text-2xl font-black tracking-tight text-[#231b15]">Tech Stack</h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#231b15]/10 to-transparent ml-4"></div>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 text-xs uppercase font-bold tracking-widest rounded-lg bg-white/80 border border-stone-200 text-[#231b15] hover:text-white hover:bg-[#231b15] transition-all duration-300 shadow-sm cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Skills