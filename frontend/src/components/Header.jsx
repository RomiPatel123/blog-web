import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setIsMenuOpen(false);
    navigate('/');
  };

  return (
    <header className="header" role="banner">
      <div className="header-left">
        <h1 className="logo">My Blog</h1>
      </div>

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        <span className="hamburger"></span>
      </button>

      <nav className={`header-right ${isMenuOpen ? 'open' : ''}`} role="navigation" aria-label="Main navigation">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
        <Link to="/search" onClick={() => setIsMenuOpen(false)}>Search</Link>
        <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

        {userId ? (
          <>
            <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
            <button className="btn btn-outline" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
              <button className="btn">Sign Up</button>
            </Link>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <button className="btn btn-outline">Login</button>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
