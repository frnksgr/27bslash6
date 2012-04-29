var express = require("express");

var app = module.exports = express.CreateServer();

app.get("/hello", function (req, res) {
        res.send("Hello, World!");
});