import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Auth.signIn(username, password);
      navigate('/quiz'); // Navigiere zum Quiz nach erfolgreichem Login
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-page">
      <h1 className="welcome-text">Willkommen bei der AWS Quiz Master App</h1>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Email</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-links">
          <button onClick={() => navigate('/sign-up')} className="sign-up-button">
            Sign Up
          </button>
          <button onClick={() => navigate('/forgot-password')} className="forgot-password-link">
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
