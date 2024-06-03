/********** 
* UPPGIFT 6
***********/

// Method 1 

// const readInput = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let weigth = 75;
// readInput.question('Hur mycket väger kuveret? ', (number) => {
//     const weight = parseInt(number);
//     if (weight >= 0 && weight <= 20) {
//         console.log('Portot kostar 5 kr för ' + weight + ' gram');
//     } else if (weight > 20 && weight < 100) {
//         console.log('Portot kostar 10 kr för ' + weight + ' gram');      
//     } else if (weight > 100) {
//         console.log('Portot kostar 20 kr över ' + weight + ' gram');
//     }
//     readInput.close();
// });

// readInput.on('close', () => {
//     console.log('Goodby');
//     process.exit(0);
// });


/********************
 * Method 2 
 ********************/

const readline = require('readline');

const calculatePostage = (weight) => {
    if (weight >= 0 && weight <= 20) {
        return 5;
    } else if (weight > 20 && weight < 100) {
        return 10;
    } else {
        return 20;
    }
};

const askForWeight = () => {
    const readInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readInput.question('How much the postage weigth? ', (number) => {
        weight = parseInt(number);
        postage = calculatePostage(weight);

        console.log(`It cost\'s ${postage}$ for ${weight} gram!`);

        readInput.close();
    });

    readInput.on('close', () => {
        console.log('Heeejjj dåå kompis!');
        process.exit(0);
    });
}

askForWeight();