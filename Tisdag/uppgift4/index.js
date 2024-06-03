/********** 
* UPPGIFT 3
***********/
const readline = require('readline');

const readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum = 0;

readInput.question('Write a number: ', (number) => {
    parsNumberOne = parseInt(number);
    sum += parsNumberOne; 
    console.log('You entered ' + parsNumberOne);

    readInput.question('Write a new number: ', (number) => {
        parsNumberTwo = parseInt(number);
        sum += parsNumberTwo; 
        console.log('Your second number is: ' + parsNumberTwo); 
        
        console.log('Sum is: ' + sum);
        readInput.close(0);
    })
})

readInput.on('close', () => {
    console.log('Goodby mf');
    process.exit(0);
});