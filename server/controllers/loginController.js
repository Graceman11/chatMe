const { json } = require("express");
const bcrypt = require("bcrypt");
const generateToken = require("../generateToken");

const Users = require("../models/userSchema");

const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email && !password) {
    res.send("all field are required");
    return;
  }

  try {
    const checkUser = await Users.findOne({ email: email });
    if (password && (await bcrypt.compare(password, checkUser.password))) {
      res.send({
        _id: checkUser._id,
        email: checkUser.email,
        phone_number: checkUser.phone_number,
        first_name: checkUser.first_name,
        last_name: checkUser.last_name,
        username: checkUser.username,
        token: generateToken(checkUser._id),
      });
    } else {
      res.send("invalid login credentials");
    }
  } catch (e) {
    next(e);
  }
};

module.exports = loginController;
