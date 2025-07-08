import React from 'react'
import './Blog.css'
const Blog = () => {
  return (
    <div>
        <section className="blog-section">
    <div className="header">
      <h1>Blogging Tutorials To Grow Your Blog</h1>
      <p>
        Ready to start blogging like a pro? Blogging is essential for every business and website. 
        It’s one of the best ways to generate traffic while demonstrating the expertise. 
        <a href="#">Read More</a>
      </p>
    </div>

    <div className="cards">
      <div className="card">
        <img src="https://st2.depositphotos.com/3591429/12244/i/450/depositphotos_122442772-stock-photo-people-with-digital-gadgets.jpg" alt="Shorten Links"></img>
        <h3>How to Shorten URLs and Get Paid</h3>
      </div>

      <div className="card">
        <img src="https://i.ytimg.com/vi/c7AL-Yiyke4/sddefault.jpg" alt="Forum Comparison"></img>
        <h3>BlackHatWorld vs Warrior Forum vs Traffic Planet</h3>
      </div>

      <div className="card">
        <img src="https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?semt=ais_hybrid&w=740" alt="Dopamine Marketing"></img>
        <h3>How to Use Dopamine to Make People Buy Things</h3>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Blog