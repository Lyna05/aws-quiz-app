import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Quiz from './components/Quiz';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<PrivateRoute component={Quiz} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
