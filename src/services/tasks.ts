import {ICard, ListResponse} from "../types/types.ts";
import {apiInstance} from "./auth.ts";
import {AxiosResponse} from "axios";

export const getCards = async () => {
    try {
        const req: AxiosResponse<ListResponse<ICard>> = await apiInstance.get('/collections/tasks/records');
        return req.data?.items;
    } catch (error) {
        console.error(error);
    }
}
