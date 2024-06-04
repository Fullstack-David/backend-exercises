import express from 'express';
import usersRouter from "./routes/users.mjs";
let app = express();
let PORT = 3000;

//* Denna måste vara med om vi ha ren json-fil, annars får vi
//* ut bara 'id' (tog mig fan 2 timmar för att fatta det)
app.use(express.json());

app.use(usersRouter);

// index.js
// let users = JSON.parse(fs.readFileSync('index.json'));


//* Link: http://localhost:3000/
app.get('/', (request, response) => {
    response.write('Welcome to my page!')
    response.end();
});

//* Link: http://localhost:3000/appUsers
app.get('/appUsers', (request, response) => {
    response.status(200).send(appUsers);
});

// POST
// app.post('/appUsers/api', (request, response) => {
//     let { body} = request;
//     let addNewUser = { id: appUsers[appUsers.length - 1].id + 1, ...body };
//     appUsers.push(addNewUser);
//     return response.sendStatus(201);
// });

// PATCH
// app.patch('/appUsers/api/:id',resolveIndexByUserId, (request, response) => {
//     let { body, findUserIndex } = request;
//     appUsers[findUserIndex] = { id: appUsers[findUserIndex].id, ...body };
//     return response.sendStatus(200);
// });

// PUT
// app.put('/appUsers/api/:id',resolveIndexByUserId, (request, response) => {
//     let { body, findUserIndex } = request;
//     let parsedId = parseInt(id);
//     appUsers[findUserIndex] = { id: appUsers[findUserIndex].id, ...body };
//     return response.sendStatus(200);
// });

//DELETE
// app.delete('/appUsers/api/:id', (request, response) => {
//     let { findUserIndex} = request;
//     appUsers.splice(findUserIndex, 1);
//     return response.status(204).send({msg: 'Object deleted successfully.'});

// });


app.listen(PORT, () => {
    console.log(`Your app is running clean on http://localhost:3000/`);
});