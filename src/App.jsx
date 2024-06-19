import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ChangePassword from './components/ChangePassword';
import Quiz from './components/Quiz/Quiz';
import SignUp from './components/SignUp';

const App = () => (
  <Router>
    <Routes>
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>
);


export default App;
