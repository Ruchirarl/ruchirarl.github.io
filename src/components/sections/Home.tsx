import React from 'react'
import { Mail, Linkedin, Github, BookOpen } from 'lucide-react'
import { ParticlesBackground } from '../ParticlesBackground'

export const Home: React.FC = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:ruchirarl07@gmail.com',
      color: 'hover:text-pink-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ruchira-lokhande',
      color: 'hover:text-pink-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Ruchirarl',
      color: 'hover:text-pink-400'
    },
    {
      name: 'Medium',
      icon: BookOpen,
      href: 'https://medium.com/@ruchirarl24',
      color: 'hover:text-pink-400'
    }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <ParticlesBackground />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <div className="animate-fade-in">
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-display text-white mb-6">
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
              Ruchira Lokhande
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
            Driven by curiosity, guided by data.
          </p>
          <p className="text-lg md:text-xl text-accent-400 mb-12 font-medium">
            Business Analyst | Data Storytelling | Decision Science
          </p>

          {/* Social buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center space-x-2 px-6 py-3 rounded-lg bg-dark-800 border border-dark-700 text-gray-300 transition-all duration-300 hover:border-primary-500 hover:scale-105 ${link.color}`}
                  aria-label={link.name}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="font-medium">{link.name}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

