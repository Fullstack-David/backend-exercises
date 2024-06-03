/***********
* Upggift 5 
************/

// Läsa en json-fil, readFile()
// Du behöver skapa en jsonfil 

const fs = require('fs');

fs.readFile('readFile.json', 'utf-8', (aError, aData) => {
    if (aError) {
        return console.error(aError)
    }
    let myObject = JSON.parse(aData);
    console.log(`Hello my name is ${myObject.firstName} ${myObject.lastName} and i live in ${myObject.city}.`);
});


console.log('Program Ended....');

