import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      setShowModal(true); // Show modal after successful sign-up
      setSuccess('Sie haben sich erfolgreich registriert, Please check your email to confirm your account.');
    } catch (err) {
      setError(`Sign up failed: ${err.message}`);
    }
  };

  const handleConfirmSignUp = async (e) => {
    e.preventDefault();
    try {
      await Auth.confirmSignUp(username, confirmationCode);
      setShowModal(false); // Hide modal after successful confirmation
      navigate('/'); // Redirect to login page
    } catch (err) {
      setError(`Confirmation failed: ${err.message}`);
    }
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-container">
        <h2>Registrieren</h2>
        <form onSubmit={handleSignUp}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Benutzername</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Passwort</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Bestätigen Sie Ihren Passwort</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
          <button type="submit">Registrieren</button>
        </form>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <form onSubmit={handleConfirmSignUp}>
              <label>
                Bestätigungscode:
                <input
                  type="text"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Bestätigen</button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
