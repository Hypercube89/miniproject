import React, { Component } from "react";
import "./register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      dob: "",
      password: "",
      confirmPassword: "",
      show: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
    
  togglePassword = () => {
    this.setState({ show: !this.state.show });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, dob, password, confirmPassword } = this.state;

    const namePattern = /^[a-zA-Z ]{3,30}$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

    const today = new Date();
    const selectedDate = new Date(dob);

    if (!namePattern.test(name)) {
      alert("Invalid name");
      return;
    }

    if (selectedDate > today) {
      alert("Invalid DOB");
      return;
    }

    if (!passwordPattern.test(password)) {
      alert("Weak password");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registration Successful ✅");
  };

  render() {
    return (
      <>
        <div className="bg-overlay"></div>

        <div className="register-card">
          <h1>Register</h1>

          <form className="register-form" onSubmit={this.handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-box">
              <label className="dob-label">Age (Date of Birth)</label>
              <input type="date" name="dob" onChange={this.handleChange} />
            </div>

            <div className="input-box">
              <input
                type={this.state.show ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-box">
              <input
                type={this.state.show ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
            </div>

            <div style={{ marginBottom: "15px", textAlign: "left" }}>
              <label style={{ color: "white", fontSize: "14px" }}>
                <input type="checkbox" onChange={this.togglePassword} />
                Show Passwords
              </label>
            </div>

            <button type="submit" className="btn">
              Create Account
            </button>

            <p className="bottom-text">
              Already have an account?
              <a href="/login"> Login</a>
            </p>
          </form>
        </div>
      </>
    );
  }
}

export default Register;