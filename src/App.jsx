import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './components/Login';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import ChangePassword from './components/ChangePassword';
import Quiz from './components/Quiz/Quiz';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword'; // Importiere die ForgotPassword-Komponente

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/quiz" element={<PrivateRoute component={Quiz} />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> 
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
