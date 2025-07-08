import React from 'react'
import './About.css'
const About = () => {
    return (
        <div>
            <main>
                <section className="romi">
                    <div className="romi-text">
                        <h1>We combine data and technology for world-leading enterprise solutions</h1>
                        <p>Launch your potential with our Enterprise Technology Solutions. Let us help you unlock the full potential of your business with smart and innovative solutions.</p>
                        <a href="#" className="btn">Know more about us</a>
                    </div>
                    <div className="romi-image">
                        <img src="https://jaro-website.s3.ap-south-1.amazonaws.com/2025/06/What-is-Group-Discussion-Importance-Types-and-Tips-to-Succeed.webp" alt="Team Discussion"></img>
                    </div>
                </section>

                
                <section className="stats">
                    <div>
                        <h2>We have succeeded in increasing various company services with innovations and product improvement</h2>
                        <p><strong>300+</strong> Projects completed with innovation</p>
                        <p><strong>180+</strong> Experts and professionals involved</p>
                        <img src="https://plus.unsplash.com/premium_photo-1661329859712-76d8a4500fdb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvdXAlMjBkaXNjdXNzaW9ufGVufDB8fDB8fHww" alt="Meeting" />
                    </div>
                </section>


                
                <section className="business-model">
                    <h2>They like how we structure their business models</h2>
                    <ul>
                        <li>✔ Define the strategy</li>
                        <li>✔ Re-structure business model</li>
                        <li>✔ Teaming and evaluation</li>
                    </ul>
                </section>

            
                <section className="team">
                    <h2>Meet Our Team</h2>
                    <div className="team-grid">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member" />
                        <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="Team Member" />
                        <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Team Member" />
                        <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Team Member" />
                    </div>
                </section>

                
                <section className="newsletter">
                    <h3>Add your email to get our weekly updates</h3>
                    <form>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </section>



            </main>
        </div>
    )
}

export default About
