import mongoose, { model, Schema } from "mongoose";
const blogSchema = new Schema({
    title:{
        type: String,
    },
    imageUrl:{
        type: String
    },
    content:{
        type: String,
    },
    userId:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true});

const blog = model('blog', blogSchema);
export default blog;