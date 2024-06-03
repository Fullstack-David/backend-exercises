import { Router } from "express";
import { appUsers } from "../utils/constant.mjs";
import {resolveIndexByUserId} from "../utils/middleware.mjs"

const router = Router();

router.post('/appUsers/api', (request, response) => {
    let { body} = request;
    let addNewUser = { id: appUsers[appUsers.length - 1].id + 1, ...body };
    appUsers.push(addNewUser);
    return response.sendStatus(201);
});

router.patch('/appUsers/api/:id',resolveIndexByUserId, (request, response) => {
    let { body, findUserIndex } = request;
    appUsers[findUserIndex] = { id: appUsers[findUserIndex].id, ...body };
    return response.sendStatus(200);
});

router.put('/appUsers/api/:id', resolveIndexByUserId, (request, response) => {
    let { body, findUserIndex } = request;
    appUsers[findUserIndex] = { id: appUsers[findUserIndex].id, ...body };
    return response.sendStatus(200);
});

router.delete('/appUsers/api/:id', (request, response) => {
    let { findUserIndex} = request;
    appUsers.splice(findUserIndex, 1);
    return response.status(204).send({msg: 'Object deleted successfully.'});
});





export default router;