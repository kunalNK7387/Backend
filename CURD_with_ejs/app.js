const express = require("express");
const app = express();
const path = require("path");
const userModule = require("./models/user");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
  let allUsers = await userModule.find();
  res.render("read", { users: allUsers });
});

app.post("/create", async (req, res) => {
  let { Name, Email, Image } = req.body;

  let createUser = await userModule.create({
    Name,
    Email,
    Image,
  });

  res.send(createUser);
});

app.listen(3000);
