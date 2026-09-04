import { useState } from "react"
import Reveal from "./Reveal"
import { FiGithub, FiPlay, FiX, FiLayers } from "react-icons/fi"

const projects = [
  {
    id: "ai-spam",
    title: "AI-Based Email Spam Classification System",
    description:
      "A machine learning-powered web application that automatically classifies Gmail emails as spam or legitimate. Built using Flask, Logistic Regression, TF-IDF vectorization, and the Gmail API with OAuth 2.0 authentication. The system periodically scans unread emails and presents classification results through an interactive dashboard.",
    tech: ["PYTHON", "FLASK", "SCIKIT-LEARN", "TF-IDF", "LOGISTIC REGRESSION", "GMAIL API", "SQLITE"],
    github: "https://github.com/Emmanuel1440/AI-Email-Spam-Classification-System",
    image: "/spam.png",         // public/spam-screenshot.jpg
    videoSrc: "/video/spam-demo.mp4",      // public/video/spam-demo.mp4
    badges: ["Featured", "Machine Learning", "Academic Project"],
    stats: { items: 7, focal: "Machine Learning", detail: "OAuth Authentication" },
    overview: "This system integrates directly with user accounts via OAuth 2.0, securely scanning incoming data pipelines and transforming unstructured natural language text streams into classification tensors in real-time.",
    challenges: "Handling sparse matrix conversions efficiently on high-volume background jobs and safely updating authorization tokens without terminating user socket sessions."
  },
  {
    id: "tisa",
    title: "TISA Security Company Website",
    description:
      "A modern, responsive corporate website developed for Transitial International Security Africa Ltd. Features service pages, careers portal, contact forms, gallery, SEO optimization, responsive UI, and a professional company profile built using Laravel and React.",
    tech: ["LARAVEL", "REACT", "MYSQL", "TAILWIND CSS", "PHP", "VITE"],
    github: "https://github.com/Emmanuel1440/tisa-security",
    image: "/tisa.png",         // public/tisa-screenshot.jpg
    videoSrc: "/video/tisa-demo.mp4",      // public/video/tisa-demo.mp4
    badges: ["Featured", "Client Project", "Full Stack"],
    stats: { items: 6, focal: "Full Stack architecture", detail: "SEO & Form Management" },
    overview: "A highly dynamic enterprise informational portal tailor-made to handle public queries, dynamic careers routing, and modular component architecture.",
    challenges: "Synchronizing modern React components cleanly inside state-tracked Laravel Blade layouts without adding unwanted bundle load times."
  },
  {
    id: "chat-app",
    title: "Real-Time Chat Application",
    description:
      "A secure real-time messaging platform supporting instant communication between authenticated users. Built with WebSockets, JWT authentication, PostgreSQL, and Node.js for scalable live messaging.",
    tech: ["NODE.JS", "WEBSOCKETS", "JWT", "POSTGRESQL", "EXPRESS"],
    github: "https://github.com/Emmanuel1440/Chat--App-server",
    image: "/chat.png",         
    videoSrc: "/video/chat-demo.mp4",      // public/video/chat-demo.mp4
    badges: ["Web Application", "Real-Time"],
    stats: { items: 5, focal: "WebSocket Pipeline", detail: "JWT Auth Layer" },
    overview: "A lightweight chat solution configured to establish concurrent bidirectional node sockets for zero-latency cross-client message execution.",
    challenges: "Preventing connection dropping over stateless headers and engineering memory-efficient connection maps for active sockets."
  },
  {
    id: "cargo",
    title: "Cargo Shipping Management System",
    description:
      "A comprehensive cargo and logistics management platform designed to streamline shipment tracking, cargo registration, customer management, and delivery operations. The system provides an efficient workflow for managing shipping processes while improving operational visibility and record management.",
    tech: ["LARAVEL", "REACT", "MYSQL", "PHP", "VITE"],
    github: "https://github.com/Emmanuel1440/cargo-shipping-management-system",
    image: "/cargo.png",        // public/cargo-screenshot.jpg
    videoSrc: "/video/cargo-demo.mp4",     // public/video/cargo-demo.mp4
    badges: ["Full Stack", "Logistics Software"],
    stats: { items: 5, focal: "Relational Mapping", detail: "Operational Audits" },
    overview: "A structural asset platform allowing logistical personnel to allocate package IDs, track milestones, and update relational data models securely.",
    challenges: "Architecting a clean schema structure capable of scaling across dynamic multi-stop transport parameters seamlessly."
  },
  {
    id: "delta-hotel",
    title: "Delta Hotel Management System",
    description:
      "A modern hotel management application that simplifies room reservations, guest management, booking administration, and hotel operations through an intuitive dashboard, enabling efficient management of daily hospitality services.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "PHP", "MySQL"],
    github: "https://github.com/Emmanuel1440/Delta_Hotel",
    image: "/delta.png",        // public/hotel-screenshot.jpg
    videoSrc: "/video/delta-demo.mp4",     // public/video/hotel-demo.mp4
    badges: ["Web Application", "Admin Dashboard"],
    stats: { items: 6, focal: "Relational Booking", detail: "Interactive Tables" },
    overview: "An administrative management tool targeted at tracking guest cycles, processing scheduling conflicts, and parsing dynamic room status options.",
    challenges: "Preventing double-booking race conditions during overlapping request executions on legacy database connections."
  },
  {
    id: "weather",
    title: "Weather Dashboard",
    description:
      "A responsive weather application that displays real-time weather information, forecasts, and location-based updates through external weather APIs with a clean and interactive user interface.",
    tech: ["REACT", "JAVASCRIPT", "API", "CSS"],
    github: "https://github.com/Emmanuel1440/city-weather-app",
    image: "/weather.png",      // public/weather-screenshot.jpg
    videoSrc: "/video/weather-demo.mp4",   // public/video/weather-demo.mp4
    badges: ["Frontend Project", "API Integration"],
    stats: { items: 4, focal: "Asynchronous APIs", detail: "State Interpolation" },
    overview: "A lightweight dynamic frontend layer client fetching data metrics from remote APIs, interpreting JSON responses dynamically inside optimized render nodes.",
    challenges: "Handling rate-limit delays gracefully while preserving instant layout responsiveness for the user search input fields."
  }
]

