import { useEffect, useState } from "react";
import { modalStore } from "../../store/store";
import ActionButton from "../common/buttons/ActionButton";
import Input from "../common/inputs/Input";
import { useFetch } from "../../hooks/common/useFetch";
import { useStore } from "../../store/store";

export default function CreateForm() {
    const {pagination} = useStore()
    const {petition, isLoading} = useFetch()
  const [body, setBody] = useState({
    name: "",
    mark: "",
    stock: 0,
    model: "",
    price: 0
  });
  useEffect(()=>{
    console.log(body);
    
  }, [body])
  const { switchModal } = modalStore();
  return (
    <div
      className="bg-white rounded-lg border bg-card text-card-foreground shadow-sm"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
          Nuevo Producto
        </h3>
        <p className="text-sm text-muted-foreground">
          Ingresa los detalles del nuevo producto
        </p>
      </div>
      <div className="p-6">
        <form className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
                Nombre
              </label>
              <Input
                id="name"
                required={true}
                placeHolder="Ingresa el nombre del producto"
                onChange={(e) => {
                    const elementTarget = e.currentTarget
                    setBody({
                    ... body,
                    [elementTarget?.id]: elementTarget?.value
                    })}}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="model"
              >
                Modelo
              </label>
              <Input
                id="model"
                required={true}
                placeHolder="Ingresa el nombre del producto"
                onChange={(e) => {
                    const elementTarget = e.currentTarget
                    setBody({
                    ... body,
                    [elementTarget?.id]: elementTarget?.value
                    })}}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="brand"
              >
                Marca
              </label>
              <Input
                id="mark"
                required={true}
                placeHolder="Ingresa el nombre del producto"
                onChange={(e) => {
                    const elementTarget = e.currentTarget
                    setBody({
                    ... body,
                    [elementTarget?.id]: elementTarget?.value
                    })}}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="price"
              >
                Precio
              </label>
              <Input
                id="price"
                required={true}
                placeHolder="Ingresa el nombre del producto"
                onChange={(e) => {
                    const elementTarget = e.currentTarget
                    if(!Number(elementTarget.value)){
                        elementTarget.value = ''
                    }
                    setBody({
                    ... body,
                    [elementTarget?.id]: Number(elementTarget?.value)
                    })}}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="stock"
            >
              Stock Disponible
            </label>
            <Input
                id="stock"
                required={true}
                placeHolder="Ingresa el nombre del producto"
                onChange={(e) => {
                    const elementTarget = e.currentTarget
                    if(!Number(elementTarget.value)){
                        elementTarget.value = ''
                    }
                    setBody({
                    ... body,
                    [elementTarget?.id]: elementTarget?.value
                    })}}
              />
          </div>
          <div className="flex items-center p-6 justify-end">
              {
                body.mark && body.name && body.stock && body.price && body.model ?
                <div className="flex gap-4">
                    <ActionButton
                label="Aceptar"
                color="bg-green-600"
                disablied={isLoading}
                onClick={() => {
                    petition({
                      url: `https://lexart-test-back.vercel.app/v1/products/create/one?limit=5&offset=${pagination}`,
                      body: {
                        name: body.name,
                        mark: body.mark,
                        stock: body.stock,
                        model: body.model,
                        price: body.price
                      },
                      method: 'post',
                    });
                    switchModal()
                }}
              />
              <ActionButton
                label="Denegar"
                color="bg-red-600"
                onClick={() => {
                  switchModal();
                }}
                disablied={isLoading}
              /> 
                </div>
                :
                <div className="flex gap-4">
                <ActionButton
            label="Aceptar"
            color="bg-gray-600"
            disablied={true}
            onClick={() => {}}
          />
          <ActionButton
            label="Denegar"
            color="bg-red-600"
            onClick={() => {
              switchModal();
            }}
          /> 
            </div>
              }
          </div>
        </form>
      </div>
    </div>
  );
}


