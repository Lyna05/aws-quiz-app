import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmationPassword) {
      setError("New password and confirmation password do not match");
      return;
    }

    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(user, oldPassword, newPassword);
      setSuccess("Password changed successfully");
      setError(null);
    } catch (error) {
      console.error('Error changing password:', error);
      setError('Failed to change password. Please try again.');
      setSuccess(null);
    }
  };

  return (
    <form onSubmit={handleChangePassword}>
      <input
        type="password"
        placeholder="Current Password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        value={confirmationPassword}
        onChange={(e) => setConfirmationPassword(e.target.value)}
      />
      <button type="submit">Change Password</button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
};

export default ChangePassword;
