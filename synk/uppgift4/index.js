/***********
* Method 3
************/
// Denna kodsnut skriver om samma text varjegång
const fs = require('fs');
const addThisText = ' Im trying to undrestand....';

fs.appendFileSync('../uppgift4/append.txt', addThisText, 'utf-8');