import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import './ChangePassword.css';


const ChangePassword = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(user, oldPassword, newPassword);
      setSuccess('Ihr Passwort wurde erfolgreich geändert.');
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError('Ihr Passwort konnte nicht geändert werden, bitte versuchen Sie es noch einmal.');
    }
  };

  return (
    <div className="change-password-page">
      <div className="change-password-container">
        <h2>Change Password</h2>
        <form onSubmit={handleChangePassword}>
          <div>
            <label>Altes Passwort</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Neues Passwort</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
          <button type="submit">Passwort Ändern</button>
        </form>
        <button onClick={() => navigate('/')} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;