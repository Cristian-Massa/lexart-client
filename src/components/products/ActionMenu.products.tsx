import ActionButton from "../common/buttons/ActionButton";
import { useFetch } from "../../hooks/useFetch";
export default function ActionMenu(){
    const {isLoading, petition, } = useFetch()

    return(
        <div className="flex gap-4">
        <ActionButton
          label="Borrar todo"
          color="bg-red-300"
          onClick={() => {petition({
            url: 'https://lexart-test-back.vercel.app/v1/products/delete/all',
            method: 'delete'
          })}}
          disablied={isLoading}
        />
      <ActionButton
          label="Crear 50 productos"
          color="bg-yellow-300"
          onClick={() => {petition({
            url: 'https://lexart-test-back.vercel.app/v1/products/create/seed',
            method: 'post'
          })}}
          disablied={isLoading}
        />
        <ActionButton
          label="Crear"
          color="bg-green-300"
          onClick={() => {petition({
            url: 'https://lexart-test-back.vercel.app/v1/products/create/one',
            method: 'post'
          })}}
          disablied={isLoading}
        />
      </div>
    )
}