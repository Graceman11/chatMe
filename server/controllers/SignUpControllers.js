const { json } = require("express");
const bcrypt = require("bcrypt");
const generateToken = require("../generateToken");

const Users = require("../models/userSchema");

const signUpControllers = async (req, res, next) => {
  const { email, password, first_name, last_name, username, phone_number } =
    req.body;

  try {
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const check = await Users.findOne({ email: email });
    const data = {
      email: email,
      password: hashedPassword,
      phone_number: phone_number,
      first_name: first_name,
      last_name: last_name,
      username: username,
    };
    if (check) {
      res.send("User Exist Already");
    } else {
      const user = await Users.create(data);
      res.send({
        email: user.email,
        password: user.password,
        phone_number: user.phone_number,
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        token: generateToken(user._id),
      });
    }
  } catch (e) {
    next(e);
    res.send("An error occured");
  }
};

module.exports = signUpControllers;
