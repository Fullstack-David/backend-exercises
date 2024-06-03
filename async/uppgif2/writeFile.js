/************* 
* Uppgift-2 
**************/

// skriv till en text-fil, writeFile(). 
//Här så behöver du inte skapa en textfil

const fs = require('fs');

let addThisText = 'David...';

fs.writeFile('myTextFile.txt', addThisText, (aError) => {

    if (aError) {
        return console.error(aError)
    }

    console.log(addThisText.toString());
    console.log('Data written succesfully!...');
});

console.log('Program Ended....');