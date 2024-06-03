/********** 
* UPPGIFT 2
***********/

const readline = require('readline');
const readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 

readInput.question('Whaaaaats yoooour naaame??? ', (name) => {
    console.log('Fuck you ' + name);
    
    readInput.question('hah, whats your name? ', (name) => {
        console.log('Fuck you ' + name);
        
        readInput.question('How old are you? ', (age) => {
            console.log('You are ' + age + ' years old!');
            readInput.close();
            
        });
    });

})

readInput.on('close', () => {
    console.log('Goodby see you next time looser:)');
    process.exit(0);
})


