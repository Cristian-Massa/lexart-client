import { useState } from "react";
import { FetchData } from "../interfaces/common/fetch.interface";
import { ReturnedData } from "../types/common/common.type";

export function useFetch() {
    const [isLoading, setIsloading] = useState<boolean>(false);
    const [returnedData, setData] = useState<ReturnedData[] | ReturnedData>([]);
    const [error, setError] = useState<string | null>(null);
    async function petition({ url, method, body }: FetchData) {
      setIsloading(true);
      try {
        const result = await fetch(`${url}`,{
          credentials: 'include',
          body: JSON.stringify(body),
          method: method
        });
        const data = await result.json();
        console.log(data);
        
        setData(data);
      } catch (err) {
        setError('An error occurred while fetching data.');
      } finally {
        setIsloading(false);
      }
    }
  
    return {returnedData, isLoading, petition, error} as const;
  }