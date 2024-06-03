/***********
* Upggift 4 
************/
// Radera en textfil, "Delete file (.txt)", det måste finnas en textfil

const fs = require('fs');

fs.unlink('unlink.txt', (aError) => {
    if (aError) {
        return console.error(aError);
    };

    console.log('File deleted succesfully...');
});


