/***********
* Method 5
************/
// Läsa en 'json'-fil, 'Read file readFileSync(...)
// Du behöver skapa en 'json'-fil (json);
// Det skall finnas en 'json'-fil (.json);

const fs = require('fs');

// const jsonText = '';

// fs.appendFileSync('../uppgift6/jsonText.txt', jsonText, 'utf-8');

// fs.appendFileSync('../uppgift6/myText.json', jsonText, 'utf-8');

let readText = JSON.parse(fs.readFileSync('../uppgift6/myText.json'));

console.log(readText.firstName);
console.log(readText);
console.log('Program Ended...');
