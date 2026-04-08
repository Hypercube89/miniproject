import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { engineContent } from '../../data/engines'
import '../../styles/assessment-engine.css'

function AssessmentEnginePage() {
  const { engine } = useParams()
  const content = engineContent[engine]
  const [answers, setAnswers] = useState({})

  if (!content) {
    return <Navigate to="/assessment" replace />
  }

  function onSubmit(event) {
    event.preventDefault()

    const total = content.assessment.questions.length
    const allAnswered = content.assessment.questions.every((question) => answers[question.id])

    if (!allAnswered) {
      alert('Please answer all MCQ questions.')
      return
    }

    let score = 0
    for (const question of content.assessment.questions) {
      if (answers[question.id] === question.answer) {
        score += 1
      }
    }

    let message = ''
    if (score === total) {
      message = 'Perfect! Excellent performance!'
    } else if (score >= 3) {
      message = 'Good job! Keep improving!'
    } else {
      message = 'You need more practice. Try again!'
    }

    alert(`Your Score: ${score} / ${total}\n\n${message}`)
  }

  function onReset() {
    setAnswers({})
  }

  return (
    <div className="assessment-engine-page">
      <div className="page">
        <header className="topbar">
          <h1>{content.assessment.title}</h1>
          <p>Answer the questions and submit your assessment</p>
        </header>

        <main className="card">
          <form onSubmit={onSubmit}>
            <section className="block">
              <h2>Multiple Choice Questions</h2>

              {content.assessment.questions.map((question, index) => (
                <div className="q" key={question.id}>
                  <p>{index + 1}) {question.prompt}</p>
                  {question.options.map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name={question.id}
                        checked={answers[question.id] === option}
                        onChange={() => {
                          setAnswers((prev) => ({ ...prev, [question.id]: option }))
                        }}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ))}
            </section>

            <section className="block">
              <h2>Descriptive Questions</h2>
              {content.assessment.descriptive.map((question, index) => (
                <div className="q" key={question}>
                  <p>{index + 6}) {question}</p>
                  <textarea rows="4" placeholder="Write your answer here..."></textarea>
                </div>
              ))}
            </section>

            <div className="actions">
              <button type="submit" className="btn primary">Submit Assessment</button>
              <button type="button" className="btn ghost" onClick={onReset}>Reset Answers</button>
            </div>
          </form>
        </main>

        <footer className="footer">
          <a href="#/assessment">Back to Topics</a>
        </footer>
      </div>
    </div>
  )
}

export default AssessmentEnginePage
