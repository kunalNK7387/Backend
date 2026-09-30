// const express = require("express");

// const app = express();

// app.use(function (req, res, next) {
//   console.log("Middleware chala");
//   next();
// });
// app.use(function (req, res, next) {
//   console.log("Middleware one more time chala");
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Hello  World");
// });

// app.get("/profile", function (req, res) {
//   res.send("You Are In Profile");
// });

// app.listen(3000);

//Error Handling

const express = require("express");

const app = express();

app.use(express.json()); //in this we can handle the json data
app.use(express.urlencoded({ extended: true })); //in this it can handle the url data

app.get("/user", (req, res, next) => {
  const error = new Error("User not found");

  next(error);
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
});

app.listen(3000);
