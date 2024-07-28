import Aside from "../../components/common/aside/Aside";
import ModifyForm from "../../components/products/ModifyForm.products";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/common/useFetch";
import { useEffect } from "react";
export default function Detailed() {
  const { returnedData, isLoading, petition } = useFetch();
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
              {isLoading ? (
                <div className="flex justify-center items-center">
                <svg
                  className="animate-spin "
                  width="64px"
                  height="64px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M20.9423 3.05768C23.4117 5.52701 21.4099 11.5324 16.4712 16.4711C11.5326 21.4097 5.5272 23.4115 3.05787 20.9422C0.588547 18.4728 2.59033 12.4675 7.52899 7.5288C12.4676 2.59014 18.473 0.588345 20.9423 3.05768ZM3.05768 3.05782C0.588349 5.52715 2.59013 11.5325 7.52879 16.4712C12.4674 21.4099 18.4728 23.4117 20.9421 20.9423C23.4115 18.473 21.4097 12.4676 16.471 7.52894C11.5324 2.59028 5.527 0.588485 3.05768 3.05782Z"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                    />{" "}
                    <path
                      d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                    />{" "}
                  </g>
                </svg>
                </div>
              ) : "id" in returnedData ? (
                <ModifyForm
                  id={Number(id)}
                  name={returnedData.name}
                  stock={returnedData.stock}
                  price={returnedData.price}
                  model={returnedData.model}
                  mark={returnedData.mark}
                />
              ) : (
                <p>Error No se encontro el producto</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
