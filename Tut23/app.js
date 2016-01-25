var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// nodes native query parser: querystring
var parseUrlencoded = bodyParser.urlencoded({extended:false});

app.use(express.static('public'));

var blocks = {'Fixed':'Fastened securely in a position', 
              'Movable': 'Capable of moving around', 
              'Rotating': 'Moving in a circle around its center'};

// result - we get extra param in routes
// parseUrlencoded - first handler, second handler the anonymous
app.post('/blocks', parseUrlencoded, function(request, response){
    var newBlock = request.body;
    blocks[newBlock.name] = newBlock.description;
    response.status(201).json(newBlock.name);
});

app.delete('/blocks/:name', function(request, response){
    delete blocks[request.params.name]
    response.send(200);
});


app.get('/blocks', function(request, response){
    
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