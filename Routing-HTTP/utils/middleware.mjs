import { appUsers } from "./constant.mjs";


export const resolveIndexByUserId = (request, response, next) => {
    let { params: { id } } = request;
    let parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        return response.status(400).send({ msg: 'Bad Request.' });
    }
    let findUserIndex = appUsers.findIndex((user) => {
        return user.id === parsedId;
    });
    if (findUserIndex === -1) {
        return response.status(404).send({ msg: '404, Page not found.' });
    }

    request.findUserIndex = findUserIndex;
    next();
}