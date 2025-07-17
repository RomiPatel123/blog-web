import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import './DashboardHome.css'; 
const DashboardHome = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <Sidebar />
      </div>
      <div className="dashboard-main">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardHome;
