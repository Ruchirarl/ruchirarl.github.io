import React, { useState } from 'react'
import { GraduationCap, Briefcase, ChevronDown, ChevronUp, MapPin, Calendar, Award, BookOpen } from 'lucide-react'

const educationData = [
  {
    institution: 'University of California, Davis',
    location: 'San Francisco, CA',
    degree: 'Master of Science, Business Analytics',
    gpa: '3.6/4.0',
    period: 'August 2024 - August 2025',
    logo: '🏛️',
    logoUrl: '/ucdavis-logo.png',
    highlights: [
      'MSBA Fellowship Scholar',
      'Beta Gamma Sigma Honor Society (Top 10% of Class)'
    ],
    coursework: [
      'Machine Learning',
      'Advanced Statistics and Forecasting',
      'Big Data Analytics',
      'Data Management',
      'Analytical Decision Making',
      'Data Design and Representation',
      'Data Engineering'
    ]
  },
  {
    institution: 'Symbiosis Institute of Technology',
    location: 'Pune, India',
    degree: 'Bachelor of Technology, Information Technology',
    gpa: '3.6/4.0',
    period: 'July 2019 - June 2023',
    logo: '🎓',
    logoUrl: '/symbiosis-logo.png',
    highlights: [
      'Honors: Machine Learning and Artificial Intelligence'
    ],
    coursework: [
      'Database Management Systems',
      'Project Management',
      'Big Data (Hadoop & Apache Spark)',
      'Agile Software Development',
      'Search Engine Optimization',
      'Deep Learning',
      'Neural Networks'
    ]
  }
]

const experienceData = [
  {
    company: 'De Fonte Law',
    location: 'San Francisco, CA',
    position: 'Data Analyst (Practicum)',
    period: 'September 2024 – June 2025',
    logo: '⚖️',
    logoUrl: '/defonte-logo.png',
    overview: 'Led a data-driven analytics engagement for a boutique law firm, improving funnel visibility, KPI reporting, and marketing performance through CRM analytics and dashboard automation.',
    achievements: [
      'Rebuilt end-to-end intake funnel in Python and SQL by feature-engineering 5+ years of CRM data, applied funnel analysis to pinpoint 3 high-drop-off stages, and delivered prioritized recommendations, driving a 10% increase in client conversion rate.'
      'Automated KPI reporting pipeline in Tableau by replacing manual Excel workflows across conversion, CAC, response time, and throughput, eliminated 80+ analyst hours/month, enabling same-day leadership decisions.'
      'Uncovered a 20% time-per-matter variance by analyzing attorney time-tracking data across all active matters in Python, delivered a staffing reallocation model that reduced matter backlog by 15%, and improved resource utilization.'
      'Standardized KPI definitions across 3 business units in Tableau and SQL, leading 12+ cross-functional sessions to collapse conflicting metric definitions, cutting reporting discrepancy incidents by 30%.'
      'Grew organic traffic 30% by running Python-driven CTR analysis across 10+ competitors, surfaced 15 keyword gaps in a Tableau benchmarking dashboard, and delivered a targeted content strategy.'
          ],
    techStack: ['Python (Pandas, BeautifulSoup)', 'Tableau', 'Excel', 'CRM (Clio)']
  },
  {
    company: 'Deloitte USI',
    location: 'Bangalore, India',
    position: 'Data Analyst, Strategy & Analytics',
    period: 'January 2024 – May 2024',
    logo: '🏢',
    logoUrl: '/deloitte-logo.png',
    overview: 'Built and optimized data workflows and validation checks to improve reporting reliability and analytics readiness across Snowflake-based reporting systems.',
    achievements: [
      'Integrated 3+ enterprise data sources into a unified Snowflake schema using Informatica, applied 20+ transformation rules, and validated full-load row counts end-to-end, ensuring zero-defect data delivery for downstream reporting.'
      'Built and optimized 15+ Informatica ETL workflows by redesigning staging-to-target transformation logic, reduced average pipeline execution time by 20%, and improved data refresh reliability across all reporting layers.'
      'Developed a Python data validation suite across 20K+ records, automated anomaly detection, null-value checks, and duplicate flagging across 5 validation dimensions, reducing data quality errors reaching dashboards by an estimated 35%.'
      'Designed advanced SQL data models using CTEs, window functions, and multi-table joins across 3+ datasets, produced Snowflake-aligned analytical tables, reducing ad hoc query turnaround time by ~40% for business reporting stakeholders.'
    ],
    techStack: ['Informatica', 'Snowflake', 'SQL', 'Python (Pandas)']
  },
  {
    company: 'AI4M Technology Pvt. Ltd.',
    location: 'Pune, India',
    position: 'Business Analyst Intern',
    period: 'January 2023 – July 2023',
    logo: '🤖',
    logoUrl: '/ai4m-logo.png',
    overview: 'Partnered with client and data teams at an AI-for-manufacturing startup to deliver KPI dashboards and analytics initiatives, improving production visibility and quality outcomes.',
    achievements: [
      'Led ML model selection for coating weight prediction by benchmarking 4 algorithms (KNN, XGBoost, Random Forest, Decision Tree), and drove architectural transition to PyTorch deep learning, achieving AUC 0.863 on live spectroscopic data.'
      'Engineered CV training datasets across 10+ experimental setups using CVAT, producing annotation‑validated, ML‑ready datasets that enabled a 10% improvement in defect detection accuracy in metal pipe manufacturing inspection.'
      'Designed 3 KPI reporting frameworks (lot‑wise, daily, shift‑wise) to track defect rate and coating weight, giving plant operators structured quality‑control visibility and replacing ad‑hoc manual logs across 2 production facilities.'
      'Authored FRS and FDS documents for 4 concurrent AI/CV products, translated client manufacturing requirements into engineering-ready specs, reducing mid-sprint scope changes by an estimated 60% across all workstreams.'

    ],
    techStack: ['Python', 'Figma', 'Excel', 'Computer Vision APIs']
  }
]

