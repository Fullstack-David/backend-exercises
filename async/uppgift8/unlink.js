const fs = require('fs');

fs.unlink('outputJson.json', (err) => {
    if (err) {
        
        return console.error('Error to delete the JSON file', err);
    }

    console.log('File deleted successfully...');
});