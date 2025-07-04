import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <div>


            <main>
                <div className="contact-container">
                    <div className="left">
                        <h1>CONTACT US</h1>
                    </div>
                    <div className="right">
                        <form className="contact-form">
                            <h2>Contact Us Here</h2>
                            <label for="name">Full Name</label>
                            <input type="text" id="name" placeholder="John" />

                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="example@gmail.com" />

                            <label for="message">Your Message</label>
                            <textarea id="message" rows="4" placeholder="Write your message..."></textarea>

                            <button type="submit">Send</button>
                        </form>
                        <div className="contact-info">
                            <h3>Or Here</h3>
                            <p><strong>Email:</strong> livebloggerofficial@gmail.com</p>
                            <h4>Get Social:</h4>
                            <div className="social-icons">
                                <a href="#"><img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/698/small/facebook-logo-facebook-icon-transparent-free-png.png" alt="Facebook" /></a>
                                <a href="#"><img src="https://www.citypng.com/public/uploads/preview/hd-square-twitter-button-icon-png-7017516950551447u17aee6vo.png" alt="Twitter" /></a>
                                <a href="#"><img src="https://img.freepik.com/premium-psd/instagram-application-logo_23-2151544088.jpg?semt=ais_hybrid&w=740" alt="Instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </main>


        </div>

    )
}

export default Contact