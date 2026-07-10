import { siteData } from "../data/site"

function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-slate-300 leading-relaxed max-w-3xl">
          {siteData.about}
        </p>
      </div>
    </section>
  )
}

export default About