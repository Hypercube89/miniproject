import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { quotes } from '../../data/engines'
import '../../styles/home.css'

function HomePage() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const quote = useMemo(() => {
    const index = Math.floor(Math.random() * quotes.length)
    return quotes[index]
  }, [])

  function handleSearch() {
    const value = query.trim().toLowerCase()

    if (value === 'google') {
      navigate('/learning/google')
      return
    }
    if (value === 'bing') {
      navigate('/learning/bing')
      return
    }
    if (value === 'duckduckgo' || value === 'duck') {
      navigate('/learning/duckduckgo')
      return
    }

    alert('Please type: Google, Bing, or DuckDuckGo')
  }

  return (
    <div className="home-shell">
      <div className="top-bar">
        <div className="quote">
          <span>Quote of the Day: {quote}</span>
        </div>

        <div className="auth">
          <Link to="/login" className="auth-btn">Sign in</Link>
          <Link to="/register" className="auth-btn signup">Sign up</Link>
        </div>
      </div>

      <div className="hero">
        <h1 className="logo">Search<span>Learn</span></h1>

        <p className="tagline">
          Learn Search Engines • Explore Tools • Test Yourself
        </p>

        <div className="search-area">
          <input
            type="text"
            className="search-box"
            placeholder="Search: Google, Bing, DuckDuckGo..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch()
              }
            }}
          />
          <button type="button" className="search-icon" onClick={handleSearch}>🔍</button>
        </div>

        <div className="btn-row">
          <Link to="/learning" className="btn primary">Start Learning</Link>
          <Link to="/assessment" className="btn secondary">Take Assessment</Link>
        </div>

        <div className="bottom-link">
          <Link to="/feedback" className="feedback-btn">Feedback / Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
