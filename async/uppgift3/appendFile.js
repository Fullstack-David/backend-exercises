/*************
 * Uppgift 3
*************/
// Uppdatera en textfil, "Update file (.txt)". appendFile(), det måste finnas en textfil 


const fs = require('fs');
const addThisText = '\n How you doing? ';

fs.appendFile('appendFile.txt', addThisText, (aError) => {
    if (aError) {
        return console.error(aError);
    };

    console.log('File success...');
});