export interface FetchData<T>{
    url: string,
    body?: T,
    method: 'get' | 'post' | 'put' | 'delete' | '';
}