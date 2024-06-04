import { mockUsers } from "./constant.mjs";

export const resolveIndexByUserId = (request, response, next) => {
    let { body, params: { id } } = request;
    let parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        return response.status(400).send({msg: '400. Bad Request. Invalid ID.'})
    }
    let findUserIndex = mockUsers.findIndex((user) => {
        return user.id === parsedId;
    });
    if (findUserIndex === -1) {
        return response.status(404).send({msg: 'Page not found.'})
    }
    mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
    request.findUserIndex = findUserIndex;
    next();
}