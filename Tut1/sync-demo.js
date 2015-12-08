fs = require('fs');

data = fs.readdirSync('/Users/macadmin/Movies');
console.log('data:', data);

console.log("this comes after");