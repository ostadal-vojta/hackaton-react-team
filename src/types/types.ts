export enum Field {
    'low',
    'medium',
    'high'
}

export interface ISwimlane {
    id?: string;
    title: string;
    order: number;
    tasks?: string[];
}

export interface ICard {
    id?: string;
    title: string;
    created?: string;
    updated?: string;
    field: Field
}

export interface ListResponse<T> {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    items: T[];
}