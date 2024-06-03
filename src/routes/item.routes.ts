import { Router, Request, Response } from "express";

export const router = Router();

router.get('/items', (req: Request, res: Response) => {
    res.send({"data": "Hola mundo desde items"});
});


