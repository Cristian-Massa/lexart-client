export interface FetchData{
    url: string,
    body?: any,
    method: 'get' | 'post' | 'patch' | 'delete' | '';
}