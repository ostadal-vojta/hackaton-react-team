import {apiInstance} from "./auth.ts";
import {ISwimlane, ListResponse} from "../types/types.ts";
import {AxiosResponse} from "axios";



export const getSections = async (): Promise<ISwimlane[] | undefined> => {
    try {
        const req: AxiosResponse<ListResponse<ISwimlane>> = await apiInstance.get('/collections/sections/records', );
        return req.data?.items;
    } catch (error) {
        console.error(error)
    }
};

export const addSection = async (payload: ISwimlane) : Promise<ISwimlane | undefined> => {
    try {
        const req: AxiosResponse<ISwimlane> = await apiInstance.post('/api/collections/sections/records', payload);
        return req.data;
    } catch (error) {
        console.error(error);
    }
};
