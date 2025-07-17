import delete from "../models/deletemodel.js";
// Get all posts
app.get('/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Create new post
app.post('/posts', async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content, date: new Date() });
  await newPost.save();
  res.json(newPost);
});

// Edit post
app.put('/posts/:id', async (req, res) => {
  const { title, content } = req.body;
  const updated = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
  res.json(updated);
});

// Delete post
app.delete('/posts/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
});