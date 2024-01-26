import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from 'axios';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters long.");
      return;
    }

    if (!/\d{2}/.test(password)) {
      setPasswordError("Password should contain at least 2 numbers.");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Password and Confirm Password do not match.");
      return;
    }

    setPasswordError("");

    axios.post('http://localhost:5173/register', { name, email, password })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div className="signup-container">
      <div className="header">
        <h2>Register</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {passwordError && <p className="error-message">{passwordError}</p>}

        <div className="signup-button">
          <button type="submit">Signup</button>
        </div>
      </form>

      <p>Already Have Account? <Link to="/login">Login Here</Link></p>
    </div>
  );
}

export default Signup;


//import { Link } from "react-router-dom";
