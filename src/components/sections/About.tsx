import React from 'react'
import { User } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
              About Me
            </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-1">
                <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center overflow-hidden">
                  {/* Replace this with your actual photo */}
                  <img 
                    src="/profile-photo.jpg" 
                    alt="Ruchira Lokhande" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback to icon if image not found
                      e.currentTarget.style.display = 'none'
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                      if (nextElement) {
                        nextElement.style.display = 'flex'
                      }
                    }}
                  />
                  <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center" style={{display: 'none'}}>
                    <User className="h-32 w-32 text-primary-400" />
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 lg:col-span-2">
            <div className="space-y-5 text-gray-300 text-base leading-relaxed">
              <p className="text-xl font-medium text-white">
                I believe data is only powerful when it drives real change.
              </p>
              
              <p>
                I've delivered measurable results across Deloitte, startups, and law firms—boosting accuracy to 100%, cutting 80+ hours of manual work, and improving efficiency by 10%.
              </p>
              
              <p>
                From working at one of the Big 4 to thriving in fast-paced startups and shaping strategy for a law firm, I've seen how analytics can transform the way organizations operate and grow. With a Master's in Business Analytics from UC Davis, I bring both the technical depth (Python, SQL, Tableau, GCP, dbt) and the business acumen to turn raw data into insights leaders can act on.
              </p>
              
              <p>
                At Deloitte, I engineered ETL workflows that processed 20,000+ records with 100% first-pass accuracy. At AI4M Technology, I improved defect detection by 10% using ML while managing four cross-functional AI projects. And at De Fonte Law, I built Tableau dashboards that turned manual analysis into a one-day review and designed a roadmap projected to boost efficiency by 10%.
              </p>
              
              <p>
                What excites me most is connecting data to strategy—making analytics not just about dashboards and models, but about impact you can see and measure.
              </p>
              
              <p className="text-gray-300">
                Outside of work, I love experimenting with new recipes and playing badminton—pursuits that, like analytics, demand precision, creativity, and strategy.
              </p>
              
              <p className="text-pink-500 font-medium">
                Whether you have a complex problem to solve, want to talk about the future of data, or think I'd be a great fit for your team, I'm always open to a conversation. Let's connect.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-6 mt-10">
              <a
                href="https://linkedin.com/in/ruchira-lokhande"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              
              <a
                href="#projects"
                className="flex items-center space-x-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>Projects</span>
              </a>
              
              <a
                href="#experience"
                className="flex items-center space-x-2 px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
                <span>Experience</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

