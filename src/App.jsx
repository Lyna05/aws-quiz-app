import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './components/Login';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import ChangePassword from './components/ChangePassword'; // Importiere die ChangePassword-Komponente
import Quiz from './components/Quiz/Quiz.jsx'; 



const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
      <Route path="/change-password" element={<ChangePassword />} /> {ChangePassword}
      <Route path="/quiz" element={<PrivateRoute component={Quiz} />} /> {Quiz}
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
