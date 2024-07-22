// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; // Import the specific CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/cycle-tracker" className="nav-link">Cycle Tracker</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
