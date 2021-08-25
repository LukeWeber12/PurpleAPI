var express = require('express');
var app = express();
const cors = require("cors");

app.use(cors());

app.get('/HealthCheck', function (req, res) {
   console.log("Healthy");
   res.status(200);
   res.send();
})

app.post('/Suggestion', function (req, res) {
   console.log("posted");
   res.status(200);
   res.send();
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
  
})
