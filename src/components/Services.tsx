import { useEffect, useRef, useState } from 'react'

const Services = () => {
  const bodyTextRef = useRef<HTMLParagraphElement>(null)
  const [bodyTextVisible, setBodyTextVisible] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const [servicesVisible, setServicesVisible] = useState(false)

  const services = [
    {
      title: 'Creative Consultancy',
      description: 'Guiding brand vision and creative direction to ensure clarity before execution.',
    },
    {
      title: 'Art Direction',
      description: 'Defining the look, mood, and emotional coherence across campaigns and branded content.',
    },
    {
      title: 'Brand Guidelines',
      description: 'Defining the rules that keep a brand consistent from typography and color systems to motion, tone, and digital behavior.',
    },
    {
      title: 'Web Development',
      description: 'Building robust, scalable applications with modern technologies and best practices.',
    },
    {
      title: 'Motion Design',
      description: 'Bringing brand emotion to life through movement and narrative-driven motion content.',
    },
    {
      title: 'Digital Strategy',
      description: 'Extending visual possibilities, accelerating concept exploration, and enhancing storytelling.',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (bodyTextRef.current && !bodyTextVisible) {
        const rect = bodyTextRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        if (rect.top < windowHeight * 0.8) {
          setBodyTextVisible(true)
        }
      }

      if (servicesRef.current && !servicesVisible) {
        const rect = servicesRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        if (rect.top < windowHeight * 0.8) {
          setServicesVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [bodyTextVisible, servicesVisible])

  return (
    <section id="services" className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm md:text-base font-helvetica font-normal text-gray-900 mb-12 tracking-wide uppercase">
          Services
        </h2>
        <p 
          ref={bodyTextRef}
          className="text-3xl md:text-5xl lg:text-6xl font-helvetica text-gray-400 mb-24 leading-tight font-light"
        >
          {[
            'I help brands connect strategy and design',
            'through a multidisciplinary approach. Each service is crafted',
            'to bring clarity, emotion, and cohesion to how brands express',
            'themselves.'
          ].map((line, index) => (
            <span
              key={index}
              className="block overflow-hidden"
            >
              <span
                className="block"
                style={{
                  animation: bodyTextVisible ? `slideUp 0.8s ease-out ${index * 0.15}s forwards` : 'none',
                  transform: bodyTextVisible ? 'translateY(0)' : 'translateY(100%)'
                }}
              >
                {line}
              </span>
            </span>
          ))}
        </p>

        <div ref={servicesRef} className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-10 last:border-b-0 overflow-hidden"
            >
              <div
                style={{
                  animation: servicesVisible ? `slideUp 0.8s ease-out ${index * 0.1}s forwards` : 'none',
                  transform: servicesVisible ? 'translateY(0)' : 'translateY(100%)'
                }}
              >
                <h3 className="text-xl md:text-2xl font-helvetica font-normal text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="font-helvetica text-gray-600 text-base md:text-lg leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
