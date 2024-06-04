import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

export const getItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, `ERROR_GET_BLOG - ${error}`);
    }
}

export const getItems = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, `ERROR_GET_BLOGS - ${error}`);
    }
}

export const putItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, `ERROR_UPDATE_BLOG - ${error}`);
    }
}

export const postItem = (req: Request, res: Response) => {
    try {
        const body = req.body;
        res.send(body);
    } catch (error) {
        handleHttp(res, `ERROR_POST_BLOG - ${error}`);
    }
}

export const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, `ERROR_DELETE_BLOG - ${error}`);
    }
}