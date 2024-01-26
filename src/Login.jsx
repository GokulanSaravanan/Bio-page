import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Add this line

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5173/login', { email, password })
      .then(result => {
        console.log(result);
        if(result.data==="Success"){
            navigate('/home')
        }  
      })
      .catch(err => console.log(err));
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="user-email">Email:</label>
        <input
          type="email"
          id="user-email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="user-password">Password:</label>
        <input
          type="password"
          id="user-password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="form-group">
        <button type="button" onClick={handleSubmit} className="login-button">Login</button>
      </div>
    </div>
  );
}

export default Login;
