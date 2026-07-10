import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState("")

  const sendEmail = async (e) => {
    e.preventDefault()
    setStatus("Sending...")

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus("Message sent successfully ✅")
      formRef.current.reset()
    } catch (error) {
      setStatus("Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-slate-300 mb-8">
          Have an opportunity or project? Send me a message.
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4 bg-slate-900 border border-slate-800 p-6 rounded-xl"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg"
          >
            Send Message
          </button>

          {status && <p className="text-sm text-slate-300">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact