var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/blocks', function(request, response){
    var blocks = ['Fixed', 'Movable', 'Rotating'];
    
    if(request.query.limit >= 0)
    {
        response.json(blocks.slice(0, request.query.limit));
    } else
    {
        response.json(blocks);   
    }
});

app.listen(3000, function(){
    console.log("Listening on 3000");
});