const express = require("express");
const path = require("path");
const app = express();

//Setting up parsers for form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/profile/:username", function (req, res) {
  res.send(`Welcome, ${req.params.username}`);
});

app.get("/author/:username/:age", function (req, res) {
  res.send(`Welcome, ${req.params.username} of Age ${req.params.age}`);
});

app.listen(3000, function () {
  console.log("Its Running");
});
