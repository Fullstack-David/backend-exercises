import express from 'express';
import { mockUsers } from './utils/constant.mjs';
import { query, validationResult } from 'express-validator'; 
import routes from './routes/allRoutes.mjs';

const app = express();
const PORT = 3001;

//* Denna måste vara med om vi ha ren json-fil, annars får vi
//* ut bara 'id' (tog mig fan 2 timmar för att fatta det)
app.use(express.json());
app.use(routes);


app.get('/', query().isString().notEmpty(),
    (request, response) => {
        const result = validationResult(request);
        console.log(result);
    return response.status(200).send('<h1>Hello and welcome to my website guys</h1>');
});

app.get('/users', query('filter')
    .isString()
    .notEmpty()
    .withMessage("Must not be empty.")
    .isLength({ min: 2, max: 10 })
    .withMessage("Must be at least 3-10 characters."),
    (request, response) => {
        const result = validationResult(request);
        console.log(result);
        const { query: { filter, value } } = request;
        console.log('hej' + { query: { filter,value }});
        if (filter && value) {
            return response.send(mockUsers.filter((user) => user[filter].includes(value)));
        }
    return response.status(200).send(mockUsers);
});

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:3001`);
});