function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null)
  const [isPlayingVideo, setIsPlayingVideo] = useState(false)

  const closeModal = () => {
    setActiveModalProject(null)
    setIsPlayingVideo(false)
  }

  return (
    <section id="projects" className="py-20 text-[#231b15] relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-16 flex items-center gap-3">
            <h2 className="text-3xl font-black tracking-tight text-[#231b15]">Exhibition Hall</h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#231b15]/10 to-transparent ml-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {projects.map((project, index) => {
              const isFlagship = index === 0

              return (
                <article
                  key={project.id}
                  className={`rounded-[2.5rem_1rem_2.5rem_1rem] bg-white/50 backdrop-blur-xl border border-white/40 shadow-md hover:border-[#231b15] hover:-translate-y-1.5 transition-all duration-500 flex flex-col overflow-hidden group ${
                    isFlagship ? "md:col-span-2 grid lg:grid-cols-12 gap-2" : ""
                  }`}
                >
                  <div className={`overflow-hidden relative bg-stone-100 cursor-pointer ${isFlagship ? "lg:col-span-5 h-full min-h-[280px]" : "h-52"}`} onClick={() => setActiveModalProject(project)}>
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 opacity-60 group-hover:opacity-20 transition-opacity pointer-events-none" />
                  </div>

                  <div className={`p-8 flex flex-col justify-between ${isFlagship ? "lg:col-span-7" : ""}`}>
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.badges.map((badge) => (
                          <span
                            key={badge}
                            className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                              badge === "Featured" ? "bg-amber-500 text-[#231b15]" : "bg-[#231b15]/5 text-[#231b15]/80"
                            }`}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-black text-[#231b15] mb-3 tracking-tight group-hover:text-amber-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-[#6e645c] text-sm font-normal leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1 mb-5">
                        {project.tech.slice(0, 4).map((item) => (
                          <span key={item} className="text-[9px] font-bold px-2 py-0.5 rounded bg-white text-stone-600 border border-stone-200/60">
                            {item}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-500">
                            +{project.tech.length - 4} MORE
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 py-3 px-4 mb-6 rounded-xl bg-stone-50/60 border border-stone-200/40 text-[11px] text-[#6e645c]">
                        <FiLayers className="text-amber-600 shrink-0" size={12} />
                        <span className="font-bold text-[#231b15]">{project.stats.items} Tools Used</span>
                        <span className="text-stone-300">|</span>
                        <span className="truncate">{project.stats.focal}</span>
                      </div>

                      <div className="flex flex-wrap gap-3 items-center pt-4 border-t border-stone-200/60">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="px-5 py-2.5 rounded-xl bg-[#231b15] hover:bg-amber-600 hover:text-white text-white font-bold text-xs tracking-wider transition-all active:scale-95 duration-300"
                        >
                          View Details
                        </button>

                        <button
                          onClick={() => {
                            setActiveModalProject(project)
                            setIsPlayingVideo(true)
                          }}
                          className="px-4 py-2.5 rounded-xl border border-stone-300 bg-white hover:border-[#231b15] text-[#231b15] font-bold text-xs tracking-wider inline-flex items-center gap-2 transition-all duration-200"
                        >
                          <FiPlay size={12} className="fill-current" /> Live Demo
                        </button>
                        
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 ml-auto rounded-xl border border-stone-200 text-[#6e645c] hover:text-[#231b15] hover:bg-white transition-all duration-200"
                          title="View Codebase"
                        >
                          <FiGithub size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </Reveal>
      </div>

      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/40 backdrop-blur-md" onClick={closeModal}>
          <div 
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white/95 border border-stone-200 p-8 rounded-[3rem_1rem_2.5rem_1rem] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 rounded-xl bg-stone-100 text-[#231b15] hover:bg-[#231b15] hover:text-white transition-colors duration-200"
            >
              <FiX size={18} />
            </button>

            <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full inline-block mb-3">
              Project Specification
            </span>
            <h3 className="text-2xl font-black text-[#231b15] tracking-tight mb-4 pr-10">
              {activeModalProject.title}
            </h3>

            <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 bg-stone-900 border border-stone-200 relative">
              {isPlayingVideo ? (
                <video 
                  src={activeModalProject.videoSrc} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                />
              ) : (
                <>
                  <img src={activeModalProject.image} alt={activeModalProject.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlayingVideo(true)}
                      className="p-5 rounded-full bg-amber-500 text-[#231b15] hover:bg-white hover:scale-110 shadow-2xl transition-all duration-300 flex items-center justify-center"
                    >
                      <FiPlay size={24} className="fill-current ml-0.5" />
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="space-y-6 text-sm leading-relaxed">
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-stone-400 mb-1.5">Project Overview</h4>
                <p className="text-[#6e645c] font-normal">{activeModalProject.description}</p>
                {activeModalProject.overview && (
                  <p className="text-[#6e645c] font-normal mt-2 italic border-l-2 border-amber-500/40 pl-3">{activeModalProject.overview}</p>
                )}
              </div>

              {activeModalProject.challenges && (
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-stone-400 mb-1.5">Engineering Challenges Solved</h4>
                  <p className="text-[#6e645c] font-normal">{activeModalProject.challenges}</p>
                </div>
              )}

              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-stone-400 mb-2">Full Technologies Matrix</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.tech.map((techItem) => (
                    <span key={techItem} className="text-[10px] font-bold px-3 py-1 rounded-md bg-stone-100 border border-stone-200 text-[#231b15]">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8 pt-6 border-t border-stone-200">
              <a
                href={activeModalProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#231b15] text-white hover:bg-amber-600 font-bold text-xs tracking-wider inline-flex items-center gap-2 transition-colors duration-200"
              >
                <FiGithub /> Source Code
              </a>
              
              {!isPlayingVideo && (
                <button
                  onClick={() => setIsPlayingVideo(true)}
                  className="px-5 py-3 rounded-xl border border-stone-300 bg-white text-[#231b15] hover:bg-stone-50 font-bold text-xs tracking-wider inline-flex items-center gap-2 transition-colors duration-200"
                >
                  <FiPlay size={12} className="fill-current" /> Play Live Demo Video
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects