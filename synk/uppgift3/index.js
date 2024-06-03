/***********
* UPPGIFT-2
************/

const fs = require('fs');
const textFile = 'Hi my name is David!';

fs.writeFileSync('../uppgift3/text.txt', textFile , 'utf-8'); // utf-8 är friviliigt men de två andra ska vara med!
console.log('Program ended...');
