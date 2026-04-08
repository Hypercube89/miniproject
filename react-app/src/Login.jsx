import { useState, useEffect } from "react";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  // Cookie functions
  function Login(props) {
  return <h2>{props.title}</h2>;
}
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (let c of ca) {
      c = c.trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
  }

  // Autofill
  useEffect(() => {
    let saved = getCookie("username");
    if (saved) setUsername(saved);
  }, []);

  // Submit
  function handleSubmit(e) {
    e.preventDefault();

    const usernamePattern = /^[a-zA-Z0-9]{4,12}$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

    if (!usernamePattern.test(username)) {
      alert("Invalid username");
      return;
    }

    if (!passwordPattern.test(password)) {
      alert("Invalid password");
      return;
    }

    if (remember) setCookie("username", username, 7);
    else setCookie("username", username, 1);

    alert("Login Successful ✅");
  }

  return (
    <>
      <div className="bg-overlay"></div>

      <div className="login-card">
        <h1>Login</h1>

        <form className="login-form" onSubmit={handleSubmit}>
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
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label style={{ color: "white", fontSize: "14px" }}>
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </label>
          </div>

          <div className="row">
            <label className="remember">
              <input
                type="checkbox"
                onChange={() => setRemember(!remember)}
              />
              Remember me
            </label>

            <a href="#" className="forgot">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn">Login</button>

          <p className="bottom-text">
            Don't have an account?
            <a href="/register"> Register</a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;