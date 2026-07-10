import { siteData } from "../data/site"

function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {siteData.projects.map((project) => (
            <article
              key={project.title}
              className="p-6 rounded-xl bg-slate-800 border border-slate-700"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-full bg-slate-700 text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects