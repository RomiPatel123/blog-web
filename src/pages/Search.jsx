import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError('Search query is required');
    } else {
      setError('');
      alert(`Searching for: ${query}`);
    }
  };

  return (
    <div>
      <main className="main-content">
        <section className="search-container" role="main" aria-label="Search blog posts">
          <div className="left-panel">
            <h1>Search Our Blog</h1>
            <p>Find the latest articles and insights to grow your knowledge and skills.</p>
          </div>
          <div className="right-panel">
            <h2>Search Results</h2>
            <form className="search-bar" onSubmit={handleSearch} noValidate>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Search our Blog..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-describedby={error ? 'search-error' : undefined}
                />
                {error && <span id="search-error" className="error">{error}</span>}
              </div>
              <button type="submit">Search</button>
            </form>

            <h3 className="search-query">
              Results for “<span>{query || 'Study'}</span>”
            </h3>

            <div className="results">
              <div className="search-card">
                <img
                  src="https://images.unsplash.com/photo-1516321318427-0f6a0b7b6163?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                  alt="Study session"
                />
                <h3>Study Services</h3>
                <p className="date">Nov 6, 2019</p>
                <p>Explore effective study techniques and services to enhance your learning experience.</p>
                <Link to="/blog/study-services" className="read-more">Read More</Link>
              </div>

              <div className="search-card">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                  alt="Business meeting"
                />
                <h3>Everything You Think You Know About Running a Business</h3>
                <p className="date">Oct 25, 2019</p>
                <p>Uncover key insights and strategies for successful business management.</p>
                <Link to="/blog/business-management" className="read-more">Read More</Link>
              </div>

              <div className="search-card">
                <img
                  src="https://images.unsplash.com/photo-1543269865-0a740d43b3-9e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                  alt="Team collaboration"
                />
                <h3>Making the Most Out of Your Small Business</h3>
                <p className="date">Oct 23, 2019</p>
                <p>Learn how small businesses can succeed with key strategies and expert tips.</p>
                <Link to="/blog/small-business" className="read-more">Read More</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Search;