const mongoose =require('mongoose');

//define the user schema
const postSchema = new mongoose.Schema({
    content: { type: String, trim:true},
    postedBy: { type: Schema.Types.ObjectId, ref: 'User'},
    pinned: Boolean
}, { timestamps: true });

//create the user model
const Post = mongoose.model('User', postSchema);

//export the user model
module.exports = Post;