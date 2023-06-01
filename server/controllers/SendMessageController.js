const jwt = require("jsonwebtoken");
const UserModel = require("../models/userSchema");
const MessageModel = require("../models/messageSchema");

const sendMessage = async (req, res, next) => {
  const token = req.headers.authorization;
  const { message } = req.body;
  const { receiverId } = req.params;

  if (!message.trim()) {
    res.send("message is required");
    return;
  }

  try {
    if (token || token.split(" ")[1]) {
      const decodedToken = jwt.verify(
        token.split(" ")[1],
        process.env.TOKEN_SECRET
      );

      const { id } = decodedToken;

      const sender = await UserModel.findById(
        id,
        "_id email first_name last_name username phone_number"
      );

      const receiver = await UserModel.findById(
        receiverId,
        "_id email first_name last_name username phone_number"
      );

      const newMessage = await MessageModel.create({
        message,
        receiver,
        sender,
      });

      if (newMessage) {
        res.send(newMessage);
      } else {
        res.send("An error as occur when sending message");
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = sendMessage;
