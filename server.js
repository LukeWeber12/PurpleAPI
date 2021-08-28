var express = require('express');
var app = express();
const cors = require("cors");
const MySqlConnection = require('./MySqlConnection');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded())
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
   console.log(JSON.stringify(req.body))
   connection.query("Insert Into Suggestions (Suggestion) values (?)",req.body.Suggestion, function (err, result) {
      if (err) {
         res.status(500).send();
         console.log(err);
      };
      console.log("Result: " + result);
    });
   res.status(200);
   res.send();
   
})

app.put("/Update/:Id", function(req, res){
   console.log(req.params)
   console.log(JSON.stringify(req.body))
   connection.query("Update Suggestions Set Suggestion = ? Where Id = ?",req.body.Suggestion,req.params.Id , function (err, result) {
      if (err) {
         res.status(500).send();
         console.log(err);
      };
      console.log("Result: " + result);
    });
   res.status(200);
   res.send();
})

app.delete("/Delete/:Id", function(req, res){

   data = req.body;
   connection.query("Delete from Suggestions Where Id = ?",req.params.Id , function (err, result) {
      if (err) {
         res.status(500).send();
         console.log(err);
      };
      console.log("Result: " + result);
    });
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
      res.send(result)
    
    });
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
  
})

