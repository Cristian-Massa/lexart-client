import { FetchData } from "./fetch.interface";

export interface ModalInterface<T>{
    active?: boolean,
    createForm?: boolean,
    petitionConfig?: FetchData<T>,
    message?: string,
    isLoading?: boolean,
    onClick?: (petitionConfig: FetchData<T>)=>void
}