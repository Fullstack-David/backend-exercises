const fs = require('fs');
const http = require('http');

const server = http.createServer().listen(3000);

console.log('Server Started...');
console.log('Enter --> localhost:3000 <-- in your browser');

// For produktion it's better to use pipe - method. (for cases when reading is fatsr than writting).
server.on('request', (request, response) => {
    let readingStream = fs.createReadStream('../uppgift2/largeFile.txt');

    readingStream.on('error', (error) => {
        response.end(error.message)
    })

    readingStream.pipe(response);
})