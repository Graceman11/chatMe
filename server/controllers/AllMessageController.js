const messageSchema = require("../models/messageSchema");
const PostModel = require("../models/post");
const allMessage = async (req, res) => {
  try {
    const message = await messageSchema.find();
    if (message) {
      res.send(message);
    } else {
      res.send(message);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = allMessage;
