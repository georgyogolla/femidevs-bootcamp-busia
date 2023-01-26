//jshint esversion:6

const express = require("express");

const app = express();


app.get("/", function (req, res) {
  res.send("helloo");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at:georgyogolla@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("This is the about page");
})


app.listen(3001, function () {
  console.log('Server started on port 3000');
});