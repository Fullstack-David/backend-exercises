import express from 'express';
let app = express();

const PORT = 3000;

//* The code that runs on the server between the request and the response is called middleware.
app.use(express.json());

let users = [
    {
        id: 1,
        firstName: "Mark",
        lastName: "Walker",
        nickName: "Mark"

    },
    {
        id: 2,
        firstName: "David",
        lastName: "Heidari",
        nickName: "David"

    },
    {
        id: 3,
        firstName: "walker",
        lastName: "Hassan",
        nickName: "Walker"

    }
]
//* Link: http://localhost:3000/
app.get("/", (request, response) => {
    response.status(200).send('Welcome to Home Page');
});

//* Link: http://localhost:3000/api/users
app.get("/api/users", (request, response) => {

    // ** här skickar vi hela json-objektet
    response.status(200).json(users);

    // Här skciakr vi bara ett objekt
    // response.status(200).send({
    //     id: 3,
    //     firstName: "Mark",
    //     lastName: "Walker",
    //     nickName: "Marky"
    // })
})

//* Link: http://localhost:3000/api/users/2
app.get("/api/users/:id", (request, response) => {

    let id = parseInt(request.params.id); 

    if (isNaN(id)) {
        return response.status(400).send('400 - string for id is bad request...');
    }
    
    let findUser = users.find((user) => {
        console.log(user.id)
        return user.id === id;
    })

    if (!findUser) {
        return response.status(404).send('Error. User id not found...')
    }
    response.status(200).send(findUser);
    
})
//* Link: http://localhost:3000/usersfilter/?firstName=David&nickName=Davidi
app.get("/usersfilter/:firstName/:nickName", (request, response) => {
    let firstName = request.params.firstName;
    let nickName = request.params.nickName;

    let findBasedOnParameters = users.filter((user) => {

        // ** denna fungerar inte
        // return user.firstName() === firstName && user.nickName === nickName;

        //** includes fungerar 
        return user.firstName.includes(firstName) && user.nickName.includes(nickName);   
    })
    
    
    response.status(200).send(findBasedOnParameters);
})

app.get('/usersfilter', (request, response) => {
    // exempel/userfilters?firstName=Mark
    let firstName = request.query.firstName;
    let nickName = request.query.nickName;
    
    let findAllBasedOnQuery = users.filter((user) => {
        
        // ** filter
        // return user.firstName === firstName
        
        // ** filter
        // ** http://localhost:3000/usersfilter/?firstName=David&nickName=Davidi
        // return user.firstName === firstName && user.nickName === request.query.nickName;


        //** include
        return user.firstName.includes(firstName);

        // ** includes
        return user.firstName.includes(firstName) && user.nickName.includes(nickName);
    })

    // måste vara med annars ser vi inget
    response.status(200).send(findAllBasedOnQuery)
})



app.listen(PORT, () => {
    console.log(`App is running: ${PORT}. localhost${PORT} http://localhost:3000/`)
})


