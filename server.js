var express = require('express');
var app = express();
const cors = require("cors");
const { json } = require('express');
const bodyParser  = require('body-parser');
const MySqlConnection = require('./MySqlConnection');
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json())
let connection = MySqlConnection.createConnection();
connection.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
 });

app.get('/HealthCheck', function (req, res) {
   console.log("Healthy");
   
   res.status(200);
   res.send();
})

app.post('/Suggest', function (req, res) {
   console.log("posted");
   connection.query("Insert Into Suggestions (Suggestion) values (?)",req.body , function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
   res.status(200);
   res.send();
   
})

app.put("/Update", function(req, res){
   
      data = req.body;
   console.log("Update"+ Json.stringify(data));
   res.status(200);
   res.send();
})

app.delete("/Delete", function(req, res){

   data = req.body;
   console.log("Delete"+ Json.stringify(data));
   res.status(200);
   res.json(req.body);
})

app.get('/Suggestions', function(req, res){
   console.log("get Suggestions 3")
   connection.query("Select Id, Suggestion from Suggestions" , function (err, result, fields) {
      if (err) {
         res.status(500)
         res.send()
         throw err;
      }
      console.log(JSON.stringify(result));
      res.send(JSON.stringify(result))
    
    });
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
  
})

