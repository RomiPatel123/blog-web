import React, { useState, useEffect } from 'react';
import './Mypost.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import striptags from "striptags";

const Mypost = () => {
  const [posts, setPosts] = useState([]);
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const getPost = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/userBlog/${userId}`);
      setPosts(res.data);
    } catch (error) {
      console.error("Failed to fetch posts", error);
    }
  };

  useEffect(() => {
    if (userId) getPost();
  }, [userId]);

  const handleDelete = async (postId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    console.log('PostId--->', postId);

    try {
      await axios.delete(`http://localhost:3000/deleteBlog/${postId}`);
      setPosts(prev => prev.filter(post => post._id !== postId));
    } catch (error) {
      console.error("Failed to delete post", error);
    }
  };

  const handleEdit = (postId) => {
    navigate(`/dashboard/edit-blog/${postId}`);
  };

  return (
    <div className="post-section">
      <h2>MY <span>BLOG</span></h2>
      <div className="blog-grid">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div className="blog-card" key={index}>
              <img
                src={post.imageUrl || 'https://via.placeholder.com/400x250'}
                alt={`Post ${index + 1}`}
              />
              <div className="blog-content">
                <div className="blog-date">
                  📅 {new Date(post.date || post.createdAt).toDateString()} | {post.category || 'General'}
                </div>
                <div className="blog-titlel">{post.title}</div>
                <div className="blog-desc">
                    <p>{striptags(post.content).slice(0, 100)}...</p>
                </div>
                <a href={`/blog/${post._id}`} className="read-more">
                  Read More
                </a>
                <div className="blog-actions">
                  <FaEdit
                    className="icon-btn edit-icon"
                    title="Edit"
                    onClick={() => handleEdit(post._id)}
                  />
                  <FaTrash
                    className="icon-btn delete-icon"
                    title="Delete"
                    onClick={() => handleDelete(post._id)}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default Mypost;
