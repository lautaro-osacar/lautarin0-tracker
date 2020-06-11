// var Server = require("bittorrent-tracker").Server;
var express = require("express");
var app = express();

// var server = new Server({
//   http: false, // we do our own
//   udp: false, // not interested
//   ws: false, // not interested
// });

// var onHttpRequest = server.onHttpRequest.bind(server);
// app.get("/announce", onHttpRequest);
// app.get("/scrape", onHttpRequest);

// app.get("/data", function (req, res) {
//   // get info hashes for all torrents in the tracker server
//   Object.keys(server.torrents);
//   //   // get the number of seeders for a particular torrent
//   //   server.torrents[infoHash].complete;
//   //   // get the number of leechers for a particular torrent
//   //   server.torrents[infoHash].incomplete;
//   //   // get the peers who are in a particular torrent swarm
//   //   server.torrents[infoHash].peers;
//   res.send(Object.keys(server.torrents).toString());
// });

app.get("/", function (req, res) {
  res.send("HOLAA");
});

app.listen(3000, function () {
  console.log("RUNNING ON PORT 3000");
});
