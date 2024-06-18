import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './components/Login';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import ChangePassword from './components/ChangePassword';
import Quiz from './components/Quiz/Quiz';
import SignUp from './components/SignUp'; // Importiere die SignUp-Komponente

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/quiz" element={<Quiz />} /> 
      <Route path="/sign-up" element={<SignUp />} /> 
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
