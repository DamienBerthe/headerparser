var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/api/whoami', function (req, res) {
  res.json({ ipaddress: req.ip, language:req.headers["accept-language"], software:req.headers["user-agent"] });
});
app.listen(10000);
