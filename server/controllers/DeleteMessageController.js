const messageSchema = require("../models/messageSchema");
const { findByIdAndRemove } = require("../models/post");

const deleteMessage = async (req, res, next) => {
  try {
    const delMessage = await findByIdAndRemove
  } catch {}
};

module.exports = deleteMessage;
