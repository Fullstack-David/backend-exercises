const readline = require('readline');
const fs = require('fs');

// läser av och visar innehållet i read.txt
// singel 
const textIn = fs.readFileSync('../uppgift1/read.txt', 'utf-8');
console.log(textIn);


// Denna skriver ut output i en separat .txt-fil
const content = `Data read from input.txt: ${textIn} \n date-created: ${new Date()}`;
fs.writeFileSync('../uppgift1/output.txt', content);


// Skriver ut en ny .txt-fil
const newOutput = `I\'m just flashing back to what i\'v learnt by now! ${new Date()}`;

fs.writeFileSync('../uppgift1/newOutput.txt', newOutput);


