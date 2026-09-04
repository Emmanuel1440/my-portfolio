import { motion } from "framer-motion"
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi"

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-28 pb-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side Content - Enhanced with elegant backdrop readability */}
        <div className="bg-white/20 backdrop-blur-md p-8 sm:p-10 rounded-[2.5rem_1rem_2.5rem_1rem] border border-white/40 shadow-xl shadow-stone-900/5">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-widest uppercase font-black text-amber-700 bg-amber-500/10 px-4 py-2 rounded-full inline-block mb-6"
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-black tracking-tight text-[#231b15] leading-none"
          >
            Emmanuel Wanjala
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl mt-4 font-black tracking-wide text-amber-600"
          >
            Frontend / Full-Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[#6e645c] max-w-xl mt-6 text-lg font-normal leading-relaxed"
          >
            I design and build fast, responsive, and production-grade web applications with clean user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-[#231b15] hover:bg-amber-600 hover:text-white text-white font-bold text-sm shadow-xl transition-all active:scale-95 duration-300"
            >
              View Creations
            </a>
            <a
              href="#"
              className="px-8 py-4 rounded-2xl border border-stone-300 bg-white/80 text-[#231b15] font-bold text-sm transition inline-flex items-center gap-2 hover:bg-white active:scale-95 duration-300"
            >
              <FiDownload /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 mt-10 text-stone-500"
          >
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-amber-600 transition-colors hover:scale-110 duration-200"><FiGithub size={22} /></a>
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-amber-600 transition-colors hover:scale-110 duration-200"><FiLinkedin size={22} /></a>
          </motion.div>
        </div>

        {/* Right Side: Enhanced with a matching Amber/Gold/Espresso glow frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-[280px] sm:w-[340px] lg:w-[380px]"
        >
          {/* Enhanced glow scheme to coordinate with the studio lighting */}
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-amber-500 via-amber-600 to-[#231b15] blur-md opacity-40 animate-pulse" />
          <div className="relative bg-slate-900/90 border border-slate-700 rounded-[2rem] p-3 shadow-2xl">
            <div className="rounded-[1.7rem] overflow-hidden [clip-path:polygon(8%_0,92%_0,100%_20%,100%_80%,92%_100%,8%_100%,0_80%,0_20%)]">
              <img src="/profile.jpeg" alt="Emmanuel Wanjala profile" className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero