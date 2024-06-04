import express from 'express';
// import usersRouter from '../routes/users.mjs';

let app = express();
let PORT = 3000;
app.use(express.json());

//* Global middleware
app.use((request, respons, next) => {
    let path = request.url;
    if (path === '/pappa') {
        request.myMassage = 'Hi dady, '
    }
    if (path === '/mamma') {
        request.myMassage = 'Hi momy, '
    }
    if (path === '/syrran') {
        request.myMassage = 'Hi syster, '
    }
    next();
    
});

//* Local middleware
// let msgPappa = (request, respons, next) => {
//     console.log('Hi dady, ');
//     respons.write('Hi dady, ');
//     next();
// }

// let msgMamma = (request, respons, next) => {
//     console.log('Hi mommy, ');
//     respons.write('Hi mommy, ');
//     next();
// }

// let msgSyrran = (request, respons, next) => {
//     console.log('Hi syster, ');
//     respons.write('Hi syster, ');
//     next();
// }


//* link: http://localhost:3000/pappa
app.get('/pappa', (request, response) => {
    console.log("can borrow the car?");
    //* ERROR: Cannot set headers after they are sent to the client (om vi tar med raden nedan!)
    // response.write("can i borrow the car? ");
    response.status(200).send(`${request.myMassage} can i borrow the car?`);
    response.end();
});

//* link: http://localhost:3000/mamma
app.get('/mamma', (request, response) => {
    console.log('can i get some candy?');
    // response.write('can i get som candy?');
    response.status(200).send(`${request.myMassage} can i get some candy?`)
    response.end();
});

//* link: http://localhost:3000/syrran
app.get('/syrran', (request, response) => {
    console.log('can you lend me some money? ');
    // response.write('can you lend me some money?');
    response.status(200).send(`${request.myMassage} can i borrow some money?`)
    response.end();
});

app.listen(PORT, () => {
    console.log(`Your app is running clean on localhost: ${PORT}`);
});