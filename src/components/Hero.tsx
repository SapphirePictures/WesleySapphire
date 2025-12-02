import { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const taglineRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [descriptionVisible, setDescriptionVisible] = useState(false)

  const scrollToWorks = () => {
    const element = document.getElementById('works')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (taglineRef.current && !hasAnimated) {
        const rect = taglineRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        if (rect.top < windowHeight * 0.8) {
          setHasAnimated(true)
        }
      }

      if (descriptionRef.current && !descriptionVisible) {
        const rect = descriptionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        if (rect.top < windowHeight * 0.8) {
          setDescriptionVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasAnimated, descriptionVisible])

  return (
    <section id="hero" className="min-h-screen bg-gray-100">
      {/* Top Section with Title */}
      <div className="pt-32 pb-12 px-6">
        <div className="w-full overflow-hidden">
          <h1 
            className="text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] font-garnet text-blue-600 leading-none tracking-tighter uppercase whitespace-nowrap"
            style={{
              animation: 'slideUp 0.6s ease-out forwards',
              transform: 'translateY(100%)'
            }}
          >
            SAPPHIRE-INC.
          </h1>
        </div>
      </div>

      {/* Video Section with Tagline */}
      <div className="relative w-full h-[60vh] overflow-hidden bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/videos/y2mate.com - Showreel 2022  Repin Agency_1080p.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Tagline */}
        <div className="absolute bottom-8 left-8 right-8 overflow-hidden">
          <h2 
            ref={taglineRef}
            className="text-3xl md:text-5xl font-helvetica font-normal text-white leading-tight"
            style={{
              animation: hasAnimated ? 'slideUp 0.8s ease-out forwards' : 'none',
              transform: hasAnimated ? 'translateY(0)' : 'translateY(100%)'
            }}
          >
            Designing Brands and Interfaces<br />That People Remember.
          </h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="py-32 px-6 bg-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto">
          <p 
            ref={descriptionRef}
            className="text-3xl md:text-5xl lg:text-6xl font-helvetica text-gray-400 leading-tight font-light"
          >
            {['Visual designer crafting bold brand', 'identities, clean interfaces, and expressive', 'illustrations for modern businesses.'].map((line, index) => (
              <span
                key={index}
                className="block overflow-hidden"
              >
                <span
                  className="block"
                  style={{
                    animation: descriptionVisible ? `slideUp 0.8s ease-out ${index * 0.15}s forwards` : 'none',
                    transform: descriptionVisible ? 'translateY(0)' : 'translateY(100%)'
                  }}
                >
                  {line}
                </span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
