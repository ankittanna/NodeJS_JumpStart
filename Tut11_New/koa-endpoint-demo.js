var koa = require('koa');
var app = koa();

app.use(function* (){
    this.body = 'Hello Ankit, Welcome to NodeJS Training!';
});

app.listen(3000);
