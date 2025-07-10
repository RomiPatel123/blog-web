import React from 'react'
import './About.css'
const About = () => {
    return (
        <div>
            <main>
                <section className="romi">
                    <div className="romi-text">
                        <h1>Welcome to my blog website.Create a beautiful blog that fits your style.</h1>
                        <p>Share your story with the world. Create a beautiful, personalized blog that fits your brand. Grow your audience with built-in marketing tools, or transform your passion into revenue by gating access with a paywall.Know about more in my blog website click in bellow button (know more about us)</p>
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
                        <img src="https://media.assettype.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2021%2F01%2F05%2Fgroup-discussion-istock-603992138-935358-1609832067.jpg?w=undefined&auto=format%2Ccompress&fit=max" alt="Meeting" />
                       
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
