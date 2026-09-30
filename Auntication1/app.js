const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

// encryption by using bcrypt
// app.get("/", function (req, res) {
//   bcrypt.genSalt(10, function (err, salt) {
//     bcrypt.hash("kunal", salt, function (err, hash) {
//       // Store hash in your password DB.
//       console.log(hash);
//     });
//   });
// });

//decryption by using the bcrypt
// app.get("/", function (req, res) {
//   bcrypt.compare(
//     "kunal",
//     "$2b$10$uSfxIMzaPMlMGiTx/.QtwezzQbAQQ2KlT7OF4uX9hKvvUbyWsDD/a",
//     function (err, result) {
//       // result == true
//       console.log(result);
//     },
//   );
// });

app.get("/", function (req, res) {
  let token = jwt.sign({ email: "kunal@gmail.com" }, "secret");
  res.cookie("token", token);

  res.send("done");
});

app.get("/read", function (req, res) {
  let data = jwt.verify(req.cookies.token, "secret");
  console.log(data);
});

app.listen(3000);
