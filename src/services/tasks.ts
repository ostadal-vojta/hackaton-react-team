import { ICard, ListResponse } from "../types/types.ts";
import { apiInstance } from "./auth.ts";
import { AxiosResponse } from "axios";

export const getCards = async () => {
    try {
        const req: AxiosResponse<ListResponse<ICard>> = await apiInstance.get('/collections/tasks/records');
        return req.data?.items;
    } catch (error) {
        console.error(error);
    }
}

export const updateCard = async (payload: ICard) => {
    try {
        const req: AxiosResponse<ListResponse<ICard>> = await apiInstance.patch(`/collections/tasks/records/${payload.id}`, payload);
        return req.data?.items;
    } catch (error) {
        console.error(error);
    }
}

export const createCard = async (payload: ICard) => {
    try {
        const req: AxiosResponse<ListResponse<ICard>> = await apiInstance.post('/collections/tasks/records', payload);
        return req.data?.items;
    } catch (error) {
        console.error(error);
    }
}