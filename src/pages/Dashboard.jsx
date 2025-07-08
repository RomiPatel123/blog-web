import React from 'react'
import './Dashboard.css'
import Sidebar from '../components/Sidebar'
const Dashboard = () => {
    return (
        //<div>
        //     <div className="sidebar">
        //         <div className="logo">🟠<span>Visit Blogs</span></div>

        //         <div className="menu-item active"><i className="fa fa-home"></i>🏠 Dashboard</div>
        //         <div className="menu-item"><i className="fa fa-plus-circle"></i> ➕ New Post</div>
        //         {/* <div class="menu-item"><i class="fa fa-th-large"></i> Category</div> */}
        //         <div className="menu-item"><i className="fa fa-file-alt"></i>    📰 My Post</div>
        //         <div className="menu-item"><i className="fa fa-dollar-sign"></i> 🗑  Delete</div>
        //         {/* <div class="menu-item"><i class="fa fa-chart-bar"></i> Analytics</div> */}

        //         <div className="support">
        //             <img src="https://cdn-icons-png.flaticon.com/512/706/706830.png" alt="Support"></img>
        //             Support
        //         </div>


                <section className="home">
                            <Sidebar/>

                    <h1>Get your <span className="highlight">Education</span> today!</h1>

                    <div className="features">
                        <div className="feature-box">
                            <i className="fas fa-globe"></i>
                            <h3>Online Courses</h3>
                            <p>VIEW MORE</p>
                        </div>
                        <div className="feature-box">
                            <i className="fas fa-school"></i>
                            <h3>Our Library</h3>
                            <p>VIEW MORE</p>
                        </div>
                        <div className="feature-box">
                            <i classN="fas fa-chalkboard-teacher"></i>
                            <h3>Our Teachers</h3>
                            <p>VIEW MORE</p>
                        </div>
                    </div>
                </section>

            // </div>


        // </div>
    )
}

export default Dashboard