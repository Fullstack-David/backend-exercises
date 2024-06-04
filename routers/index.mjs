import express from 'express';
import { mockUsers } from './utils/constant.mjs'; 
import routes from './routes/allRoutes.mjs';

const app = express();
const PORT = 3001;

//* Denna måste vara med om vi ha ren json-fil, annars får vi
//* ut bara 'id' (tog mig fan 2 timmar för att fatta det)
app.use(express.json());
app.use(routes);


app.get('/', (request, response) => {
    return response.status(200).send('<h1>Hello and welcome to my website guys</h1>');
});

app.get('/users', (request, response) => {
    return response.status(200).send(mockUsers.map(user => user));
});

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:3001`);
});