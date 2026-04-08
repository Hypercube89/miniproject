import { Navigate, useParams } from 'react-router-dom'
import TopNav from '../../components/TopNav'
import { engineContent } from '../../data/engines'
import '../../styles/learning-engine.css'

function LearningEnginePage() {
  const { engine } = useParams()
  const content = engineContent[engine]

  if (!content) {
    return <Navigate to="/learning" replace />
  }

  return (
    <div className="learning-engine-page">
      <TopNav />

      <section>
        <article>
          <h1>{content.title}</h1>

          <p>{content.description}</p>

          <h2>Key Features of {content.name}</h2>
          <ul>
            {content.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <h2>Advantages of {content.name}</h2>
          <p>{content.advantages}</p>

          <h2>How it works?</h2>
          <p>
            <a href={`#/works/${engine}`}>Click Here to Check How the Engine works</a>
          </p>
        </article>
      </section>

      <footer>
        <p>&copy; 2026 Search Learning Project</p>
      </footer>
    </div>
  )
}

export default LearningEnginePage
