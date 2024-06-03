/************
 * Uppgift-6
*************/
// Skriv till en "Json-fil", "Write file (.json)", writeFile()

const fs = require('fs');

const data = {
    Name: 'David',
    City: 'New York',
    Age: 30,
    Jobb: 'Fullstack JavaScript'
}

const jsonData = JSON.stringify(data, null, 2); // null och 2 används för att få till en snygg formatering och indentering

fs.writeFile('writeFile.json', jsonData, 'utf-8', (err) => {
    if(err) {
        return console.error('Error writing to JSON file', err)
    }
    console.log('JSON fiel has been writen successfully!')
});