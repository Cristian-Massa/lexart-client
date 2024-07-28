import { FetchData } from "./fetch.interface";

export interface ModalInterface{
    active?: boolean,
    createForm?: boolean,
    petitionConfig: FetchData,
    message?: string,
    isLoading: boolean,
    onClick?: ({ url, method, body }: FetchData)=> void,
}