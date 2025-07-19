import Blog from "../models/blogmodel.js";

export const createBlog = async (req, res) => {
    const { title, imageUrl, content } = req.body;

    if (!title || !imageUrl || !content) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const blog = await Blog.create({
            title,
            imageUrl,
            content,
            // userId
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
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}
