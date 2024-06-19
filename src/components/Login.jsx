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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Auth.signIn(username, password);
      navigate('/quiz'); // Navigiere zum Quiz nach erfolgreichem Login
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
      setError(''); // Clear any previous errors
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

  return (
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
  );
};

export default Login;
