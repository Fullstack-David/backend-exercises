//** CRUD = create, read, update, delete

import express from 'express';
import { query } from 'express-validator';
import fs from 'fs';
let app = express();

const resolveIndexByUserId = (request, response, next) => {
     // ** Destructuring assignment:
    // Här säger vi att vi vill plocka ut två saker från request-objektet:
    // body och
    // id som finns inuti params objektet.
    /* innebär att vi tar ut body och id från ett objekt som heter request och skapar variabler som heter body och id som vi kan använda direkt i vår kod.*/
    let { params: { id } } = request;

    let parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        return response.status(400).json({ msg: '400: bad request...' });
    }

    // Hittar rätt index i arrayen movie
    // om en film har sammma id som parsedId, retunerar den indexet
    // annars retunerar den -1, vilket betyder att det inte finns
    //någon film i arrayen med samma id
    let findMovieIndex = movies.findIndex((movie) => {
        return movie.id === parsedId;
    })
    if (findMovieIndex === -1) {
        return response.status(404).json({ msg: '404: page note found...' });
    }
    request.findMovieIndex = findMovieIndex;
    next();
}

// ** middleware
app.use(express.json());

let PORT = 3000;
let movies = JSON.parse(fs.readFileSync('./data/movies.json'));


//** READ
//* Link = http://localhost:3000/api/movies
app.get('/api/movies',query(), (request, response) => {
    return response.status(200).json({
        
        status: "sucess",
        count: movies.length,
        data: {
            movies: movies
        }
    });
})

//** CREATE
//* Link = http://localhost:3000/api/movies
app.post('/api/movies', (request, response) => { 
    const { body } = request;
    // minus 1 för att den ska läsa av våra index-array, för att det ska bli rätt med id-numret
    // plus 1 för att vi vill lägga till en ny objekt
    const newMovie = { id: movies[movies.length - 1].id + 1, ...body };
    movies.push(newMovie);
    return response.sendStatus(201);
})

//** PATCH
app.patch('/api/movies/:id',resolveIndexByUserId, (request, response) => {
    let { body, findMovieIndex } = request;
    // Uppdaterar filmen vid det funna indexet med nya data från body
    movies[findMovieIndex] = { id: movies[findMovieIndex].id, ...body };
    return response.sendStatus(200);
})

//** PUT
app.put('/api/movies/:id',resolveIndexByUserId, (request, response) => {
    let { body, findMovieIndex } = request;
    movies[findMovieIndex] = { id: movies[findMovieIndex].id, ...body };
    return response.sendStatus(200);
})

//** DELETE 
app.delete('/api/movies/:id',resolveIndexByUserId, (request, response) => {
    let { findMovieIndex } = request;
    movies.splice(findMovieIndex, 1);
    return response.sendStatus(204);
})

// ** http://localhost:3000/api/movies
app.listen(PORT, () => {
    console.log(`Your APP is running clean on localhost/${PORT}`);
});