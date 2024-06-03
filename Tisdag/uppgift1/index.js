const readline = require('readline');
const readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readInput.question('Please enter your name: ', (name) => {
    console.log('You entered: ' + name);
    readInput.close();
});

readInput.on('close', () => {
    console.log('Interface closed');
    process.exit(0);
})
