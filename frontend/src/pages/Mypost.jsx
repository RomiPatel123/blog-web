import React, {useState} from 'react'
import './Mypost.css'
import axios from 'axios'
import { useEffect } from 'react';
const Mypost = () => {
      const getPost =(e) => {   
          const res = axios.get('http://localhost:3000/post')
          console.log(res);
      }
      useEffect(()=>{
        getPost();
      },[])
    return (
        <div>
            <div className="post-section">
                <h2>MY <span>BLOG</span></h2>
                <p>Welcome to our blog! This is where we share insights, stories, tips, and updates that matter to you. Whether you're here to learn, explore, or get inspired, our blog is designed to deliver value with every post.</p>

                <div className="blog-grid">

                    <div className="blog-card">
                        <img src="https://images.stockcake.com/public/f/0/6/f06df0a9-588c-45b3-b670-92b498d9b7a1_large/group-study-session-stockcake.jpg" alt="Post 1"></img>
                            <div className="blog-content">
                                <div className="blog-date">📅 April 30, 2022 | Design</div>
                                <div className="blog-title">LATEST NEWS POST</div>
                                <div className="blog-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eveniet incidunt.</div>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                    </div>

                    <div className="blog-card">
                        <img src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7" alt="Post 2"></img>
                            <div className="blog-content">
                                <div className="blog-date">📅 April 18, 2022 | Project</div>
                                <div className="blog-title">LATEST NEWS POST</div>
                                <div className="blog-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eveniet incidunt.</div>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                    </div>

                    <div className="blog-card">
                        <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095" alt="Post 3"></img>
                            <div className="blog-content">
                                <div className="blog-date">📅 April 7, 2022 | Creative</div>
                                <div className="blog-title">LATEST NEWS POST</div>
                                <div className="blog-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eveniet incidunt.</div>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Mypost