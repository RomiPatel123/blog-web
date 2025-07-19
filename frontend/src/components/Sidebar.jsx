import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <span>Visit Blogs</span>
      </div>

      {/* Menu Items */}
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
      >
        <i className="fa fa-home"></i> Dashboard
      </NavLink>

      <NavLink
        to="/dashboard/Newpost"
        className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
      >
        <i className="fa fa-plus-circle"></i> New Post
      </NavLink>

      <NavLink
        to="/dashboard/Mypost"
        className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
      >
        <i className="fa fa-file-alt"></i> My Post
      </NavLink>


      {/* Support Section */}
      <div className="support">
        <img
          src="https://cdn-icons-png.flaticon.com/512/706/706830.png"
          alt="Support"
        />
        Support
      </div>
    </div>
  );
};

export default Sidebar;
