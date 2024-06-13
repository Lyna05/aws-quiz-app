import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Quiz from './components/Quiz';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<PrivateRoute component={Quiz} />} />
      </Routes>
    </Router>
  );
}

export default App;
