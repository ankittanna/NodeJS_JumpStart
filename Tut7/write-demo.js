var fs = require('fs');

var myString = '{"name": "Ankit Tanna"}';

fs.writeFile('myFile.json', myString);

var actualObject = {
    name: 'Ankit B Tanna'
};

fs.writeFile('myProcessedFile.json', JSON.stringify(actualObject));