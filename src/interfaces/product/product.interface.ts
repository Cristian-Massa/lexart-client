export interface ProductInfo{
    id?: number,
    name: string,
    stock: number,
    price: number,
    model: string,
    mark: string
}

export interface ProductResponse{
    limit: number,
    offset: number,
    products: ProductInfo[]
    total: number
}