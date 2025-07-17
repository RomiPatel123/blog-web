import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div>
      <main className="main-content">
        <section className="blog-section" role="main" aria-label="Blog tutorials">
          <div className="teader">
            <h1>Blogging Tutorials To Grow Your Blog</h1>
            <p>
              Ready to start blogging like a pro? Blogging is essential for every business and website. 
              It’s one of the best ways to generate traffic while demonstrating expertise. 
              <a href="#" aria-label="Read more about blogging">Read More</a>
            </p>
          </div>

          <div className="cards">
            <div className="card">
              <img
                src="https://assets.keap.com/image/upload/w_569,h_395,c_limit,q_95,dpr_1/v1535052909/infusionsoft.com/homepage/GettyImages-626669886.webp"
                alt="URL shortening guide"
              />
              <h3>How to Shorten URLs and Get Paid</h3>
              <p>Discover strategies to monetize shortened URLs effectively.</p>
              <button>Read More</button>
            </div>

            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Forum comparison"
              />
              <h3>BlackHatWorld vs Warrior Forum vs Traffic Planet</h3>
              <p>Compare top forums to find the best platform for your needs.</p>
              <button>Read More</button>
            </div>

            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Dopamine marketing"
              />
              <h3>How to Use Dopamine to Make People Buy Things</h3>
              <p>Learn how to leverage psychology in marketing strategies.</p>
              <button>Read More</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;