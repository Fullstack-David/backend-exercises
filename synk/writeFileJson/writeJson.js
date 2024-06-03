const fs = require('fs');

let addThisText = ['David', 30, 'Gothenburg'];
let jsonData = JSON.stringify({
    Name: addThisText[0],
    Age: addThisText[1],
    City: addThisText[2]

});

fs.writeFileSync('../writeFileJson/writeJson.json', jsonData, 'utf-8');
console.log('Program Ended...');
