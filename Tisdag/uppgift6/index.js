/********** 
* UPPGIFT 5
***********/
const readInput = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let juniorPrice = 20;
let seniorPrice = 35;

readInput.question('Mata in ålder: ', (number) => {
    let age = parseInt(number);

    if (age < 16 || age > 65) {
        console.log('Biljetten kostar: ' + parseInt(juniorPrice) + ' kr');
    } else if(age >= 16 || age >= 65){
        console.log('Biljetten kostar ' + parseInt(seniorPrice) + ' kr');
    }

    readInput.close();
})

readInput.on('close', () => {
    console.log('Goodby mf');
    process.exit(0);
})