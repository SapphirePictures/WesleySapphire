import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-32 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-garnet mb-6 text-center">
          LET'S WORK TOGETHER
        </h2>
        <p className="text-xl font-helvetica text-gray-300 mb-16 text-center max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it. Drop me a message and let's create
          something amazing.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-helvetica font-bold text-sm mb-2 uppercase tracking-wider">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white text-black border-4 border-black focus:outline-none focus:border-primary-blue transition-colors font-helvetica"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-helvetica font-bold text-sm mb-2 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white text-black border-4 border-black focus:outline-none focus:border-primary-blue transition-colors font-helvetica"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-helvetica font-bold text-sm mb-2 uppercase tracking-wider">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-white text-black border-4 border-black focus:outline-none focus:border-primary-blue transition-colors font-helvetica resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-primary-blue text-white font-helvetica font-bold uppercase tracking-wider border-4 border-primary-blue hover:bg-white hover:text-black hover:border-black transition-all"
          >
            Send Message
          </button>
        </form>

        <div className="mt-16 text-center">
          <p className="font-helvetica text-gray-400 mb-4 uppercase tracking-wider">Or reach out directly:</p>
          <a
            href="mailto:hello@yourportfolio.com"
            className="font-helvetica text-xl hover:text-primary-blue transition-colors"
          >
            hello@yourportfolio.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
