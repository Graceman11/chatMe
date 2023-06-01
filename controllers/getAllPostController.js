const PostModel = require("../models/post");

const getAllPostController = async (req, res, next) => {
  try {
    const post = await PostModel.find();
    if (post) {
      res.send(post);
    } else {
      res.send(post);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getAllPostController;
