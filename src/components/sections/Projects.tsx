import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, ExternalLink, Github, Play } from 'lucide-react'

const projectsData = [
  {
    title: 'ViewTube',
    subtitle: 'YouTube Analytics Dashboard',
    description: 'Developed an end-to-end analytics application using Python and Streamlit that automated a 200-video workflow, from API ingestion to a 1-click executive report, reducing manual analysis time by over 80%.',
    highlights: [
      'Generated actionable insights by analyzing keyword lift, sentiment, and optimal publishing windows',
      'Improved projected views per day by 20-30% and standardized key performance indicators for strategic planning',
      'Automated 200-video workflow with 1-click executive reporting'
    ],
    tech: ['Python', 'Streamlit', 'YouTube API', 'Data Visualization'],
    github: 'https://github.com/Ruchirarl/ViewTube',
    demo: 'https://viewtube.streamlit.app/',
    image: '📊',
    imageUrl: '/viewtube-project.png',
    color: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Hotel Pricing Elasticity',
    subtitle: 'Dynamic Pricing Analysis Using Causal Inference',
    description: 'Built an end-to-end analysis in R to model how hotel booking likelihood changes with price fluctuations across customer income groups and regions, simulating a dynamic pricing framework for an online travel agency.',
    highlights: [
      'Analyzed a 25,000-row randomized experiment dataset to estimate true price elasticity, isolating the causal impact of price on booking probability.',
      'Modeled booking behavior using logistic regression, quantifying that low-income customers were ~2× more price sensitive than high-income groups.',
      'Segmented customers by income and region to identify high-sensitivity markets, providing actionable insights for revenue optimization and pricing strategy.'
    ],
    tech: ['R', 'Causal Inference', 'Statistical Modeling', 'Logistic Regression', 'Experiment Design', 'Data Visualization'],
    github: '',
    demo: '',
    image: '🏨',
    imageUrl: '',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    title: 'ESynapse',
    subtitle: 'Real-Time E-commerce Analytics Pipeline',
    description: 'Architected a real-time GCP data pipeline using Python, Pub/Sub, and BigQuery, automating hourly data transformations for 5+ analytical models with dbt.',
    highlights: [
      'Informed Go-to-Market (GTM) strategy by defining 8+ business KPIs with advanced SQL in dbt',
      'Delivered a 30-day sales forecast using BigQuery ML, providing predictive insights via a live Tableau dashboard',
      'Automated hourly data transformations for 5+ analytical models'
    ],
    tech: ['Python', 'GCP', 'BigQuery', 'dbt', 'Pub/Sub', 'Tableau'],
    github: 'https://github.com/Ruchirarl/ESynapse',
    demo: 'https://drive.google.com/file/d/1-CqvO-FaNCvKegAKOxIJZzGsK27Lpciz/view?usp=sharing',
    image: '🛒',
    imageUrl: '/esynapse-project.png',
    color: 'from-green-500 to-teal-600'
  },
  {
    title: 'EquiTrack',
    subtitle: 'Python-based Portfolio Risk & Return Analyzer',
    description: 'Engineered an end-to-end analytics pipeline using Python and dbt, automating the daily transformation of raw financial data into 7 tested analytical models and delivering 18 key metrics like Sharpe Ratio and Volatility.',
    highlights: [
      'Modeled next-day stock returns with scikit-learn by engineering 9 predictive features',
      'Visualized historical market insights in a live 12-chart Tableau dashboard for strategic analysis',
      'Delivered 18 key metrics including Sharpe Ratio and Volatility'
    ],
    tech: ['Python', 'dbt', 'Scikit-learn', 'Tableau', 'Financial Analytics'],
    github: 'https://github.com/Ruchirarl/EquiTrack',
    demo: 'https://public.tableau.com/views/EquiTrack-StrategicPortfolioAnalyzer/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
    image: '📈',
    imageUrl: '/equitrack-project.png',
    color: 'from-orange-500 to-red-600'
  }
]

const ProjectCard: React.FC<{ project: typeof projectsData[0] }> = ({ project }) => {
  return (
    <div className="card w-full max-w-2xl mx-auto hover:scale-105 transition-all duration-500">
        <div className={`w-full h-48 bg-gradient-to-br ${project.color} rounded-lg mb-6 flex items-center justify-center overflow-hidden`}>
          <img 
            src={project.imageUrl} 
            alt={`${project.title} project screenshot`}
            className="w-full h-full object-top object-cover rounded-lg"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              const nextElement = e.currentTarget.nextElementSibling as HTMLElement
              if (nextElement) {
                nextElement.style.display = 'flex'
              }
            }}
          />
          <div className="w-full h-full flex items-center justify-center text-6xl" style={{display: 'none'}}>
            {project.image}
          </div>
        </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-pink-400 font-semibold">{project.subtitle}</p>
        </div>
        
        <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
        
        <div>
          <h4 className="text-white font-semibold mb-2">Key Highlights:</h4>
          <ul className="space-y-1">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start">
                <span className="text-primary-400 mr-2 mt-1">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-pink-700 text-white-500 text-xs rounded-full border border-primary-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 text-gray-300 rounded-lg transition-colors duration-200"
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
          >
            <Play className="h-4 w-4" />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export const Projects: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps'
  })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return
    
    const autoScroll = setInterval(() => {
      emblaApi.scrollNext()
    }, 8000) // Auto-scroll every 5 seconds

    return () => clearInterval(autoScroll)
  }, [emblaApi])

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
              Featured Projects
            </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Data-driven solutions that transform complex information into actionable insights
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-dark-800 hover:bg-dark-700 rounded-full border border-dark-600 hover:border-primary-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-dark-800 hover:bg-dark-700 rounded-full border border-dark-600 hover:border-primary-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projectsData.map((project, index) => (
                <div key={index} className="flex-shrink-0 w-full flex justify-center px-4">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {projectsData.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer ${
                index === selectedIndex 
                  ? 'bg-primary-500' 
                  : 'bg-gray-600 hover:bg-primary-400'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>

        {/* View all projects link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Ruchirarl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
          >
            <ExternalLink className="h-5 w-5" />
            <span>View all projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

