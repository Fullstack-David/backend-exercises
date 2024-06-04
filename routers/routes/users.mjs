import { Router } from "express";
import { resolveIndexByUserId } from "../utils/middleware.mjs";
import { mockUsers } from "../utils/constant.mjs";
let router = Router();


router.get('/users/:id',resolveIndexByUserId, (request, response) => {
    let { findUserIndex } = request;
    return response.status(200).send(mockUsers[findUserIndex]);
});

router.post('/users', (request, response) => {
    const { body } = request;
    let findUserIndex = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };
    mockUsers.push(findUserIndex);
    return response.status(201).send(findUserIndex);    
});

router.patch('/users/:id',resolveIndexByUserId,  (request, response) => {
    response.sendStatus(200);
});

router.put('/users/:id',resolveIndexByUserId, (request, response) => {
    return response.sendStatus(200);
});

router.delete('/users/:id', (request, response) => {
    let { findUserIndex } = request;
    mockUsers.splice(findUserIndex, 1);
    return response.status(200).send({ msg: 'The object deleted successfully.' });
});







export default router;