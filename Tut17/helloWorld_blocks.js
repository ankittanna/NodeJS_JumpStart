var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello World!');
});

app.get('/blocks', function(request, response){
    var blocksArray = ["Apple", "Microsoft", "Linux"];
    response.json(blocksArray);
});

app.listen(3000, function(){
    console.log("Listening on port 3000");
});