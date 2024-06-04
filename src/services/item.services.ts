import { CarInterface } from "../interfaces/car.interface";
import { ItemModel } from "../models/item.model";


export const insertItemCar = async (item: CarInterface) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
}

export const getItemsCar = async () => {
    const responseGetItems = await ItemModel.find({});
    return responseGetItems;
}

export const getItemCar = async (id: string) => {
    const responseGetItem = await ItemModel.findById(id);
    return responseGetItem;
}