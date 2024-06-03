import express from 'express';
let app = express();
let PORT = 3000;
app.use(express.json());

//** Med denna 'middleware' har vi flyttat all logik i en funktion 
const resolveIndexByUserId = (request, response, next) => {
    let { params: { id } } = request;
    let parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        return response.status(400).send({msg: "Bad Request. Invalid ID."})
    } 
    let findUserIndex = users.findIndex(user => user.id === parsedId);
    if (parsedId === -1) {
        return response.sendStatus(404);  
    }
    request.findUserIndex = findUserIndex;
    next();
}
//** Using middleware
// Den är global
// loggar typen av request i terminalen
// denna ska ligga högst upp om man vill att den loggar alla request
// app.use(resolveIndexByUserId);

const users = [
    {id: 1, userName: "david", displayName: "David"},
    {id: 2, userName: "sofie", displayName: "Sofie"},
    {id: 3, userName: "sara", displayName: "Sara"},
    {id: 4, userName: "anna", displayName: "Anna"},
    {id: 5, userName: "alex", displayName: "Alex"},
    {id: 6, userName: "ida", displayName: "Ida"},
    {id: 7, userName: "kalle", displayName: "Kalle"},
]
//** GET-welcome-msg
app.get('/', (request, response) => {
    return response.status(200).send('<h1>Hello, World!</h1>')
})

//** GET
//* Link = http://localhost:3000/api/users
app.get('/api/users', (request, response) => {
    if (!users) {
        return response.status(404).send('There is no users with this id');
    }
    return response.status(200).send(users);
})

//** POST  
app.post('/api/users', (request, response) => {
    let { body } = request;
    let addNewUser = { id: users[users.length - 1].id + 1, ...body }
    users.push(addNewUser);
    return response.status(201).send(addNewUser);
}) 

//** PUT
app.put('/api/users/:id', resolveIndexByUserId, (request, response) => {
    const { body, findUserIndex} = request;
    users[findUserIndex] = { id: users[findUserIndex].id, ...body }
    return response.sendStatus(200);
})

//** PATCH
app.patch('/api/users/:id',resolveIndexByUserId, (request, response) => {
    let { body, findUserIndex} = request;
    users[findUserIndex] = { id: users[findUserIndex].id, ...body }
    return response.sendStatus(200);
})

//** DELETE
app.delete('/api/users/:id',resolveIndexByUserId, (request, response) => {
    let { findUserIndex} = request;
    users.splice(findUserIndex, 1)
    return response.sendStatus(204);
})

//* Link = http://localhost:3000/api/users
app.listen(PORT, () => {
    console.log(`==> Your APP is running on localhost/${PORT} <===`)
})