import React from 'react'

const Post = () => {
    const addPost = ()=>{
        
    }
  return (
    <div>
         <main>
    <section id="new-post">
      <h2>Create a New Post</h2>
      <input type="text" id="post-title" placeholder="Post Title" />
      <textarea id="post-content" rows="5" placeholder="Write your content..."></textarea>
      <button onclick="addPost()">Publish</button>
    </section>

    <section id="posts">
      <h2>Recent Posts</h2>
      <div id="post-list"></div>
    </section>
  </main>

    </div>
  )
}

export default Post