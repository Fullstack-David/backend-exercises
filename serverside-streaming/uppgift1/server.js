const fs = require('fs');
const http = require('http');

const server = http.createServer().listen(3000);

console.log('Server started...');
console.log('enter --> localhost:3000 <-- in your browser');

// For produktion . using readable and writable 

server.on('request', (request, response) => {
    const readingStream = fs.createReadStream('../uppgift1/largeFile.txt')

    readingStream.on('data', (chunks) => {
        response.write(chunks);
    })

    // Nu kan vi köra vår response.end(), då har all vår data har laddats bit för bit
    readingStream.on('end', () => {
        response.end()
    })

    readingStream.on('error', (err) => {
        response.end(err.message)
    })
})