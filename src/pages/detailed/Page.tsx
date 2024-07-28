import Aside from "../../components/common/aside/Aside";
import ModifyForm from "../../components/products/ModifyForm.products";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/common/useFetch";
import { useEffect } from "react";
export default function Detailed() {
  const {returnedData, petition} = useFetch()
  const { id } = useParams();

  useEffect(() => {
    petition({
      url: `https://lexart-test-back.vercel.app/v1/products/get/one?id=${id}`,
      method: "get",
    });
  }, []);
  return (
    <>
      <Aside />
      <div className="flex justify-center items-center min-h-screen pl-10 pt-10 w-full flex-col bg-muted/40">
        <div className="grid lg:w-[600px] flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Detalles del Producto
              </h3>
              <p className="text-sm text-muted-foreground">
                Actualiza la información del producto
              </p>
            </div>
            <div className="p-6">
              {
                "id" in returnedData ?
                <ModifyForm id={Number(id)} name={returnedData.name} stock={returnedData.stock} price={returnedData.price} model={returnedData.model} mark={returnedData.mark} />
                :
                <p>
                  Error No se encontro el producto
                </p>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
