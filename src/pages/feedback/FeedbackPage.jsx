import { useState } from 'react'
import '../../styles/feedback.css'

function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="feedback-page">
      <div className="container">
        <h1>Feedback & Contact Us</h1>

        {submitted ? (
          <>
            <h2 style={{ textAlign: 'center', color: '#66ff99' }}>Thank you for your feedback!</h2>
            <p style={{ textAlign: 'center' }}>We appreciate your valuable response.</p>
          </>
        ) : (
          <form className="feedback-form" onSubmit={handleSubmit}>
            <h2>Website Feedback</h2>

            <p>1. How do you rate the website design?</p>
            <input type="radio" name="design" /> Excellent<br />
            <input type="radio" name="design" /> Good<br />
            <input type="radio" name="design" /> Average<br />
            <input type="radio" name="design" /> Poor<br />

            <p>2. How easy is the website to navigate?</p>
            <input type="radio" name="navigation" /> Very Easy<br />
            <input type="radio" name="navigation" /> Easy<br />
            <input type="radio" name="navigation" /> Difficult<br />
            <input type="radio" name="navigation" /> Very Difficult<br />

            <p>3. How useful is the content provided on search engines?</p>
            <input type="radio" name="content" /> Very Useful<br />
            <input type="radio" name="content" /> Useful<br />
            <input type="radio" name="content" /> Neutral<br />
            <input type="radio" name="content" /> Not Useful<br />

            <p>4. Which section did you like the most?</p>
            <select>
              <option>Introduction Page</option>
              <option>Learning Page</option>
              <option>Assessment Page</option>
              <option>Overall Website</option>
            </select>

            <p>5. Would you recommend this website to others?</p>
            <input type="radio" name="recommend" /> Yes<br />
            <input type="radio" name="recommend" /> No<br />

            <h2>Suggestions (Optional)</h2>

            <p>6. What improvements would you suggest?</p>
            <textarea rows="4"></textarea>

            <p>7. Any additional comments or feedback?</p>
            <textarea rows="4"></textarea>

            <input type="submit" value="Submit Feedback" />
          </form>
        )}

        <hr />

        <h2>Contact Us</h2>
        <p>Email: <b>abc@gmail.com</b></p>
        <p>Phone: +91 99999 99999</p>
      </div>
    </div>
  )
}

export default FeedbackPage
