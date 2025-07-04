import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div>
            <main>
                <section className="hero">
                    <div className="hero-text">
                        <h2>  👩‍🎓  StudySmart Blogs</h2>
                        <h3>Welcome to My Blog Website.</h3>
                       <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/aaron-burden-QJDzYT_K8Xg-unspl_1200x768.jpeg?size=690:388'></img>
                       <button>Read Now</button>
                        <p className="sub-links">
                            <a href="#">Free Guide on Ransomware Protection</a> |
                            <a href="#">How to protect your enterprise from APTs</a>
                        </p>
                    </div>
                    <div className="hero-img"> 
                        <h1>Official Blog</h1>
                        <img src="https://media.gettyimages.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=170667a&w=gi&k=20&c=a8wj3XIoV8XrT_Lj0tkuUjWRsmG9pZKgVxFnhySCD9M=" alt="Laptop and Notes" />
                    </div>
                </section>

                <section className="articles">
                    <div className="card">
                        <span className="badge">Infographic</span>
                        <h3>Five Ways to prevent Phishing Attacks</h3>
                        <p>Learn practical ways to avoid phishing scams and secure your digital identity.</p>
                        <button>Read Now</button>
                    </div>
                    <div className="card">
                        <span className="badge">Infographic</span>
                        <h3>Free Guide on Ransomware Protection</h3>
                        <p>Download our free guide to defend your organization against ransomware threats.</p>
                        <button>Read Now</button>
                    </div>
                    <div className="card update-box">
                        <h3>Never miss any of our updates</h3>
                        <p>Subscribe to our blog and get regular cybersecurity updates straight to your inbox.</p>
                        <button>Subscribe</button>
                    </div>
                </section>


            </main>


        </div>
    )
}

export default Home