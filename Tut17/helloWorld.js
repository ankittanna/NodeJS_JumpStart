var express = require('express');
var app = express();

app.get('/', function(request, response){
    // response.send('Hello World!');
    response.write('Hello World!');
    response.end();
});

app.listen(3000, function(){
    console.log("Listening on port 3000");
});