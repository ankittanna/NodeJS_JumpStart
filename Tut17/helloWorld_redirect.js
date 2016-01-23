var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello World!');
});
var blocksArray = ["Apple", "Microsoft", "Linux"];
app.get('/blocks', function(request, response){
    response.redirect(301, '/parts');
});

app.get('/parts', function(request, response){
    response.send(blocksArray);
});

app.listen(3000, function(){
    console.log("Listening on port 3000");
});