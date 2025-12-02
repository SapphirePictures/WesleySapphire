import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedWorks from './components/FeaturedWorks'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => 1 - Math.pow(1 - t, 4), // Quartic ease-out
      direction: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      wheelMultiplier: 0.8,
      infinite: false,
      lerp: 0.05, // Very smooth interpolation
    })

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="font-helvetica">
      <Navbar />
      <Hero />
      <FeaturedWorks />
      <Services />
      <About />
      <Contact />
      
      <footer className="bg-black text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-helvetica text-gray-400">
            © 2025 Wesley Saapphire. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
