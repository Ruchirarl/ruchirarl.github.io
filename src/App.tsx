import { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Certifications } from './components/sections/Certifications'
import { MediumArticles } from './components/sections/MediumArticles'
import { Contact } from './components/sections/Contact'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Default to dark theme as per user preference
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div className="min-h-screen bg-dark-900 text-white">
        <Navigation />
        <main>
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <MediumArticles />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App

