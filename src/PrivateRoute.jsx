import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isPasswordChangeRequired, setIsPasswordChangeRequired] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        console.log('Current authenticated user:', user);
        
        // Überprüfen, ob der Benutzer sein Passwort ändern muss
        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          setIsPasswordChangeRequired(true);
        } else {
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error('No current user', err);
       
        setIsAuthenticated(false);
      }
    };

    checkUser();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (isPasswordChangeRequired) {
    return <Navigate to="/change-password" />;
  }

  return isAuthenticated ? <Component {...rest} /> : null; // Deine bestehende 28. Zeile bleibt unverändert
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;