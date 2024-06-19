import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
        username: email, // Using email as the username
        password,
        attributes: {
          email,
        },
      });
      setSuccess('Sie haben sich erfolgreich registriert, Please check your email to confirm your account.');
      setTimeout(() => navigate('/login'), 3000); // Navigate to login after 3 seconds
    } catch (err) {
      setError('Sign up failed. Please try again.');
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
            />
          </div>
          <div>
            <label>Passwort</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Bestätigen Sie Ihren Passwort</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
          <button type="submit">Registrieren</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
