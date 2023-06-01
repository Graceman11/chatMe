const PostModel = require("../models/post");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userSchema");

const CreatePost = async (req, res, next) => {
  const token = req.headers.authorization;
  const { title, description, photo } = req.body;

  if (!title.trim() || !description.trim()) {
    res.send("all fields are required");
    return;
  }

  try {
    // if()
    if (token || token.split(" ")[1]) {
      const decodedToken = jwt.verify(
        token.split(" ")[1],

        process.env.TOKEN_SECRET
      );

      const { id } = decodedToken;

      const checkPost = await PostModel.findOne({ title: title });

      if (checkPost) {
        res.send("post already exist");
        return;
      }

      const postedBy = await UserModel.findById(
        id,
        "_id email first_name last_name username phone_number"
      );

      const newPost = await PostModel.create({
        title,
        description,
        photo,
        postedBy,
      });

      if (newPost) {
        res.send(newPost);
      } else {
        res.send("An error as occur when creating the post");
      }
    }
  } catch (error) {
    next(error);
    console.log(postedBy);
  }
};

module.exports = CreatePost;
