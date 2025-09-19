import React from 'react'
import { Database, BarChart3, Cloud, Code, Palette, Settings } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages & Core Tools',
    icon: Code,
    color: 'text-primary-400',
    bgColor: 'bg-primary-500/10',
    borderColor: 'border-primary-500/20',
    skills: [
      'Python (Pandas, NumPy, Scikit-learn, PyTorch)',
      'SQL',
      'R',
      'Git/GitHub'
    ]
  },
  {
    title: 'Cloud, Databases & Engineering',
    icon: Cloud,
    color: 'text-accent-400',
    bgColor: 'bg-accent-500/10',
    borderColor: 'border-accent-500/20',
    skills: [
      'Cloud Platforms: Amazon Web Services (AWS), Google Cloud Platform (GCP)',
      'Data Warehousing: Snowflake, Google BigQuery',
      'ETL & Transformation: dbt (Data Build Tool), Informatica, ETL Pipeline Development'
    ]
  },
  {
    title: 'Statistical Analysis & Experimentation',
    icon: BarChart3,
    color: 'text-secondary-400',
    bgColor: 'bg-secondary-500/10',
    borderColor: 'border-secondary-500/20',
    skills: [
      'Statistical Modeling',
      'Experimental Design & A/B Testing',
      'Causal Inference',
      'Root-Cause Analysis'
    ]
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    icon: Database,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    skills: [
      'Predictive Analytics',
      'Natural Language Processing (NLP)',
      'Deep Learning (Transformers)',
      'Computer Vision (CNNs)'
    ]
  },
  {
    title: 'Business Intelligence & Visualization',
    icon: Palette,
    color: 'text-yellow-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    skills: [
      'Tableau',
      'Power BI',
      'Looker Studio',
      'Streamlit',
      'Dashboard Design & KPI Tracking'
    ]
  },
  {
    title: 'Strategy & Communication',
    icon: Settings,
    color: 'text-red-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20',
    skills: [
      'Requirements Gathering',
      'Stakeholder Management',
      'Business Acumen',
      'Data Storytelling'
    ]
  }
]

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
            Skills and Tools
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for transforming data into actionable business insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.title}
                className={`card ${category.bgColor} ${category.borderColor} hover:scale-105 transition-all duration-300`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${category.bgColor} mr-4`}>
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${category.color}`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-primary-400"></div>
                      <span className="text-gray-300 text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

