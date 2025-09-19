import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ExternalLink, Calendar, Clock, BookOpen, ArrowRight, ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react'
import { fetchMediumArticles, formatArticleDate, testMediumRSS } from '../../utils/mediumRSS'

interface MediumArticle {
  title: string
  link: string
  pubDate: string
  description: string
  excerpt: string
  categories: string[]
}

const ArticleCard: React.FC<{ article: MediumArticle }> = ({ article }) => {

  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div className="card h-[36rem] hover:border-primary-500 transition-all duration-300 group-hover:shadow-xl flex flex-col">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-200 line-clamp-2">
              {article.title}
            </h3>
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatArticleDate(article.pubDate)}</span>
              <Clock className="h-4 w-4 ml-4 mr-2" />
              <span>5 min read</span>
            </div>
          </div>
          <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-primary-400 transition-colors duration-200 flex-shrink-0 ml-4" />
        </div>
        
        {/* Description Section */}
        <div className="mb-4">
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
            {article.description}
          </p>
        </div>
        
        {/* Excerpt Section */}
        <div className="mb-4 flex-grow">
          <h4 className="text-white font-semibold mb-3 text-sm">Article Excerpt:</h4>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-6">
            {article.excerpt}
          </p>
        </div>
        
        {/* Categories Section */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {article.categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-pink-700 text-white-500 text-xs rounded-full border border-primary-500/30"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        
        {/* Button Section */}
        <div className="mt-auto pt-4">
          <button className="w-full px-4 py-3 bg-blue-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2">
            <span>Read Full Article</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </a>
  )
}

export const MediumArticles: React.FC = () => {
  const [articles, setArticles] = useState<MediumArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
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


  const loadArticles = async () => {
    try {
      setLoading(true)
      setError(null)
      console.log('Loading articles...')
      
      // Test the RSS function first
      const testResults = await testMediumRSS()
      console.log('Test results:', testResults)
      
      const fetchedArticles = await fetchMediumArticles()
      console.log('Fetched articles:', fetchedArticles)
      setArticles(fetchedArticles)
      
      if (fetchedArticles.length === 0) {
        setError('No articles found. This might be because the RSS feed is empty or there\'s a connection issue.')
      }
    } catch (error) {
      console.error('Error loading articles:', error)
      setError(`Failed to load articles: ${error instanceof Error ? error.message : 'Unknown error'}`)
      setArticles([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadArticles()
  }, [])

  return (
    <section id="medium" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
            Medium Blogs
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Insights, tutorials, and thoughts on data science, business analytics, and technology
          </p>
          
          {/* Error message */}
          {error && (
            <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg max-w-md mx-auto">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="card animate-pulse">
                <div className="h-6 bg-dark-700 rounded mb-4"></div>
                <div className="h-4 bg-dark-700 rounded mb-2"></div>
                <div className="h-4 bg-dark-700 rounded mb-4 w-3/4"></div>
                <div className="h-20 bg-dark-700 rounded mb-4"></div>
                <div className="flex space-x-2 mb-4">
                  <div className="h-6 bg-dark-700 rounded w-16"></div>
                  <div className="h-6 bg-dark-700 rounded w-20"></div>
                </div>
                <div className="h-4 bg-dark-700 rounded w-24"></div>
              </div>
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <div className="mb-6">
              <BookOpen className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No articles found</h3>
              <p className="text-gray-500">Unable to load articles from Medium. Please try refreshing.</p>
            </div>
            <button
              onClick={loadArticles}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <RefreshCw className="h-5 w-5" />
              <span>Try Again</span>
            </button>
          </div>
        ) : (
          <>
            <div className="relative max-w-6xl mx-auto">
              {/* Navigation Buttons */}
              <button
                className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 p-3 bg-dark-800 hover:bg-dark-700 rounded-full border border-dark-600 hover:border-primary-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
                aria-label="Previous articles"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <button
                className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 p-3 bg-dark-800 hover:bg-dark-700 rounded-full border border-dark-600 hover:border-primary-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={scrollNext}
                disabled={nextBtnDisabled}
                aria-label="Next articles"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>

              {/* Carousel */}
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {articles.map((article, index) => (
                    <div key={index} className="flex-shrink-0 w-1/2 px-4">
                      <ArticleCard article={article} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Article indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(articles.length / 2) }).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer ${
                    index === Math.floor(selectedIndex / 2)
                      ? 'bg-primary-500'
                      : 'bg-gray-600 hover:bg-primary-400'
                  }`}
                  onClick={() => emblaApi?.scrollTo(index * 2)}
                />
              ))}
            </div>

            {/* View all articles link */}
            <div className="text-center mt-12">
              <a
                href="https://medium.com/@ruchirarl24"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
              >
                <BookOpen className="h-5 w-5" />
                <span>Read all blogs on Medium</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </>
        )}

      </div>
    </section>
  )
}

