import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [totalBlog, setTotalBlog] = useState(0);
  const latestPosts = [
    { title: "How Cricket Unites the World", status: "Published" },
    { title: "React Basics – What You Should Know", status: "Draft" },
    { title: "Best Stadiums Around the Globe", status: "Published" },
  ];

  const popularTags = ["Cricket", "ReactJS", "WorldCup", "Blogging", "Design"];

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) return;

      try {
        const res = await fetch(`http://localhost:3000/getUSerDetails/${userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    const fetchTotalBlog = async () => {
        const userId = localStorage.getItem("userId");
        try {
        const res = await fetch(`http://localhost:3000/totalBlog/${userId}`);
        const data = await res.json();
        if (res.ok) {
          setTotalBlog(data.total);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    fetchUser();
    fetchTotalBlog();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">👋 Welcome Back, {user?.name.split(' ')[0]}</h1>

      {/* User Profile Section */}
      <div className="dashboard-profile full-width">
        <div className="profile">
          <h3>👤 Your Profile</h3>
          <p><strong>Name:</strong> {user?.name || "Loading..."}</p>
          <p><strong>Email:</strong> {user?.email || "Loading..."}</p>
          <p><strong>Role:</strong> {user?.role || "Author"}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="dashboard-actions">
        <Link to="/dashboard/NewPost" className="dashboard-btn">➕ Add New Post</Link>
        <Link to="/dashboard/Mypost" className="dashboard-btn">📚 My Posts</Link>
        <Link to="/" className="dashboard-btn">🏠 Home</Link>
      </div>

      {/* Stats Cards */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Posts</h3>
          <p>{totalBlog}</p>
        </div>
        <div className="stat-card">
          <h3>Published</h3>
          <p>{totalBlog}</p>
        </div>
        <div className="stat-card">
          <h3>Drafts</h3>
          <p>0</p>
        </div>
      </div>

      {/* Latest Posts & Popular Tags */}
      <div className="dashboard-bottom">
        <div className="recent-posts">
          <h2>📝 Latest Posts</h2>
          <ul>
            {latestPosts.map((post, i) => (
              <li key={i}>
                {post.title} - <span className={post.status === "Published" ? "published" : "draft"}>{post.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="popular-tags">
          <h2>🏷️ Popular Tags</h2>
          <div className="tag-list">
            {popularTags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
