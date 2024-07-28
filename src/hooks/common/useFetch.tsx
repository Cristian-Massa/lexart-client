import { useState } from "react";
import { FetchData } from "../../interfaces/common/fetch.interface";
import { ReturnedData } from "../../types/common/common.type";
import { productStore } from "../../store/store";

export function useFetch() {
    const [isLoading, setIsloading] = useState<boolean>(false);
    const {setProductResponse} = productStore()
    const [returnedData, setData] = useState<ReturnedData[] | ReturnedData>([]);
    const [error, setError] = useState<string | null>(null);
    async function petition({ url, method, body }: FetchData) {
      setIsloading(true);
      try {
        const result = await fetch(`${url}`,{
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body),
          method: method
        });
        const data = await result.json();
        if('products' in data) setProductResponse(data)
        setData(data);
      } catch (err) {
        setError('Hubo un error al conseguir la información');
      } finally {
        setIsloading(false);
      }
    }
  
    return {returnedData, isLoading, petition, error} as const;
  }