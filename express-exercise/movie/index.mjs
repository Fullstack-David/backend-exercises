import express from 'express';
import fs from 'fs';
let app = express();
/* midddleware för att omvandla JSON-formatet till JavaScript-format
 För din nuvarande användning, där du bara skickar tillbaka data som du 
redan har parsat från en fil, behöver du inte använda express.json(). Men om du senare skulle 
ta emot data från en klient som skickar JSON i en POST- eller PUT-begäran, då skulle express.json() 
vara nödvändigt för att tolka den inkommande JSON-datan.
 */
app.use(express.json()); 
let PORT = 3000;

const resolveIndexByUserId = (request, response, next) => {
    console.log('Middleware is running.');
    // vi tar ut body och params från 'request'-objektet
    // sedan tar vi ut id't från params
    //id = är ett URL-parameter här
    // params = är ett objekt som innehåller parametrar från URL
    let { params: { id } } = request;
    let parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        return response.status(400).send({msg: "Bad Request. Invalid ID."})
    }
    let findMovieIndex = movies.findIndex(movie => movie.id === parsedId);
    if (findMovieIndex === -1) {
        return response.sendStatus(404);
    }
    request.findMovieIndex = findMovieIndex;
    next();
}

// app.use(resolveIndexByUserId);

//** om du tar bort JSON.parse så laddar ner datorn varje gång du vill uppdatera localhost???
const movies = JSON.parse(fs.readFileSync('./json/movie.json'));

//** GET-homePage
app.get('/', (requset, response) => {
    return response.status(200).send('<h1>Welcome to my page!</h1>');
})

//** GET-moviePage
app.get('/api/movie', (request, response) => {
    return response.status(200).send(movies);
})

//** POST
app.post('/api/movie', (request, response) => {
    const { body } = request;
    // movies.length -1 = ger indexet för den sista filmen i movies-arrayen
    // movies[movies.length -1] = ger hela objektet för den sista filmen
    // movies[movies.length -1].id + 1 = hämta id från den sista filmen och öka det med 1
    // id: ger ett unikt ID i den nya filmen
    // kopierar alla egenskaper från 'body'-objektet in i det nya objektet
    const findMovieIndex = { id: movies[movies.length - 1].id + 1, ...body }
    movies.push(findMovieIndex);
    // 201 att begäran har lyckats och en ny resurs har skapats som resultat.
    // Används huvudsakligen för POST-begäran
    return response.status(201).send(findMovieIndex);
})

//** PUT
app.put('/api/movie/:id',resolveIndexByUserId, (request, response) => {
    const { body, findMovieIndex } = request;
    // movies[movieIndex] = hitta en film baserad på indexet, vi tar den för att uppdaera den
    // = : ersätta den befintliga mot den nya
    // { id: parsedId, ...body } = den uppdaterade filmen har samma id men allt annat är uppdaterad
    // movies[findMovieIndex] = { id: parsedId, ...body }
    movies[findMovieIndex] = { id: movies[findMovieIndex].id, ...body }
    return response.sendStatus(200);
})

//** PATCH
app.patch('/api/movie/:id',resolveIndexByUserId, (request, response) => {
    const { body, findMovieIndex } = request;
    movies[findMovieIndex] = { id: movies[findMovieIndex].id, ...body }
    return response.sendStatus(201);
})

//** DELETE
app.delete('/api/movie/:id', (request, response) => {
    const { findMovieIndex} = request;
    movies.splice(findMovieIndex, 1);
    return response.sendStatus(204);
})

app.listen(PORT, () => {
    console.log(`App is running clean on localhost: ${PORT}`);
})