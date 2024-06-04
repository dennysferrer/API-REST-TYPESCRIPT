import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, putItem } from "../controllers/item.controller";

export const router = Router();

router.get('/', getItems);

router.get('/:id', getItem);

router.post('/', postItem);

router.delete('/', deleteItem);

router.put('/:id', putItem);