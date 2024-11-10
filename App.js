// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to the Authentication App</h1>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<h2>Welcome! Please login or register</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
