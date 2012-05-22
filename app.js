var express = require("express");
var mod = require("27bslash6-module");
var app = express.createServer();

exports = module.exports = app;

app.get("/", function (req, res) {
    res.send("Hello, " + mod.text);
}); 

