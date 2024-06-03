const { error } = require('console');s
const fs = require('fs');
const http = require('http');

// Den första ska vara readFileSync och övriga ska vara bara readFile 
//för att hela sidan ska inte laddas varje gång, vilket påverkar prestandan.
const readFileHome = fs.readFileSync('index.html', 'utf-8');


// För att få till en readFile bara så behöver en callback-funktion
const readFileAbout = fs.readFile('about.html', 'utf-8', (err, data) => {
    if (err) {
        return console.error(err);
    } else {
        response.write(data);
        console.log(data);
    }
});


const readFileContact = fs.readFile('contact.html', 'utf-8', (err, data) => {
    if (err) {
        return console.error(err);
    } else {
        response.write(data);
        console.log(data);
    }
});

// Hero uppgift
const heros = JSON.parse(fs.readFile('superheros.json', 'utf-8', (err, data) => {
    if (err) {
        return console.error(err);
    } else {
        response.write(data);
        console.log(data);
    }
}));

const superHeros = fs.readFile('superheros.html', 'utf-8', (err, data) => {
    if (err) {
        return console.error(err);
    } else {
        response.write(data);
        console.log(data);
    }
});
// const superherosDetails = fs.readFileSync('superHerosDetail2.html', 'utf-8');

const heroDataToHTML = (template, hero) => {
    return template
    .replace('{{%IMAGE%}}', hero.image)
    .replace('{{%HERONAME%}}', hero.heroName)
    .replace('{{%FIRSTNAME%}}', hero.firstName)
    .replace('{{%LASTNAME%}}', hero.lastName)
    .replace('{{%CONTENT%}}', hero.description)
};

const server = http.createServer((request, response) => {
    const path = request.url.toLowerCase();

    if (path === '/' || path === '/home') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(readFileHome);
        response.end();

    } else if (path === '/about') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(readFileAbout);
        response.end();
    
    } else if (path === '/contact') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(readFileContact);
        response.end();
    
    } else if (path === '/superheros') {
        const allHeros = heros.map((hero) => {
            return heroDataToHTML(superHeros, hero);
        }).join('');

        const finalHTML = superHeros.replace('{{%HERONAME%}}', allHeros);

        response.writeHead(200, { 'Content-Type': 'text/html ' });
        response.write(finalHTML);
        response.end();
    
    } else if (path.startsWith('/images/')) {
        const imagePath = '.' + path;

        fs.readFile(imagePath, (err, data) => {
            if (err) {
                return console.error(err)
            } else {
                response.writeHead(200, { 'Content-Type': 'image/png' });
                response.write(data);
                response.end();
            }
        })
    }
}).listen(3000);

// server.listen(3000, 'localhost', () => {
//     console.log('Server started');
//     console.log('enter --> localhost:3000 <-- in your browser');
// });

