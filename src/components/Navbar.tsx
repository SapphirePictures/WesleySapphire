import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/95 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-xl font-helvetica font-normal text-gray-900"
        >
          Sapphire Pictures
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('services')}
            className="font-helvetica text-gray-700 transition-colors hover:text-gray-900"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('works')}
            className="font-helvetica text-gray-700 transition-colors hover:text-gray-900"
          >
            Works
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="font-helvetica text-gray-700 transition-colors hover:text-gray-900"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-blue-600 text-white font-helvetica hover:bg-blue-700 transition-all"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
