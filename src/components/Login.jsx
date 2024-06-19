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
      setError('Das Einloggen hat nicht geklappt, bitte versuchen Sie es nochmal.');
    }
  };

  return (
    <div className="login-container">
      <h2>Einloggen</h2>
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
          <label>Passwort</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className="login-button">Einloggen</button>
      </form>
      <div className="login-links">
        <button onClick={() => navigate('/sign-up')} className="sign-up-button">
          Registrieren
        </button>
        <button onClick={() => navigate('/forgot-password')} className="forgot-password-link">
          Passwort vergessen?
        </button>
      </div>
    </div>
  );
};

export default Login;