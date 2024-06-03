/************
 * Uppgift-1
*************/

// Creating a server
// Using write()
// Using response.end()
// 

const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    response.write('Testing write-method?? \n');
    response.end('Welcome to my page stranger...');
    console.log('A new request recieved'); 
});


// Portnumret, i detta fall 8000
// loopback-adress : 127.0.0.1

/**************
 * Alternativ-1
 **************/
// server.listen(8000, '127.0.0.1', () => {
//     console.log('Server has strated...')
// });

/**************
 * Alternativ-2
 **************/
server.listen(1995, 'localhost', () => {
    console.log('Success, server has started...');
});
