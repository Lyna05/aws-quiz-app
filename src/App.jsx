import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './components/Login'; // Pfad zu Login.jsx sicherstellen
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
