import { Link } from 'react-router-dom'
import { engineList, engineContent } from '../../data/engines'
import '../../styles/learning-home.css'

function LearningHomePage() {
  return (
    <div className="learning-home-page">
      <div className="container">
        <h1>Learning Module</h1>
        <p>Select a search engine to start learning</p>

        {engineList.map((engine) => (
          <div className="option" key={engine}>
            <Link to={`/learning/${engine}`} className="btn">
              Learn {engineContent[engine].name} Search Engine
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LearningHomePage
