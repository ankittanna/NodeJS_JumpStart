var express = require('express');
var app = express();

app.use(express.static('public'));

var blocks = {'Fixed':'Fastened securely in a position', 
              'Movable': 'Capable of moving around', 
              'Rotating': 'Moving in a circle around its center'};

app.get('/blocks/:name', function(request, response){
    var description = blocks[request.params.name];    
    
    if(!description)
    {
        response.status(404).json('No description found for ' + request.params.name);
    } else 
    {
    response.send(description);
    }
});

app.listen(3000, function(){
    console.log("Listening on 3000");
});