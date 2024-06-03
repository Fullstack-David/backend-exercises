/*************
 * Uppgift 1
*************/

// läsa en textfil, "Read file (.txt)" 
// Du behöver skapa en txtfi

const fs = require('fs');

// fs.appendFileSync('textFile.txt', 'utf-8');
fs.writeFileSync('textFile.txt', 'What\'s happennig? ', 'utf-8');

fs.readFile('textFile.txt', 'utf-8', (aError, aData) =>
{
    if (aError) {
        return console.error(aError)
    }
    console.log(aData.toString());
});

console.log('Program End...')