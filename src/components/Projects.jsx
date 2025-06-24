import React from 'react'
import useReleaseOnScroll from '../hooks/useReleaseOnScroll'

const Projects = () => {
  const [headerRef, isHeaderVisible] = useReleaseOnScroll(0.3)
  const [projectsRef, isProjectsVisible] = useReleaseOnScroll(0.2)
  const [skillsRef, isSkillsVisible] = useReleaseOnScroll(0.3)
  const [ctaRef, isCtaVisible] = useReleaseOnScroll(0.3)

  const projects = [
    {
      id: 1,
      title: "WasteLess",
      description: "A modern food waste tracking and pantry management app with receipt scanning, expiry alerts, and beautiful glassmorphism UI. Features smart food tracking, OCR technology, and user authentication.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["React", "Node.js", "SQLite", "Tesseract.js", "JWT"],
      liveUrl: "#",
      githubUrl: "https://github.com/UronTernava/WasteLess.git"
    },
    {
      id: 2,
      title: "MindTrack",
      description: "A professional mental health tracker and journaling app with mood tracking, sentiment analysis, daily quotes, and 3D animated UI. Features user authentication and personalized insights.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["React", "Tailwind CSS", "react-three-fiber", "React Router"],
      liveUrl: "#",
      githubUrl: "https://github.com/UronTernava/mental-health-tracker.git"
    },
    {
      id: 3,
      title: "AI E-commerce Shop",
      description: "An AI-powered e-commerce platform with modern features and intelligent product recommendations. Built with cutting-edge technologies for optimal user experience.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["React", "AI/ML", "Node.js", "Database", "API"],
      liveUrl: "#",
      githubUrl: "https://github.com/UronTernava/AI-Ecommerce-Shop.git"
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isHeaderVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the web development projects I've worked on. Each one represents a unique challenge 
            and showcases different aspects of my skills and creativity.
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${
            isProjectsVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-20'
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 animate-glow"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-center text-white/50">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <p className="text-sm">GitHub Repository</p>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 transform hover:scale-110"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Category Badge */}
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    Web Development
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View GitHub Button - Centered */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/UronTernava" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            View GitHub
          </a>
        </div>

        {/* Skills Section */}
        <div 
          ref={skillsRef}
          className={`mt-20 transition-all duration-1000 ease-out ${
            isSkillsVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-20'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'React', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
              { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-500 to-blue-500' },
              { name: 'JavaScript', icon: '🟨', color: 'from-yellow-500 to-orange-500' },
              { name: 'Java', icon: '☕', color: 'from-red-500 to-orange-500' },
              { name: 'HTML/CSS', icon: '🌐', color: 'from-orange-500 to-red-500' },
              { name: 'PHP', icon: '🐘', color: 'from-purple-500 to-pink-500' },
              { name: 'MySQL', icon: '🐬', color: 'from-blue-600 to-blue-800' },
              { name: 'Responsive Design', icon: '📱', color: 'from-green-500 to-emerald-500' }
            ].map((skill, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 p-6 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h4 className="text-white font-semibold text-sm group-hover:text-purple-400 transition-colors duration-300">
                  {skill.name}
                </h4>
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div 
          ref={ctaRef}
          className={`text-center mt-16 transition-all duration-1000 ease-out ${
            isCtaVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}
        >
          <p className="text-gray-300 mb-6">
            Interested in working together? Let's discuss your next project!
          </p>
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <a 
              href="https://www.linkedin.com/in/uron-ternava-806350304/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 