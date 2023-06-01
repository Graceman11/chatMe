const { Schema, model, Types } = require("mongoose");
const { ObjectId } = Types;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "no photo",
    },
    postedBy: {
      type: {},
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = model("Post", postSchema);
