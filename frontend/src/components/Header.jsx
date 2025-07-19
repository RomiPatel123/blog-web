import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
// import logo from '../../assets/logo.png'; // Ensure logo.png exists in assets folder

const Header = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setIsMenuOpen(false);
    navigate('/');
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  return (
    <header className="header">
      <div className="header-left" onClick={() => navigate('/')}>
        {/* <img src={logo} alt="Logo" className="logo-img" />
        <h1 className="logo">My Blog</h1> */}
        <img src="https://cdn-icons-png.freepik.com/512/10729/10729041.png" alt="" className='logo-img' />
      </div>

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
        <span className="hamburger"></span>
      </button>

      <nav className={`header-right ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-links">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          {userId && (
            <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
          )}
        </div>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className="auth-buttons">
          {userId ? (
            <button className="btn btn-outline" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link to="/signup"><button className="btn">Sign Up</button></Link>
              <Link to="/login"><button className="btn btn-outline">Login</button></Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
