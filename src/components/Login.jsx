import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Auth.signIn(username, password);
      navigate('/quiz');
    } catch (err) {
      setError('Das Einloggen hat nicht geklappt, bitte versuchen Sie es nochmal.');
      console.error('Error during signIn:', err);
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      await Auth.forgotPassword(forgotPasswordEmail);
      setIsConfirming(true);
      setError('');
    } catch (err) {
      console.error('Error during forgotPassword:', err);
      setError('Das Zurücksetzen des Passworts ist fehlgeschlagen, bitte versuchen Sie es erneut.');
    }
  };

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      await Auth.forgotPasswordSubmit(forgotPasswordEmail, confirmationCode, newPassword);
      setShowForgotPasswordModal(false);
      setIsConfirming(false);
      navigate('/login');
    } catch (err) {
      console.error('Error during forgotPasswordSubmit:', err);
      setError('Das Zurücksetzen des Passworts ist fehlgeschlagen, bitte versuchen Sie es erneut.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

 

  const closedEyeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
      <path d="M32,12C21.6,12,12.4,18.4,8,28c4.4,9.6,13.6,16,24,16s19.6-6.4,24-16C51.6,18.4,42.4,12,32,12z M32,36c-6.6,0-12-5.4-12-12s5.4-12,12-12s12,5.4,12,12S38.6,36,32,36z" fill="#000" />
      <line x1="10" y1="10" x2="54" y2="54" stroke="#000" strokeWidth="4" />
    </svg>
  );
  const openEyeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
      <circle cx="32" cy="32" r="6" fill="#000" />
      <path d="M32,12C21.6,12,12.4,18.4,8,28c4.4,9.6,13.6,16,24,16s19.6-6.4,24-16C51.6,18.4,42.4,12,32,12z M32,36c-6.6,0-12-5.4-12-12s5.4-12,12-12s12,5.4,12,12S38.6,36,32,36z" fill="#000" />
    </svg>
  );

  return (
    <div className="login-page">
      <h1>Willkommen bei der AWS Quiz Master App</h1>
      <div className="login-container">
        <h2>Einloggen</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Benutzername</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Passwort</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="eye-icon"
                onClick={togglePasswordVisibility}
              >
                {showPassword ?  openEyeIcon : closedEyeIcon}
              </span>
            </div>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className="login-button">Einloggen</button>
        </form>
        <div className="login-links">
          <button onClick={() => navigate('/sign-up')} className="sign-up-button">
            Registrieren
          </button>
          <button onClick={() => setShowForgotPasswordModal(true)} className="forgot-password-link">
            Passwort vergessen?
          </button>
        </div>

        {showForgotPasswordModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowForgotPasswordModal(false)}>&times;</span>
              {!isConfirming ? (
                <form onSubmit={handleForgotPasswordSubmit}>
                  <label>
                    Geben Sie Ihre Email ein:
                    <input
                      type="email"
                      value={forgotPasswordEmail}
                      onChange={(e) => setForgotPasswordEmail(e.target.value)}
                      required
                    />
                  </label>
                  <button type="submit">Code senden</button>
                </form>
              ) : (
                <form onSubmit={handleResetPasswordSubmit}>
                  <label>
                    Bestätigungscode:
                    <input
                      type="text"
                      value={confirmationCode}
                      onChange={(e) => setConfirmationCode(e.target.value)}
                      required
                    />
                  </label>
                  <label>
                    Neues Passwort:
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </label>
                  <button type="submit">Passwort zurücksetzen</button>
                </form>
              )}
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
