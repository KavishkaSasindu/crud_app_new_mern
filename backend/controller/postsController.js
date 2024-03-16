const PostModel = require("../models/PostModel");

// create post
const createPost = async (request, response) => {
  const { title, description } = request.body;
  try {
    const newPost = await PostModel.create({ title, description });
    if (newPost) {
      return response.status(201).json({
        message: "post created",
      });
    } else {
      return response.status(400).json({
        message: "post not created",
      });
    }
  } catch (error) {
    console.log(error);
    return response.status(400).json({
      message: "error",
      error: error.message,
    });
  }
};

// get all posts
const getPosts = async (request, response) => {
  try {
    const allPosts = await PostModel.find({});
    if (!allPosts) {
      return response.status(404).json({
        message: "no posts here",
      });
    }
    return response.status(200).json({
      message: "fetching all posts",
      posts: allPosts,
    });
  } catch (error) {
    return response.status(400).json({
      error: error.message,
    });
  }
};

// get one data
const onePost = async (request, response) => {
  const { id } = request.params;
  try {
    const oneData = await PostModel.findById(id);
    if (!oneData) {
      return response.status(404).json({
        message: "post is not here",
      });
    }
    return response.status(200).json({
      message: "your post",
      post: oneData,
    });
  } catch (error) {
    return response.status(400).json({
      message: "error",
      error: error.message,
    });
  }
};

// update Post
const updatePost = async (request, response) => {
  const { id } = request.params;
  try {
    const updatedPost = await PostModel.findByIdAndUpdate(id);
    if (!updatedPost) {
      return response.status(404).json({
        message: "not been updated",
      });
    }
    return response.status(200).json({
      message: "post updated",
    });
  } catch (error) {
    return response.status(400).json({
      message: "error",
      error: error.message,
    });
  }
};

module.exports = { createPost, getPosts, onePost };
