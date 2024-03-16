const mongoose = require("mongoose");

const PostModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const post = mongoose.model("posts", PostModel);
module.exports = post;
