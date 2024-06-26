import { Router } from "express";
import { readdirSync } from "fs";


const PATH_ROUTER = `${__dirname}`;
export const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file;
}


readdirSync(PATH_ROUTER).filter(fileName => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== 'index'){
        import (`./${cleanName}.route`).then((moduleRouter) => {
            console.log(`Se esta cargando la ruta ... /${cleanName}`)
            router.use(`/${cleanName}`, moduleRouter.router);
        })
    }
});