import React from 'react'
import './Course.css'
const Course = () => {
    return (
        <div>
            <main>
                <section className="hero">
                    <div className="hero-text">
                        <h1>Landing Page</h1>
                        <p>Template for Business. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="buttons">
                            <button className="btn-primary">TRY NOW</button>
                            <button className="btn-secondary">SEE MORE</button>
                        </div>
                    </div>
                    <div className="hero-img"> 
                        <img src="https://ieltsmaterial.com/wp-content/uploads/2021/08/IELTS-Writing-Task-2-Discussion-Essay-Topic_-Discuss-the-benefits-of-group-study-and-individual-learning.jpg" alt="Online Course"></img>
                    </div>
                </section>

        
                <section className="content-section">
                    <div className="box">
                        <h3>📰 News</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="box">
                        <h3>✍️ Blog</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Course