const EducationCard: React.FC<{ education: typeof educationData[0] }> = ({ education }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="card hover:border-primary-500 transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 flex-shrink-0">
          <img 
            src={education.logoUrl} 
            alt={`${education.institution} logo`}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              const nextElement = e.currentTarget.nextElementSibling as HTMLElement
              if (nextElement) {
                nextElement.style.display = 'flex'
              }
            }}
          />
          <div className="w-full h-full bg-primary-600 rounded-lg flex items-center justify-center text-white text-lg font-bold" style={{display: 'none'}}>
            {education.institution.charAt(0)}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{education.institution}</h3>
          <div className="flex items-center text-gray-400 text-sm mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            {education.location}
          </div>
          <div className="flex items-center text-gray-400 text-sm mb-4">
            <Calendar className="h-4 w-4 mr-1" />
            {education.period}
          </div>
          <p className="text-primary-400 font-semibold mb-2">{education.degree}</p>
          <p className="text-blue-400 font-medium mb-4">GPA: {education.gpa}</p>
          
          <div className="space-y-3">
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Award className="h-4 w-4 mr-2 text-accent-400" />
                Highlights
              </h4>
              <ul className="space-y-1">
                {education.highlights.map((highlight, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center text-pink-400 hover:text-primary-300 transition-colors duration-200"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              {isExpanded ? 'Hide' : 'Show'} Coursework
              {isExpanded ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
            </button>

            {isExpanded && (
              <div className="mt-3">
                <h4 className="text-white font-semibold mb-2">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-full border border-primary-500/30"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const ExperienceCard: React.FC<{ experience: typeof experienceData[0] }> = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="card hover:border-accent-500 transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 flex-shrink-0">
          <img 
            src={experience.logoUrl} 
            alt={`${experience.company} logo`}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              const nextElement = e.currentTarget.nextElementSibling as HTMLElement
              if (nextElement) {
                nextElement.style.display = 'flex'
              }
            }}
          />
          <div className="w-full h-full bg-accent-600 rounded-lg flex items-center justify-center text-white text-lg font-bold" style={{display: 'none'}}>
            {experience.company.charAt(0)}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{experience.company}</h3>
          <div className="flex items-center text-gray-400 text-sm mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            {experience.location}
          </div>
          <div className="flex items-center text-gray-400 text-sm mb-4">
            <Calendar className="h-4 w-4 mr-1" />
            {experience.period}
          </div>
          <p className="text-primary-400 font-semibold mb-4">{experience.position}</p>
          {('overview' in experience) && (
            <p className="text-gray-300 text-xs md:text-sm leading-6 mb-4">{(experience as any).overview}</p>
          )}
          {('techStack' in experience) && (
            <div className="mb-4 flex flex-wrap gap-2">
              {(experience as any).techStack.map((tech: string) => (
                <span key={tech} className="px-3 py-1 text-xs rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300">
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-accent-400 hover:text-pink-300 transition-colors duration-200 mb-4"
          >
            <Briefcase className="h-4 w-4 mr-2" />
            {isExpanded ? 'Hide' : 'Show'} Achievements
            {isExpanded ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
          </button>

          {isExpanded && (
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Key Achievements</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
            Education and Experience
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A journey of continuous learning and professional growth
          </p>
        </div>

        <div className="relative grid lg:grid-cols-2 gap-20">
          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-primary-400 mr-3" />
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {educationData.map((education, index) => (
                <EducationCard key={index} education={education} />
              ))}
            </div>
          </div>

          {/* Vertical Separator Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-500/50 to-transparent transform -translate-x-1/2"></div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="h-8 w-8 text-accent-400 mr-3" />
              <h3 className="text-3xl font-bold text-white">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experienceData.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

