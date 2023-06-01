const { Schema, model, Types } = require("mongoose");
const { ObjectId } = Types;

const messageSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    receiver: {
      type: {} || ObjectId,
      ref: "User",
    },
    sender: {
      type: {} || ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = model("Message", messageSchema);
