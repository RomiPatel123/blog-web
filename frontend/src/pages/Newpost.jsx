import React from 'react'
import './Newpost.css'
const newpost = () => {
    return (
        <div>
            <div className='h2'>
                <h2>Latest Posts</h2>
                <p>Ready to share something new with the world? Use the editor below to craft your latest blog post. Whether it’s a how-to guide, a personal story, or a news update, this is your space to write, edit, and publish.

                </p>
            </div>

            <div className="posts-container">
                <div className="post-card">
                    <div className="post-image">
                        <img src="https://eternitymarketing.com/assets/image-cache/blog/How-to-Write-SEO-Friendly-Blogs-900x600px.2db26ef5.jpg" alt="Post 1"></img>
                    </div>
                    <div className="post-content">
                        <div className="post-title">Post 1 Headline</div>
                        <div className="post-date">Tue Jan 25 2020</div>
                        <div className="post-description">Sample small text. Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>

                <div className="post-card">
                    <div className="post-image">
                        <img src="https://timeandupdate.com/wp-content/uploads/2019/11/Blogging-For-Marketing-ENX2.jpg" alt="Post 2"></img>
                    </div>
                    <div className="post-content">
                        <div className="post-title">Post 2 Headline</div>
                        <div className="post-date">Thu Jun 25 2020</div>
                        <div className="post-description">Sample small text. Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>

                <div className="post-card">
                    <div className="post-image">
                        <img src="https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg" alt="Post 3"></img>
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

                <div className="post-card">
                    <div className="post-image">
                        <img src="https://st2.depositphotos.com/3591429/7357/i/450/depositphotos_73574925-stock-photo-business-people-presentation-seminar-blog.jpg" alt="Post 3"></img>
                    </div>
                    <div className="post-content">
                        <div className="post-title">Post 5 Headline</div>
                        <div className="post-date">Fri Aug 12 2020</div>
                        <div className="post-description">Sample small text. Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>


                 <div className="post-card">
                    <div className="post-image">
                        <img src="https://www.webnode.com/blog/wp-content/uploads/2023/07/Travel-blog-featured.jpg" alt="Post 3"></img>
                    </div>
                    <div className="post-content">
                        <div className="post-title">Post 6 Headline</div>
                        <div className="post-date">Fri Aug 12 2020</div>
                        <div className="post-description">Sample small text. Lorem ipsum dolor sit amet.</div>
                    </div>
                    
                </div>
                <div className='create-btn'>
                <button onclick="Click here"><a href="/dashboard/Addblog">Create Blogs</a></button>

                </div>
  

            </div>
        </div>
    )
}

export default newpost