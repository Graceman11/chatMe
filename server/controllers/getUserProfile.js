const PostModel = require("../models/post");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userSchema");

const GetUserProfileController = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    if (token || token.split(" ")[1]) {
      const decodedToken = jwt.verify(
        token.split(" ")[1],

        process.env.TOKEN_SECRET
      );

      const { id } = decodedToken;

      const user = await UserModel.findById(
        id,
        "_id email first_name last_name username phone_number"
      );

      if (user) {
        res.send(user);
      } else {
        res.send("An error as occur when creating the post");
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = GetUserProfileController;
