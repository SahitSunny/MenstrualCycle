import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import CycleTracker from './components/CycleTracker';

function App() {
  return (
    <Router>
      <div> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cycle-tracker" element={<CycleTracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
