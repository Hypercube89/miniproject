import { Link } from 'react-router-dom'
import { engineList, engineContent } from '../../data/engines'
import '../../styles/assessment-home.css'

function AssessmentHomePage() {
  return (
    <div className="assessment-home-page">
      <div className="card">
        <h1>Take Assessment</h1>
        <p>Select a topic and start your quiz</p>

        <div className="btn-group">
          {engineList.map((engine) => (
            <Link key={engine} to={`/assessment/${engine}`} className="topic-btn">
              {engineContent[engine].name} Assessment
            </Link>
          ))}
        </div>

        <div className="back">
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default AssessmentHomePage
