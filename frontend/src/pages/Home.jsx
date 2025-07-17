import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <main>
        <section className="hero" role="banner">
          <div className="hero-text">
            <h2>🔵 Blogs</h2>
            <h3>Welcome to My Blog Website</h3>
            <img
              src="https://media.istockphoto.com/id/496848472/vector/blog-blogging-and-blogglers-theme.jpg?s=612x612&w=0&k=20&c=mSpcEVoA-YeViMFD--ozz_CyP1UXnEgw89MpU8bwd9s="
              alt="Blog illustration"
            />
            <button>Read Now</button>
            <p className="sub-links">
              <a href="#">Create a unique blog with intuitive design and powerful tools for lasting impact</a> |{' '}
              <a href="#">Protect your enterprise from APTs</a>
            </p>
          </div>
          <div className="hero-img">
            <h1>Official Blog</h1>
            <img
              src="https://www.bloggingyourpassion.com/content/images/size/w960/2024/11/thumbnail-2.jpeg"
              alt="Blogging workspace"
            />
          </div>
        </section>

        <section className="articles" aria-label="Featured articles">
          <div className="card">
            <span className="badge">Infographic</span>
            <h3>Five Ways to Prevent Phishing Attacks</h3>
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
            <span className="badge">Infographic</span>
            <h3>Never Miss an Update</h3>
            <p>Subscribe to our blog for regular cybersecurity updates straight to your inbox.</p>
            <button>Subscribe</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;