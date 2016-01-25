var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended:false});

var blocks = {'Fixed':'Fastened securely in a position', 
              'Movable': 'Capable of moving around', 
              'Rotating': 'Moving in a circle around its center'};


// The route path relatice to the path where it's mounted
// Router path is relative to where it's mounted in app.js
router.route('/').post('/blocks', parseUrlencoded, function(request, response){
    var newBlock = request.body;
    blocks[newBlock.name] = newBlock.description;
    response.status(201).json(newBlock.name);
}).get('/blocks', function(request, response){
    
    if(request.query.limit >= 0)
    {
        response.json(blocks.slice(0, request.query.limit));
    } else
    {
        response.json(blocks);   
    }
});
router.route('/:name').all(function(request, response, next){
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    
    request.blockName = block;
    
    next();
}).delete('/blocks/:name', function(request, response){
    delete blocks[request.params.name]
    response.send(200);
}).get('/blocks/:name', function(request, response){
    var description = blocks[request.blockName];    
    
    if(!description)
    {
        response.status(404).json('No description found for ' + request.params.name);
    } else 
    {
    response.send(description);
    }
});

module.exports = router;