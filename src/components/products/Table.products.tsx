import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/common/useFetch";
import { useStore } from "../../store/store";
import Button from "../common/buttons/Button";
import ActionButton from "../common/buttons/ActionButton";
import { ProductResponse } from "../../interfaces/product/product.interface";
export default function Table() {
  const navigate = useNavigate();
  const { petition, loading, returnedData } = useFetch<
    ProductResponse,
    undefined
  >();
  const { pagination, inc, dec } = useStore();
  useEffect(() => {
    petition({
      url: `${
        import.meta.env.VITE_URL_BACKEND
      }/v1/products/get/all?limit=5&offset=${pagination}`,
      method: "get",
    });
  }, [pagination]);
  return (
    <>

        {loading ? (
          <div className="flex justify-center items-center h-[500px]">
            Cargando
          </div>
        ) : (
          <table className="w-full relative  caption-bottom text-sm">
          <thead className="[&_tr]:border-b h-[100px]">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                Id
              </th>
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
          <tbody className="[&_tr:last-child]:border-0 h-[400px] ">
            {returnedData && returnedData.products.length ? (
              
              returnedData.products.map((element, key: number) => {
                return (
                  <tr
                    key={key++}
                    className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  >
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                      {element.id}
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                      {element.name}
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      {element.mark}
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      {element.model}
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      {element.stock} en stock
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      ${element.price}
                    </td>
                    <td className="p-4 flex justify-center items-center gap-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <ActionButton
                        label="borrar"
                        color="bg-red-600"
                        onClick={() => {
                          "id" in element
                            ? petition({
                                url: `${
                                  import.meta.env.VITE_URL_BACKEND
                                }/v1/products/delete/one?limit=5&offset=${pagination}&id=${
                                  element.id
                                }`,
                                method: "delete",
                              })
                            : null;
                        }}
                      />
                      <ActionButton
                        label="editar"
                        color="bg-yellow-600"
                        onClick={() => {
                          "id" in element
                            ? navigate(`/products/${element.id}`)
                            : null;
                        }}
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <div className="flex justify-center items-center">
                <p>No se encontraron productos</p>
              </div>
            )}
          </tbody>
      </table>
        )}

      <div className="flex place-self-center">
        <Button
          label="<"
          onClick={() => {
            pagination >= 5 ? dec() : null;
          }}
        />
        <p className=" p-2 bg-gray-100 rounded-lg">
          {returnedData && "products" in returnedData
            ? returnedData.offset / 5
            : null}
        </p>
        <Button
          label=">"
          onClick={() => {
            if (returnedData && "products" in returnedData) {
              returnedData.offset <= returnedData.total - 5 ? inc() : null;
            }
          }}
        />
      </div>
    </>
  );
}
