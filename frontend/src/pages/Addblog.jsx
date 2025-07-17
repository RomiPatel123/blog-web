import React, {useState} from 'react'
import './Addblog.css'
import axios from 'axios' 
const Addblog = () => {
         const [blog, setblog] = useState({
            title: '',
            category: '',
            content: '',
          });
      const submitPost =(e) => {   
          axios.post('http://localhost:3000/blog', blog)
      }
  return (
    <>
        <div className='Add'>
            <h2>Add Blog Post</h2>
        <div className='box6'>
            <label for="title" className='lb1'>Title</label><br></br>
            <input type="text" className='lb4' id="title" placeholder="Enter post title"></input><br></br>

            <label for="category" className='lb1'>Category</label><br></br>
            <input type="text" className='lb4' id="category" placeholder="Enter category"></input><br></br>

            <label for="content"  className='lb1'>Content</label><br></br>
            <div id="content"  contenteditable="true" placeholder="Type your blog post..."></div><br></br>

            <button type="submit" className='bt' onClick={submitPost}>Submit Post</button>
            </div>
        </div>
    </>
    )
}

export default Addblog