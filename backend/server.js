import express from 'express';
import connectdb from './config/db.js';
import {Login, getUserDetails, Register} from './controllers/userController.js'
import cors from 'cors';
import {createBlog, getAllBlogs, getSingleBlog, getPostsByUser, deleteBlog, updateBlog, totalBlog} from './controllers/blogcontroller.js'
// import {post} from './controllers/blogcontroller.js'
const app = express()
const port = 3000
connectdb()
app.use(express.json());
app.use(cors('*'));
app.post('/register', Register)
app.post('/login',Login)
app.post('/addBlog',createBlog)
app.get('/allBlogs', getAllBlogs)
app.get('/singleBlog/:id', getSingleBlog)
app.get('/userBlog/:userId', getPostsByUser)
app.delete('/deleteBlog/:id', deleteBlog);
app.put('/updateBlog/:id', updateBlog)
app.get('/getUserDetails/:userId', getUserDetails)
app.get('/totalBlog/:userId', totalBlog);
// app.get('/post',post)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
