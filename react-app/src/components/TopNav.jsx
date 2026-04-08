import { Link } from 'react-router-dom'

function TopNav() {
  return (
    <nav className="learning-nav">
      <Link to="/">Home</Link>
      <Link to="/learning">Learning</Link>
      <Link to="/assessment">Assessment</Link>
      <Link to="/feedback">Feedback</Link>
    </nav>
  )
}

export default TopNav
