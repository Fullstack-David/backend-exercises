// ** Exercise 1: Create a route that responds with "Hello, World!" when a GET request is made to "/hello"

// import express from 'express';
// let app = express();

// const PORT = 3005;

// app.get("/hello", (request, response) => {
//     response.status(200).send('Hello world!')
// })


// app.listen(PORT, () => {
//     console.log(`App is running: ${PORT}. localhost: ${PORT}`)
// })
// **************************************************************************************************************

// ** Exercise 2: Create a route that takes a parametr ":name" and responds with "Hello, [the name you entered!"

// import express from "express";
// let app = express();

// let PORT = 3000;

// app.get("/hello/:name", (request, response) => {
//     let name = request.params.name;
//     response.status(200).send(`Hello ${name}` )
// })

// app.listen((PORT), () => {
//     console.log(`App is running at: ${PORT}`)
// })

// **************************************************************************************************************

// ** Exercise 3: Create a route that responds with a JSON object containing key-value pairs of user details.

// import express from 'express';
// let app = express();
// let PORT = 3000;

// let users = [
//     {
//         "id": 1,
//         "name": "Batman",
//         "superpower": "Rich as fuck"
//     },
//     {
//         "id": 2,
//         "name": "Superman",
//         "superpower": "God mode"
//     },
//     {
//         "id": 3,
//         "name": "Deadpool",
//         "superpower": "Immortal"
//     }
// ]
// app.get('/', (request, response) => {

//     response.status(200).send("Welcome to my page!")

// })

// app.get('/api/users', (request, response) => {
//     response.status(200).json(users)
// })

// app.listen((PORT), () => {
//     console.log(`Your APP is running now at localhost: ${PORT}....`)
// })

// **************************************************************************************************************
// ** Exercise 4: Create a route that redirects to "/hello" when accessed at "/greet".

// import express from 'express';
// let app = express();
// let PORT = 3000;

// app.get("/hello", (request, response) => {
//     response.status(200).send('Hello world!')
// })

// //** Försökte redirecta till denna 'get' men lyckades inte????
// app.get('/hello/:name', (request, response) => {
    
//     let name = request.params.name;
//     response.status(200).send(`Hello ${name}`);
// })


// //** Men det ick bra att riderecta till denna
// app.get('/greet', (request, response) => {
//     response.redirect('/hello');
// })

// app.listen((PORT), () => {
//     console.log(`Your APP is running now at localhost: ${PORT}...`)
// })

// **************************************************************************************************************
// ** Exercise 5: Create a route that responds with "Good morning" or "Good evening" depending on the time of day.
// ** Exercise 6: Create a route taht responds with the current date and time.


// import express from 'express';
// let app = express();
// let PORT = 3005;

// app.get('/time', (request, response) => {
    
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();
//     const formattedTime = `${hours}:${minutes}:${seconds}`;

//     const greeting = formattedTime < 12 ? 'Good morning Sir' : 'Good evening Sir';
    
//     response.status(200).send(`${greeting}... The time is ${formattedTime} right now!`);
// })

// app.listen((PORT), () => {
//     console.log(`Your App is running at localhost: ${PORT}`)
// })

// **************************************************************************************************************
// ** Exercise 7: Create a route that responds with the square of a number passed as a parameter.

// import express from 'express';
// let app = express();
// let PORT = 3000;

// app.get('/', (request, response) => {
//     response.status(200).send('Hello, World!')
// })

// app.get('/square/:number',(request, response)=> {
//     let number = parseInt(request.params.number);

//     if (isNaN(number)){
//         return response.status(400).send('Parameter provided is not a number!');
//     }

//     let square = number * number;
//     response.status(200).send(`The square of ${number} is ${square}...`)
// })

// //** http://localhost:3000/square/5
// app.listen(PORT, () => {
//     console.log(`Your APP is running clean now at localhost: ${PORT}...`)
// })

// **************************************************************************************************************
// ** Exercise 8: Cretae a route that responds with the sum of two numbers as query parameters.

// import express from 'express';
// let app = express();
// let PORT = 3000;

// app.get('/', (request, responds) => {
    
//     responds.status(200).send('<h1>Hello, World!</h1>');
// })

// app.get('/sum/:number', (request, response) => {

//     let number = parseInt(request.params.number);

//     if (isNaN(number)) {
//         return response.status(400).send('The provoded number is not a number...')
//     }

//     let sum = number + number;
//     response.status(200).send(`The sum of number ${number} is ${sum} `)
// })

// //** http://localhost:3000/sum/5
// app.listen(PORT, () => {
//     console.log(`Your APP is running clean boy at localhost: ${PORT}`)
// })

// **************************************************************************************************************
// ** Exercise 9: Create a route that responds with a random poem.

import express from 'express';
let app = express();
let PORT = 3000;

const poems = [

    {
        "Poem one":"Two roads diverged in a yellow wood, And sorry I could not travel both, And be one traveler, long I stood, And looked down one as far as I could, To where it bent in the undergrowth."
    },
    {
        "Poem two":"Shall I compare thee to a summer's day?, Thou art more lovely and more temperate: Rough winds do shake the darling buds of May, And summer's lease hath all too short a date."
    },
    {
        "Poem three":"I wandered lonely as a cloud, That floats on high o'er vales and hills, When all at once I saw a crowd, A host, of golden daffodils; Beside the lake, beneath the trees, Fluttering and dancing in the breeze."
    },
    {
        "Poem four":"Hope is the thing with feathers That perches in the soul, And sings the tune without the words, And never stops at all."
    }
]

app.get('/', (request, response) => {
    response.status(200).send('Hello, World!')
})

// ** Den random generade poem ska vara här, men hur ska den skapas???
app.get('/poem', (request, response) => {
    
    const randomIndex = Math.floor(Math.random() * poems.length );
    let randomPoem = poems[randomIndex];
    response.status(200).send(randomPoem);
})

app.listen(PORT, () => {
    console.log(`Your APP is running clean at localhost/${PORT}`)
})