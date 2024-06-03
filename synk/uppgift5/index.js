/***********
* Method 4
************/

// Radera en txt file, 'Delete file unlinmkSync(...), det 'måste' finnas en textfil (txt)
// Delete file-method


const fs = require('fs');

const addTextToFile = 'Dose it work like this? ';

// fs.appendFileSync('../uppgift5/thisText.txt', addTextToFile, 'utf-8');

fs.unlinkSync('../uppgift5/thisText.txt');
console.log('The "thisText-file" has been removed successfullt \n Program Ended...', addTextToFile);



