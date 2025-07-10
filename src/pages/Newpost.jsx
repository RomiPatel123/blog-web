import React from 'react'
import './Newpost.css'
const newpost = () => {
    return (
        <div>
            <div className='h2'>
            <h2>Latest Posts</h2>
            </div>

            <div className="posts-container">
                <div className="post-card">
                    <div className="post-image">
                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61" alt="Post 1"></img>
                    </div>
                    <div className="post-content">
                        <div className="post-title">Post 1 Headline</div>
                        <div className="post-date">Tue Jan 25 2020</div>
                        <div className="post-description">Sample small text. Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>

                <div className="post-card">
                    <div className="post-image">
                        <img src="https://images.unsplash.com/photo-1581090700227-1e8e1f229b46" alt="Post 2"></img>
                    </div>
                    <div className="post-content">
                        <div className="post-title">Post 2 Headline</div>
                        <div className="post-date">Thu Jun 25 2020</div>
                        <div className="post-description">Sample small text. Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>

                <div className="post-card">
                    <div className="post-image">
                        <img src="https://images.unsplash.com/photo-1590650046871-b5f47d973202" alt="Post 3"></img>
                    </div>
                    <div className="post-content">
                        <div className="post-title">Post 3 Headline</div>
                        <div className="post-date">Fri Aug 12 2020</div>
                        <div className="post-description">Sample small text. Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>

                <div className="post-card">
                    <div className="post-image">
                        <img src="https://images.unsplash.com/photo-1593642634367-d91a135587b5" alt="Post 4"></img>
                    </div>
                    <div className="post-content">
                        <div className="post-title">Post 4 Headline</div>
                        <div className="post-date">Mon Nov 09 2020</div>
                        <div className="post-description">Sample small text. Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default newpost