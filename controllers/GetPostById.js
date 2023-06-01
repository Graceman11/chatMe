const PostModel = require("../models/post");

const GetPostById = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) {
      // console.log(token);
      res.send("unauthorized user");
      return;
    }
    const id = req.params.id;
    const getPost = await PostModel.findById(
      id,
      "_id title description photo postedBy createdAt"
    );
    if (getPost) {
      res.send(getPost);
    } else {
      res.send(getPost);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = GetPostById;
