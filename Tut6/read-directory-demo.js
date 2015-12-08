var fs = require('fs');

fs.readdir('/Users/macadmin', function(err, data) {
    console.log(data);
});