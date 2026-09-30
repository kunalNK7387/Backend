const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://kunalcrud:Kunal@cluster0.8rxmprz.mongodb.net/?appName=Cluster0`,
);

const userSchema = mongoose.Schema({
  Name: String,
  Email: String,
  Image: String,
});

module.exports = mongoose.model("user", userSchema);
