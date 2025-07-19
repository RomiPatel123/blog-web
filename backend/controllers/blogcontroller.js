import Blog from "../models/blogmodel.js";

export const createBlog = async (req, res) => {
    const { title, imageUrl, content, userId } = req.body;

    if (!title || !imageUrl || !content) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const blog = await Blog.create({
            title,
            imageUrl,
            content,
            userId
        })
        return res.status(201).json({ message: "Blog saved successfully", success: true, blog });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
};

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}

export const getSingleBlog = async (req, res) => {
    const {id} = req.params;
    console.log("bloogg->",id);
    try {
        const blog = await Blog.findById(id);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}

export const getPostsByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const posts = await Blog.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ message: 'Failed to fetch posts' });
    }
};

// DELETE blog by ID
export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Blog.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog", error });
  }
};

// UPDATE blog by ID
export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: "Failed to update blog", error });
  }
};


