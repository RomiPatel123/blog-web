import React from 'react'
import './Dashboard.css'
import Sidebar from '../components/Sidebar'
const Dashboard = () => {
    return (
        <div>
                <section className="home">
                            {/* <Sidebar/> */}


                    <div className="features">
                    <h1>Get your <span className="highlight">Education</span> today!</h1>
                    <div className='fff'>
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
                    </div>
                </section>
        </div>

    )
}

export default Dashboard