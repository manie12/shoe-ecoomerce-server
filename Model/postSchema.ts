import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({

    image: String,
    productname: String,
    prices: String,



});

const postModel = mongoose.model("post", postSchema);

export default postModel;