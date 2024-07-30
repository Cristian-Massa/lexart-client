import { useState } from "react";
import { FetchData } from "../../interfaces/common/fetch.interface";


export function useFetch<T, B>() {
    const [returnedData, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null)
    async function petition({url, method, body} : FetchData<B>){
      try {
        setLoading(true)
        const result = await fetch(`${url}`, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: body ? JSON.stringify(body) : undefined,
          method: method
        })

        if (!result.ok) {
          throw new Error('No se pudo comunicar con el servidor.');
        }

        const json = await result.json();

        setData(json as T)
      } catch (error) {
        setError('Se cometio un error en el proceso')
      }finally{
        setLoading(false)
      }
    }  
    return {returnedData, loading, error, petition} as const
  }



  // const [isLoading, setIsloading] = useState<boolean>(false);
  // const [returnedData, setData] = useState<T | null>(null);
  // const [error, setError] = useState<string | null>(null);
  // async function petition<T>({ url, method, body }: FetchData<T>): Promise<void> {
  //   setIsloading(true);
  //   try {
  //     console.log(body, url, method);
      
  //     const result = await fetch(`${url}`,{
  //       credentials: 'include',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(body),
  //       method: method
  //     });
  //     const data = await result.json();
  //     setData(data)
  //   } catch (err) {
  //     setError('Hubo un error al conseguir la información');
  //   } finally {
  //     setIsloading(false);
  //   }
  // }

  // return {returnedData, isLoading, petition, error} as const;