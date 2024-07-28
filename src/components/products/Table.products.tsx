import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useStore } from "../../store/store";
import { ReturnedData } from "../../types/common/common.type";
import Button from "../common/buttons/Button";
import ActionButton from "../common/buttons/ActionButton";
export default function Table() {
  const { returnedData, petition } = useFetch();
  const { pagination, inc, dec } = useStore();
  useEffect(() => {
    petition({
      url: `https://lexart-test-back.vercel.app/v1/products/get/all?limit=6&offset=${pagination}`,
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
          {returnedData &&
          "products" in returnedData &&
          Array.isArray(returnedData.products)
            ? returnedData.products.map(
                (element: ReturnedData, key: number) => {
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
                          onClick={() => {}}
                        />
                        <ActionButton
                          label="editar"
                          color="bg-yellow-600"
                          onClick={() => {}}
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
        <p className=" p-2 bg-gray-100 rounded-lg">{
          'products' in returnedData ?
            returnedData.offset / 5
          :
            null
          }</p>
        <Button
          label=">"
          onClick={() => {
            if('products' in returnedData){
              console.log(returnedData.offset, returnedData.total, returnedData.total / 5);
              
              returnedData.offset <= returnedData.total - 5 ? 
              inc():
              null
              
            }
          }}
        />
      </div>
    </>
  );
}
