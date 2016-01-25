var express = require('express');
var app = express();

app.use(express.static('public'));

var blocks = {'Fixed':'Fastened securely in a position', 
              'Movable': 'Capable of moving around', 
              'Rotating': 'Moving in a circle around its center'};

app.param('name', function(request, response, next){
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    
    request.blockName = block;
    
    next();
});

app.delete('/blocks/:name', function(request, response){
    delete blocks[request.params.name]
    response.send(200);
});

// result - we get extra param in routes
// parseUrlencoded - first handler, second handler the anonymous
app.post('/blocks', parseUrlencoded, function(request, response){
    var newBlock = request.body;
    blocks[newBlock.name] = newBlock.description;
    response.status(201).json(newBlock.name);
});

app.get('/blocks/:name', function(request, response){
    var description = blocks[request.blockName];    
    
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