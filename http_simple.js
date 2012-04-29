var express = require("express");

var app = module.exports = express.createServer();

app.get("/hello", function (req, res) {
        res.send("Hello, World!");
});