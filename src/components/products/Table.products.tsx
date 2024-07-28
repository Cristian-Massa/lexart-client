import { useEffect } from "react";
import { redirect } from "react-router-dom";
import { useFetch } from "../../hooks/common/useFetch";
import { productStore, useStore } from "../../store/store";
import Button from "../common/buttons/Button";
import ActionButton from "../common/buttons/ActionButton";
import { ProductInfo } from "../../interfaces/product/product.interface";
export default function Table() {
  const { petition } = useFetch();
  const { productResponse } = productStore();
  const { pagination, inc, dec } = useStore();
  useEffect(() => {
    petition({
      url: `https://lexart-test-back.vercel.app/v1/products/get/all?limit=5&offset=${pagination}`,
      method: "get",
    });
  }, [pagination]);
  return (
    <>
      <table className="w-full caption-bottom text-sm">
        <thead className="[&_tr]:border-b">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              Nombre
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              Marca
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              Modelo
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              Stock
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              Precio
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              Accion
            </th>
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {productResponse && Array.isArray(productResponse?.products)
            ? productResponse.products.map(
                (element: ProductInfo, key: number) => {
                  return (
                    <tr
                      key={key++}
                      className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                    >
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                        {"name" in element ? element.name : null}
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        {"mark" in element ? element.mark : null}
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        {"model" in element ? element.model : null}
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        {"stock" in element ? element.stock : null} en stock
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        ${"price" in element ? element.price : null}
                      </td>
                      <td className="p-4 flex gap-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <ActionButton

                          label="borrar"
                          color="bg-red-600"
                          onClick={() => {
                            "id" in element ? 
                            petition({
                              url: `https://lexart-test-back.vercel.app/v1/products/delete/one?limit=5&offset=${pagination}&id=${element.id}`,
                              method: "delete"
                            })
                            :
                            null
                          }}
                        />
                        <ActionButton
                          label="editar"
                          color="bg-yellow-600"
                          onClick={() => {
                            "id" in element ? 
                            redirect(`/products/${element.id}`)
                            :
                            null
                          }}
                        />
                      </td>
                    </tr>
                  );
                }
              )
            : null}
        </tbody>
      </table>
      <div className="flex place-self-center">
        <Button
          label="<"
          onClick={() => {
            pagination >= 5 ? dec() : null;
          }}
        />
        <p className=" p-2 bg-gray-100 rounded-lg">
          {productResponse && "products" in productResponse
            ? productResponse.offset / 5
            : null}
        </p>
        <Button
          label=">"
          onClick={() => {
            if (productResponse && "products" in productResponse) {
              productResponse.offset <= productResponse.total - 5
                ? inc()
                : null;
            }
          }}
        />
      </div>
    </>
  );
}
