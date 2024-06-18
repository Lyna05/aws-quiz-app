import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await Auth.forgotPassword(email);
      setSuccess('Password reset code sent to your email.');
    } catch (err) {
      setError('Failed to send password reset code. Please try again.');
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
          <button type="submit">Send Code</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
