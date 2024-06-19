import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import Amplify from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

// Configure Amplify
Amplify.configure(awsconfig);

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone_number: ''
  });
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Updated to use useNavigate

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const { username, password, email, phone_number } = formData;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number
        }
      });
      setIsConfirming(true);
    } catch (error) {
      setErrorMessage(error.message || 'Error signing up');
    }
  };

  const handleConfirmSignUp = async (event) => {
    event.preventDefault();
    const { username } = formData;
    try {
      await Auth.confirmSignUp(username, confirmationCode);
      console.log('User confirmed');
      navigate('/'); // Redirect to login page after successful confirmation
    } catch (error) {
      setErrorMessage(error.message || 'Error confirming sign up');
    }
  };

  return (
    <div className="sign-up-container">
      {isConfirming ? (
        <form onSubmit={handleConfirmSignUp}>
          <label>
            Confirmation Code:
            <input
              type="text"
              name="confirmationCode"
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
            />
          </label>
          <button type="submit">Confirm Sign Up</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      ) : (
        <form onSubmit={handleSignUp}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Sign Up</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      )}
    </div>
  );
};

export default SignUp;
