import mongoose, { model, Schema } from "mongoose";

const blogSchema = new Schema({
    title:{
        type: String,
    },
    category:{
        type:String,
    },
    content:{
        type: String,
    }
});

const blog = model('blog', blogSchema);
export default blog;