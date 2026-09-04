import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import Reveal from "./Reveal"

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState("")

  const sendEmail = async (e) => {
    e.preventDefault()
    setStatus("Transmitting...")
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus("Message delivered successfully ✅")
      formRef.current.reset()
    } catch {
      setStatus("Transmission failed. Retry.")
    }
  }

  return (
    <section id="contact" className="py-20 text-[#231b15] relative z-10">
      <div className="max-w-2xl mx-auto px-6">
        <Reveal>
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-black tracking-tight text-[#231b15]">
              Start a Conversation
            </h2>
            <p className="w-full p-3 rounded-lg bg-slate-700/60 border border-slate-500/30 outline-none focus:border-cyan-300">Let's build something beautiful together.</p>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-4 bg-white/70 border border-stone-200 p-8 rounded-[3rem_3rem_1rem_1rem] backdrop-blur-2xl shadow-2xl"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-4 text-sm rounded-xl bg-white border border-stone-200 text-[#231b15] placeholder-stone-400 outline-none focus:border-amber-500 transition-all duration-300"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-4 text-sm rounded-xl bg-white border border-stone-200 text-[#231b15] placeholder-stone-400 outline-none focus:border-amber-500 transition-all duration-300"
              />
            </div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message..."
              required
              className="w-full p-4 text-sm rounded-xl bg-white border border-stone-200 text-[#231b15] placeholder-stone-400 outline-none focus:border-amber-500 transition-all duration-300 resize-none"
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-xl bg-[#231b15] hover:bg-amber-500 hover:text-[#231b15] text-white font-bold text-sm transition-all active:scale-95 duration-200 shadow-md"
            >
              Send Message
            </button>
            {status && <p className="text-sm font-bold text-amber-800 mt-2">{status}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact