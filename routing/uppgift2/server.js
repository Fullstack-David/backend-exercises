const http = require('http');
const fs = require('fs');

// const output = 'Whaaat?? '
const readFile = fs.readFileSync('index.html', 'utf-8');

// Creating the server
const server = http.createServer((request, response) => {
    response.write(readFile);
    response.end();

    console.log('A new request has recieved...');
});

// Starting the server
server.listen(3000, 'localhost', () => {
    console.log('Server has started successfully....')
});

