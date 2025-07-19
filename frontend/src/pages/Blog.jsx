import React, { useEffect, useState } from 'react';
import './Blog.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import striptags from "striptags";


const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:3000/allBlogs');
        setBlogs(res.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div>
      <main className="main-content">
        <section className="blog-section" role="main" aria-label="Blog tutorials">
          <div className="teader">
            <h1>Latest Blogs</h1>
            <p>
              Discover insights, strategies, and tutorials that help your blogging journey.
              <a href="#" aria-label="Read more about blogging"> Read More</a>
            </p>
          </div>

          <div className="cards">
            {blogs.length === 0 ? (
              <p>No blogs available.</p>
            ) : (
              blogs.map((blog) => (
                <div className="card" key={blog._id}>
                  <img src={blog.imageUrl} alt={blog.title} />
                  <h3>{blog.title}</h3>
                  <p>{striptags(blog.content).slice(0, 100)}...</p>
                  <button onClick={() => handleReadMore(blog._id)}>Read More</button>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
