import { useState } from "react";
import Input from "../common/inputs/Input";
import { ProductInfo } from "../../interfaces/product/product.interface";
import ActionButton from "../common/buttons/ActionButton";
import { useFetch } from "../../hooks/common/useFetch";
import { useNavigate } from "react-router-dom";
export default function ModifyForm({
  id,
  name,
  stock,
  price,
  model,
  mark,
}: ProductInfo) {
  const navigate = useNavigate()
  const {petition} = useFetch()
  const [data, setData] = useState<ProductInfo>({
    name: name,
    stock: stock,
    price: price,
    model: model,
    mark: mark,
  });

  return (
    <form className="grid gap-6">
      <div className="grid gap-3">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="name"
        >
          Nombre
        </label>
        <Input
          id="name"
          type="text"
          onChange={(e) => {
            const elementTarget = e.currentTarget;
            setData({
              ...data,
              [elementTarget?.id]: elementTarget?.value,
            });
          }}
          placeHolder={name || "Ingrese el nombre del producto"}
        />
      </div>
      <div className="grid gap-3">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="brand"
        >
          Marca
        </label>
        <Input
          id="mark"
          type="text"
          onChange={(e) => {
            const elementTarget = e.currentTarget;
            setData({
              ...data,
              [elementTarget?.id]: elementTarget?.value,
            });
          }}
          placeHolder={mark || "Ingrese la marca del producto"}
        />
      </div>
      <div className="grid gap-3">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="model"
        >
          Modelo
        </label>
        <Input
          id="model"
          type="text"
          onChange={(e) => {
            const elementTarget = e.currentTarget;
            setData({
              ...data,
              [elementTarget?.id]: elementTarget?.value,
            });
          }}
          placeHolder={model || "Ingrese el modelo del producto"}
        />
      </div>
      <div className="grid gap-3">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="price"
        >
          Precio
        </label>
        <Input
          id="name"
          type="text"
          onChange={(e) => {
            const elementTarget = e.currentTarget;
            if (!Number(elementTarget.value)) {
              elementTarget.value = "";
            }
            setData({
              ...data,
              [elementTarget?.id]: elementTarget?.value,
            });
          }}
          placeHolder={`${price}` || "Ingrese el precio del producto"}
        />
      </div>
      <div className="grid gap-3">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="stock"
        >
          Stock
        </label>
        <Input
          id="name"
          type="text"
          onChange={(e) => {
            const elementTarget = e.currentTarget;
            if (!Number(elementTarget.value)) {
              elementTarget.value = "";
            }
            setData({
              ...data,
              [elementTarget?.id]: elementTarget?.value,
            });
          }}
          placeHolder={`${stock}` || "Ingrese el stock del producto"}
        />
      </div>
      <div className="flex items-center p-6 justify-end gap-2">
        <ActionButton
          label="Guardar"
          color="bg-yellow-500"
          onClick={() => {
            petition({
              url: `https://lexart-test-back.vercel.app/v1/products/modify/one?id=${id}`,
              body: data,
              method: 'post',
            });
          }}
        />
        <ActionButton label="Cancelar" color="bg-black" onClick={() => {
          navigate('/products')
        }} />
      </div>
    </form>
  );
}
