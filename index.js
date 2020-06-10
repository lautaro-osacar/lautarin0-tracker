//var Server = require("bittorrent-tracker").Server;
var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("HOLAAs");
});

app.listen(3000, function () {
  console.log("RUNNING ON PORT 3000");
});
