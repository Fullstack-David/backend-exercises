const fs = require('fs');

fs.readFile('output.json', 'utf-8', (err, data) => {
    if (err) {
        return console.error('Error reading JSON-file ', err);
    }
    
    // Konvertera JSON-strängen till ett JavaScript-object
    let jsonData = JSON.parse(data);

    // Lägger till den nya informationen i objektet
    jsonData.push(
        {
            Titel: 'Spiderman',
            Duration: 120,
            Year: 2002
        },
        {
            Title: 'Avengers',
            Duration: 180,
            Year: 2020
        }
    );

    // Konvertera det uppdaterade objektet till JSON-sträng igen
    let updatedData = JSON.stringify(jsonData, null, 2);

    fs.writeFile('output.json', updatedData, 'utf-8', (err) => {
        if (err) {
            return console.error('JSON data failed...', err);
        }

        console.log('JSON data loaded successfully...');
    });
});


