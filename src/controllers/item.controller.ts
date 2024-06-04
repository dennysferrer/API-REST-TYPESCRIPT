import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertItemCar, getItemsCar, getItemCar } from "../services/item.services";


export const getItem = async (req: Request, res: Response) => {
    try {
        const responseGetItem = await getItemCar(req.params.id);
        res.send(responseGetItem);
    } catch (error) {
        handleHttp(res, `ERROR_GET_ITEM - ${error}`);
    }
}

export const getItems = async (req: Request, res: Response) => {
    try {
        const responseItemsCar = await getItemsCar();
        res.send(responseItemsCar);
    } catch (error) {
        handleHttp(res, `ERROR_GET_ITEMS - ${error}`);
    }
}

export const putItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, `ERROR_UPDATE_ITEM - ${error}`);
    }
}

export const postItem = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const responseItem = await insertItemCar(body);
        res.send(responseItem);

    } catch (error) {
        handleHttp(res, `ERROR_POST_ITEM - ${error}`);
    }
}

export const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, `ERROR_DELETE_ITEM - ${error}`);
    }
}

function insertItemCard() {
    throw new Error("Function not implemented.");
}
