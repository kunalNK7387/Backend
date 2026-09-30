const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "Kunal",
    age: 25,
    email: "kunal@7387",
  });

  res.send(user);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdata: "Hello How Are You",
    user: "6ab65007a543ef3c38e9cdb1",
  });

  let user = await userModel.findOne({ _id: "6ab65007a543ef3c38e9cdb1" });
  user.posts.push(post._id);
  await user.save();

  res.send({ post, user });
});
app.listen(3000);
