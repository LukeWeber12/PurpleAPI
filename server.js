var express = require('express');
var app = express();
const cors = require("cors");
const { json } = require('express');
const bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json())
app.get('/HealthCheck', function (req, res) {
   console.log("Healthy");
   res.status(200);
   res.send();
})

app.post('/Suggest', function (req, res) {
   console.log("posted");
   res.status(200);
   res.send();
})

app.put("/Update", function(req, res){
   
      data = req.body;
   console.log("Update"+ data);
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
   res.send([
               {ID:1,Title:"Shorter"}, 
               {ID:2,Title:"DUH"}
            ]
   );
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
  
})
