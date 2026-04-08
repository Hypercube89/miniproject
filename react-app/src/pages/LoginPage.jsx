import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCookie, setCookie } from '../utils/cookies'
import '../styles/auth.css'

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)

  useEffect(() => {
    const saved = getCookie('username')
    if (saved) {
      setUsername(saved)
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const usernamePattern = /^[a-zA-Z0-9]{4,12}$/
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/

    if (!usernamePattern.test(username)) {
      alert('Invalid username')
      return
    }

    if (!passwordPattern.test(password)) {
      alert('Invalid password')
      return
    }

    setCookie('username', username, remember ? 7 : 1)
    alert('Login Successful')
  }

  return (
    <>
      <div className="bg-overlay"></div>

      <div className="auth-card">
        <h1>Login</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-box">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="toggle-row">
            <label>
              <input type="checkbox" onChange={() => setShowPassword(!showPassword)} />
              Show Password
            </label>
          </div>

          <div className="row">
            <label className="remember">
              <input type="checkbox" onChange={() => setRemember(!remember)} />
              Remember me
            </label>

            <a href="#" className="forgot">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn">Login</button>

          <p className="bottom-text">
            Don&apos;t have an account?
            <Link to="/register"> Register</Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default LoginPage
