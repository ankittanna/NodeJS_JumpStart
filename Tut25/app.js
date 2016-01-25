var express = require('express');
var app = express();
app.use(express.static('public'));

var blocks = require('./routes/block');
app.use('/blocks', blocks);

app.listen(3000, function(){
    console.log("Listening on 3000");
});