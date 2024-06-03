/********** 
* UPPGIFT 4
***********/
const readInput = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo, cost;

readInput.question('Write the saldo: ', (number) => {
    saldo = parseInt(number);
    console.log('Saldo is: ' + saldo + ' kr');
    
    readInput.question('Cost: ', (number) => {
        cost = parseInt(number);
        console.log('It costs: ' + cost);
        
        let sum = saldo - cost;
        if (cost > saldo) {
            console.log('You dont have enogh money, you are short ' + sum + ' kr')
        } else {
            console.log('You can buys it, you get back ' + sum + ' kr')
        }

        readInput.close();
    });

});

readInput.on('close', () => {
    console.log('Goodby');
    process.exit(0);

});