import { useEffect, useRef, useState } from 'react'

interface Work {
  id: number
  type: 'image' | 'video'
  src: string
  title: string
  category: string
}

const FeaturedWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const works: Work[] = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      title: 'Brand Identity Design',
      category: 'Branding',
    },
    {
      id: 2,
      type: 'video',
      src: 'https://videos.pexels.com/video-files/3130284/3130284-sd_640_360_30fps.mp4',
      title: 'Motion Graphics',
      category: 'Animation',
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      title: 'Web Development',
      category: 'Development',
    },
    {
      id: 4,
      type: 'video',
      src: 'https://videos.pexels.com/video-files/2278095/2278095-sd_640_360_30fps.mp4',
      title: 'Product Showcase',
      category: 'Video',
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      title: 'UI/UX Design',
      category: 'Design',
    },
  ]

  useEffect(() => {
    const container = containerRef.current
    const scrollContainer = scrollContainerRef.current
    if (!container || !scrollContainer) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const containerRect = container.getBoundingClientRect()
          
          // Check if section is in viewport
          if (containerRect.top <= 0 && containerRect.bottom >= window.innerHeight) {
            // Calculate horizontal scroll based on vertical scroll progress
            const progress = Math.abs(containerRect.top) / (containerRect.height - window.innerHeight)
            
            // Apply easing function for smoother transitions
            const easedProgress = progress < 0.5 
              ? 2 * progress * progress 
              : 1 - Math.pow(-2 * progress + 2, 2) / 2
            
            // Calculate scroll amount based on container width
            const scrollWidth = scrollContainer.scrollWidth
            const containerWidth = scrollContainer.parentElement?.clientWidth || window.innerWidth
            const maxScroll = scrollWidth - containerWidth
            const targetScroll = easedProgress * maxScroll
            
            // Apply transform
            scrollContainer.style.transform = `translateX(-${targetScroll}px)`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="works"
      ref={containerRef}
      className="relative"
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-white">
        <div className="relative w-full h-full flex items-center">
          <div
            ref={scrollContainerRef}
            className="flex gap-8 px-6 transition-transform duration-100 ease-out will-change-transform"
          >
          {works.map((work) => (
            <div
              key={work.id}
              className="flex-shrink-0 w-[80vw] md:w-[60vw] h-[70vh] relative group cursor-pointer"
              style={{ scrollSnapAlign: 'center' }}
              onMouseEnter={() => setHoveredId(work.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {work.type === 'image' ? (
                <img
                  src={work.src}
                  alt={work.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <video
                  src={work.src}
                  className="w-full h-full object-cover rounded-lg"
                  loop
                  muted
                  playsInline
                  autoPlay={hoveredId === work.id}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end p-8">
                <div>
                  <p className="text-sm font-helvetica text-gray-300 mb-2">{work.category}</p>
                  <h3 className="text-3xl font-merriweather font-bold text-white">{work.title}</h3>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWorks
