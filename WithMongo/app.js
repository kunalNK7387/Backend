const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/create", async (req, res) => {
  let createduser = await userModel.create([
    {
      name: "Kunal",
      email: "kunal@gmail.com",
      age: 23,
    },
    {
      name: "Tushar",
      email: "tushar@gmail.com",
      age: 21,
    },
  ]);

  res.send(createduser);
});

app.get("/update", async (req, res) => {
  let updateuser = await userModel.findOneAndUpdate(
    { name: "Kunal" },
    { name: "Kunal Khairnar" },
    { returnDocument: "after" },
  );

  res.send(updateuser);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();

  res.send(users);
});
app.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({ name: "Kunal" });

  res.send(users);
});

app.listen(3000);
