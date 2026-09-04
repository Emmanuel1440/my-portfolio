import Reveal from "./Reveal"

function About() {
  return (
    <section id="about" className="py-20 text-[#231b15] relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="rounded-[5rem_2rem_4rem_2rem] bg-white/60 border border-white/40 backdrop-blur-xl p-12 shadow-xl shadow-stone-900/5 relative overflow-hidden group hover:bg-white/80 transition-all duration-500">
            <div className="absolute top-6 right-8 flex gap-1">
              <span className="w-2 h-2 bg-amber-500 rounded-sm animate-pulse" />
              <span className="w-2 h-2 bg-[#231b15] rounded-sm" />
            </div>
            
            <h2 className="text-3xl font-black mb-6 tracking-tight text-[#231b15]">
              About Me
            </h2>
            <p className="text-[#6e645c] leading-relaxed max-w-3xl text-lg font-normal tracking-wide">
              I'm passionate about building modern, user-focused products. I combine clean architecture, attention to detail, and creative UI to ship experiences that feel premium and perform reliably.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About