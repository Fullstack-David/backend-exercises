import express from 'express';
let app = express();

app.set('view engine', 'ejs');
const PORT = 3000;

// To serve static files
app.use(express.static('public'));

// let username = '';

app.get('/:userQuery', (request, response) => {
    response.render('index', {
        data: { userQuery: request.params.userQuery },
        searchResults: ['Alkemisten', 'I am Zlatan', 'The inteligent investor'],
        message: 'Good evening Sir, ', 
        isLoggedIn: true,
        username: 'Superman',
    });
});

app.listen(PORT, () => {
    console.log(`App is running on localhost:${PORT} http://localhost:${PORT}`);
});