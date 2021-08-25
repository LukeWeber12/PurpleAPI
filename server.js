var express = require('express');
var app = express();
var fs = require("fs");

app.get('/HealthCheck', function (req, res) {
   console.log("Healthy");
   res.json({ health: true });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
