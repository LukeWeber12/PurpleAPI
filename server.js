var express = require('express');
var app = express();
var fs = require("fs");

app.get('/HealthCheck', function (req, res) {
   console.log("Healthy");
   res.status(200);
})

app.post('/Suggestion', function (req, res) {
   console.log("posted");
   res.status(200);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
  
})
