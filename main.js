const express = require("express");
const mongoose = require("mongoose");
const Users = require("./models/userSchema");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
// const bycrypt = require("bcrypt");
const signUpController = require("./controllers/SignUpControllers");
const loginController = require("./controllers/loginController");
require("./models/post");
const PostController = require("./controllers/PostController");
const PostRouters = require("./routes/post");
const AuthRouters = require("./routes/authRouter");
const MessageRoutes = require("./routes/messageRoutes");
var cors = require("cors");
const port = 4000;

const app = express();
dotenv.config();
app.use(cors());
// let initialPath = path.join(__dirname, "components");
// app.use(routers);

app.use(bodyParser.json({ limit: "50mb" }));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

mongoose.connect("mongodb://localhost:27017/chatMe", {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("successfully connected to MongoDB using mongoose");
});

app.use("/post", PostRouters);
app.use("/", AuthRouters);
app.use("/messages", MessageRoutes);

app.listen(port, () => {
  console.log(`App is listening from port:${port}`);
});
