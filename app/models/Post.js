import mongoose from "mongoose"

const PostSchema=new mongoose.Schema({
    title:{type:String,require:true},
    author:{type:String,require:true},
    content:{type:String,require:true},
},{timestamps:true})
module.exports = mongoose.models.Post || mongoose.model("Post",PostSchema)