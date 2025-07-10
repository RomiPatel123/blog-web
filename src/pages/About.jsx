import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid');
    } else {
      alert('Subscribed successfully!');
      setEmail('');
      setError('');
    }
  };

  return (
    <div>
      <main>
        <section className="romi" role="banner">
          <div className="romi-text">
            <h1>Welcome to My Blog Website</h1>
            <p>
              Share your story with the world. Create a beautiful, personalized blog that fits your brand. Grow your audience with built-in marketing tools, or transform your passion into revenue with a paywall. Learn more about our mission and vision.
            </p>
            <a href="#" className="btn" aria-label="Learn more about us">Know More About Us</a>
          </div>
          <div className="romi-image">
            <img
              src="https://media.licdn.com/dms/image/v2/D5612AQFXsBivSW8_kw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695827045738?e=2147483647&v=beta&t=jZTCVxezslJLRzt80gp95ZQaaaYTW7kZKl7Oz2AVyqE"
              alt="Team collaboration"
            />
          </div>
        </section>

        <section className="stats" aria-label="Company achievements">
          <div>
            <h2>Innovating and Enhancing Company Services</h2>
            <p><strong>300+</strong> Projects completed with innovation</p>
            <p><strong>180+</strong> Experts and professionals involved</p>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Team meeting"
            />
          </div>
        </section>

        <section className="business-model" aria-label="Business model strategies">
          <h2>Our Approach to Business Models</h2>
          <ul>
            <li>✔ Define the strategy</li>
            <li>✔ Restructure business model</li>
            <li>✔ Teaming and evaluation</li>
          </ul>
        </section>

        <section className="team" aria-label="Our team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team member 1" />
            <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="Team member 2" />
            <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Team member 3" />
            <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Team member 4" />
          </div>
        </section>

        <section className="newsletter" aria-label="Newsletter subscription">
          <h3>Get Our Weekly Updates</h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby={error ? "email-error" : undefined}
              />
              {error && <span id="email-error" className="error">{error}</span>}
            </div>
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default About;