import express, { request, response } from 'express';
import bodyParser from 'body-parser'
const app = express();
const PORT = 3000;

//* ejs
app.set('view engine', 'ejs');

// Denna rad måste vara med för att vi ska kunna ha en static-page
//då kan vi länka css'en med hjälp av denna 
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

let plNames = ['Java', 'JavaScript', 'Python', 'Java'];

// home-page
app.get('/', (request, response) => {
    response.render('index', {
        pageTitle: 'home page',
        plNames: plNames
    });
});

// contact-page
app.get('/contact', (request, response) => {
    response.render('contact', {
        pageTitle: 'contact page'
    });
});

// about-page
app.get('/about', (request, response) => {
    response.render('about', {
        pageTitle: 'About DiDi'
    });
});

app.post('/', (request, response) => {
    plNames.push(request.body.plNames);
    response.redirect('/');
});


app.listen(PORT, () => {
    console.log(`App is running on localhost: ${PORT}, http://localhost:3000/`);
});