import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/App Logo.png" alt="DrStethos Logo" className="logo-img"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/40x40/00a651/ffffff?text=D'; }} />
        <span>DrStethos</span>
      </Link>
      <div className="nav-links">
        {location.pathname === '/' ? (
          <>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#how">How It Works</a>
            <a href="#pricing">Pricing</a>
            <Link to="/contact">Contact Us</Link>
          </>
        ) : (
          <>
            <Link to="/#about">About</Link>
            <Link to="/#features">Features</Link>
            <Link to="/#how">How It Works</Link>
            <Link to="/#pricing">Pricing</Link>
            <Link to="/contact">Contact Us</Link>
          </>
        )}
      </div>
      {location.pathname === '/' ? (
        <button className="btn-primary">Get Started</button>
      ) : (
        <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>Go Back</Link>
      )}
    </nav>
  );
}

export default Navbar;
