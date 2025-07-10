import React from 'react'
import './Sidebar.css'
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>

      <div className="Sidebar">
        <div className="logo"><span>Visit Blogs</span></div>

        <div className="menu-item active"><i className="fa fa-home"></i>🏠 Dashboard</div>

       <Link to="/dashboard/Newpost"> <div className="menu-item"><i className="fa fa-plus-circle"></i>  ➕ New Post</div></Link>
        
        {/* <div class="menu-item"><i class="fa fa-th-large"></i> Category</div> */}
        <Link to="/dashboard/Mypost"><div className="menu-item"><i className="fa fa-file-alt"></i>     📰 My Post</div></Link>
        
       <Link to="/dashboard/Delete"> <div className="menu-item"><i className="fa fa-dollar-sign"></i>    🗑  Delete</div></Link>
        {/* <div class="menu-item"><i class="fa fa-chart-bar"></i> Analytics</div> */}

        <div className="support">
          <img src="https://cdn-icons-png.flaticon.com/512/706/706830.png" alt="Support"></img>
          Support
        </div>
      </div>
    </div>
  )
}

export default Sidebar