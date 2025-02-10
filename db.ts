import mongoose, { Schema } from "mongoose";
import { model } from "mongoose";



mongoose.connect("mongodb+srv://affiliatershiva:8TcBEHDWYCtmfKRu@cluster0.amtyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
console.log("database connected")



const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true },
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
})

export const LinkModel = model("Links", LinkSchema);
export const ContentModel = model("Content", ContentSchema);
