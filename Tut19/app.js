var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/blocks', function(request, response){
    var blocks = ['Fixed', 'Movable', 'Rotating'];
    response.json(blocks);
    //response.sendFile(__dirname+'/public/index.html');
});

app.listen(3000, function(){
    console.log("Listening on 3000");
});