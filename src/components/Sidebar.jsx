import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div>
        
            <div className="Sidebar">
                <div className="logo">🟠<span>Visit Blogs</span></div>

                <div className="menu-item active"><i className="fa fa-home"></i>🏠 Dashboard</div>
                <div className="menu-item"><i className="fa fa-plus-circle"></i> ➕ New Post</div>
                {/* <div class="menu-item"><i class="fa fa-th-large"></i> Category</div> */}
                <div className="menu-item"><i className="fa fa-file-alt"></i>    📰 My Post</div>
                <div className="menu-item"><i className="fa fa-dollar-sign"></i> 🗑  Delete</div>
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