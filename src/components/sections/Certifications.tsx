import React from 'react'
import { ExternalLink, Award, Calendar, Building } from 'lucide-react'

const certificationsData = [
  {
    title: 'Tableau Certified Desktop Specialist',
    issuer: 'Tableau',
    date: '2025',
    logo: '📊',
    badge: '/tableau-badge.png', // Placeholder for badge image
    color: 'from-blue-500 to-purple-600',
    url: 'https://www.credly.com/badges/a55d5912-d6de-4288-a4bd-933437f54611/linked_in_profile',
    description: 'Validated expertise in Tableau Desktop for data visualization and analytics',
    hasBadge: true
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    logo: '☁️',
    badge: '/aws-badge.png', // Placeholder for badge image
    color: 'from-orange-500 to-yellow-600',
    url: 'https://www.credly.com/badges/1140c485-1729-400b-ab32-1da1e7987a41/public_url',
    description: 'Foundational understanding of AWS Cloud concepts and services',
    hasBadge: true
  },
  {
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    date: '2025',
    logo: '🎯',
    badge: '/mckinsey-badge.png', // Placeholder for badge image
    color: 'from-purple-500 to-indigo-600',
    url: 'https://www.credly.com/badges/090ade78-d82f-4792-a693-08312cc4bb5b/public_url',
    description: 'Professional development program focused on digital skills and leadership',
    hasBadge: true
  },
  {
    title: 'Building Agentic AI Applications with LLMs',
    issuer: 'NVIDIA',
    date: '2025',
    logo: '🤖',
    badge: '/nvidia-badge.png', // Placeholder for badge image
    color: 'from-green-500 to-emerald-600',
    url: 'https://learn.nvidia.com/certificates?id=sR6jS6gjRtOCJZJvwwaUTg',
    description: 'Advanced certification in developing AI applications using Large Language Models',
    hasBadge: true
  },
  {
    title: 'Goldman Sachs Risk Job Simulation',
    issuer: 'Forage',
    date: '2025',
    logo: '🏦',
    color: 'from-red-500 to-pink-600',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/ETGMhLB5eCrYjcH8o_MBA4MnZTNFEoJZGnk_nztDsdXczLr3dsdMQ_1741894446729_completion_certificate.pdf',
    description: 'Hands-on experience with risk management and financial analysis',
    hasBadge: false
  }
]

const CertificationCard: React.FC<{ certification: typeof certificationsData[0] }> = ({ certification }) => {
  return (
    <a
      href={certification.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="card h-[20rem] flex flex-col items-center justify-center text-center hover:scale-105 hover:border-blue-500 transition-all duration-300 group-hover:shadow-xl">
        {/* Badge or Logo/Icon */}
        <div className="mb-5">
          {certification.hasBadge ? (
            <div className="relative">
              <img 
                src={certification.badge} 
                alt={`${certification.title} Badge`}
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Fallback to emoji if badge image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div 
                className={`w-16 h-16 bg-gradient-to-br ${certification.color} rounded-xl items-center justify-center text-2xl hidden`}
              >
                {certification.logo}
              </div>
            </div>
          ) : (
            <div className={`w-16 h-16 bg-gradient-to-br ${certification.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
              {certification.logo}
            </div>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200">
          {certification.title}
        </h3>
        
        {/* Issuer and Date */}
        <div className="flex items-center justify-center text-gray-400 text-xs mb-4 space-x-4">
          <div className="flex items-center">
            <Building className="h-3 w-3 mr-1" />
            {certification.issuer}
          </div>
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {certification.date}
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-300 text-xs leading-relaxed mb-4">
          {certification.description}
        </p>
        
        {/* External link indicator */}
        <div className="flex items-center text-pink-400 text-xs group-hover:text-primary-300 transition-colors duration-200">
          <ExternalLink className="h-3 w-3 mr-1" />
          <span>{certification.hasBadge ? 'View Badge' : 'View Certificate'}</span>
        </div>
      </div>
    </a>
  )
}

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Validated expertise across data analytics, cloud computing, AI development, and professional leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificationsData.slice(0, 3).map((certification, index) => (
            <CertificationCard key={index} certification={certification} />
          ))}
        </div>
        
        {/* Second row with 2 centered items */}
        <div className="flex justify-center gap-8 max-w-6xl mx-auto mt-8">
          {certificationsData.slice(3).map((certification, index) => (
            <div key={index + 3} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-xs">
              <CertificationCard certification={certification} />
            </div>
          ))}
        </div>


        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Interested in seeing more of my professional development?
          </p>
          <a
            href="https://www.linkedin.com/in/ruchira-lokhande"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
          >
            <Award className="h-5 w-5" />
            <span>View my LinkedIn profile</span>
          </a>
        </div>
      </div>
    </section>
  )
}

