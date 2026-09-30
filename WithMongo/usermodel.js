const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

module.exports = mongoose.model("user", userSchema);
