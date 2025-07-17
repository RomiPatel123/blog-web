import Blog from "../models/blogmodel.js";
export const blog = async(req, res) => {
    const {title, category, content} = req.body;
    try {
        await Blog.create({
            title,
            category,
            content
        })
         return res.status(200).json({message:"Blog added successefully"});

    } catch (error) {
         return res.status(600).json({message:"Internal Server Error"});
        
    }
}


//get blog
export const post = async(req, res) => {
    const {title, category, content} = req.body;
    try {
        await post.create({
            title,
            category,
            content
        })
         return res.status(300).json({message:"Blog added successefully"});

    } catch (error) {
         return res.status(500).json({message:"Internal Server Error"});
        
    }
}
