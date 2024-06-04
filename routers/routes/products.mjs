import { Router } from "express";
import { mockUsers } from "../utils/constant.mjs";

const router = Router();

router.get('/products', (request, response) => {
    return response.status(200).send(mockUsers);
});

export default router;