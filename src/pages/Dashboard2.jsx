import React from 'react'
import './Dashboard2.css'
const Dashboard2 = () => {
    return (
        <div>
           
            <div className="dashboard-header">
                <h2>MEMBER DASHBOARD</h2>
                <p>Hey! Welcome to Members Dashboard!</p>
            </div>

            <div className="dash">
                <div className="dash training">
                    <i className="fa fa-graduation-cap"></i>
                    <h3>Training Courses</h3>
                    <p>A selection of our best courses and training material</p>
                    <button>Access Now <i className="fa fa-arrow-right"></i></button>
                </div>

                <div className="dash resources">
                    <i className="fa fa-dropbox"></i>
                    <h3>Resources</h3>
                    <p>You will find useful resources and plugins</p>
                    <button>Go There <i className="fa fa-arrow-right"></i></button>
                </div>

                <div className="dash podcasts">
                    <i className="fa fa-microphone"></i>
                    <h3>Postcasts</h3>
                    <p>Coming soon with amazing podcasts</p>
                    <button>Coming Soon <i className="fa fa-arrow-right"></i></button>
                </div>

                <div className="dash user">
                    <i className="fa fa-user-gear"></i>
                    <h3>User Profile</h3>
                    <p>You will find useful resources and plugins</p>
                    <button>Access Now <i className="fa fa-arrow-right"></i></button>
                </div>
            </div>


        </div>
    )
}

export default Dashboard2