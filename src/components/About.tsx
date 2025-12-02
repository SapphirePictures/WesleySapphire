const About = () => {
  const skills = [
    'React & TypeScript',
    'Node.js & Express',
    'UI/UX Design',
    'Figma & Adobe Suite',
    'Tailwind CSS',
    'Next.js',
    'MongoDB & PostgreSQL',
    'Git & CI/CD',
  ]

  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-merriweather font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="font-helvetica text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate creative professional with over 5 years of experience in designing
              and developing digital experiences. My work combines technical expertise with
              creative vision to deliver exceptional results.
            </p>
            <p className="font-helvetica text-lg text-gray-600 mb-6 leading-relaxed">
              I believe in the power of good design to transform businesses and create meaningful
              connections with users. Every project is an opportunity to push boundaries and
              create something extraordinary.
            </p>
            <p className="font-helvetica text-lg text-gray-600 leading-relaxed">
              When I'm not coding or designing, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the community.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-merriweather font-bold text-gray-900 mb-6">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-50 px-4 py-3 rounded-lg font-helvetica text-gray-700 text-center hover:bg-gray-100 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
