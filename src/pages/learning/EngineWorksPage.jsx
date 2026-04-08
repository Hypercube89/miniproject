import { Navigate, useParams } from 'react-router-dom'
import { engineContent } from '../../data/engines'
import '../../styles/works.css'

function EngineWorksPage() {
  const { engine } = useParams()
  const content = engineContent[engine]

  if (!content) {
    return <Navigate to="/learning" replace />
  }

  return (
    <div className="works-page">
      <div className="container">
        <h1>{content.howItWorksTitle}</h1>

        <p>
          Search engines like Google and Bing help you find information on the internet.
          Let&apos;s understand the process step by step.
        </p>

        <hr />

        <h2>1. Crawling</h2>
        <p>Bots (called crawlers or spiders) scan websites and follow links to discover content.</p>
        <img src={content.workImages.crawling} alt="Crawling" className="section-img" />
        <ul>
          <li>Explores web pages</li>
          <li>Finds new content</li>
          <li>Follows links</li>
        </ul>

        <hr />

        <h2>2. Indexing</h2>
        <p>Data is stored in a huge database called an index for quick access.</p>
        <img src={content.workImages.indexing} alt="Indexing" className="section-img" />
        <ul>
          <li>Stores content</li>
          <li>Organizes information</li>
          <li>Prepares for search</li>
        </ul>

        <hr />

        <h2>3. Ranking</h2>
        <p>Results are ranked based on relevance, quality, and popularity.</p>
        <img src={content.workImages.ranking} alt="Ranking" className="section-img" />
        <ul>
          <li>Uses algorithms</li>
          <li>Shows best results first</li>
          <li>Considers many factors</li>
        </ul>

        <hr />

        <h2>Summary</h2>
        <p>Crawling -&gt; Indexing -&gt; Ranking</p>

        <hr />

        <a href={`#/learning/${engine}`}>Back to {content.name} Learning Page</a>
      </div>
    </div>
  )
}

export default EngineWorksPage
