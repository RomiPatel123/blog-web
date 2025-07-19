import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-wrapper">

        <div className="footer-section brand">
          <h2>My<span>Blog</span></h2>
          <p>Inspire. Inform. Impact.</p>
        </div>

        <div className="footer-section links">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blogs</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: hello@myblog.com</p>
          <p>Phone: +91-9876543210</p>
        </div>

        <div className="footer-section social">
          <h3>Connect</h3>
          <div className="icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <strong>MyBlog</strong> — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
