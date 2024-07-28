import { useStore } from "../../store/store";
import { useFetch } from "../../hooks/common/useFetch";
import { FetchData } from "../../interfaces/common/fetch.interface";
import { modalStore } from "../../store/store";
import ActionButton from "../common/buttons/ActionButton";
import Accept from "../common/modal/Accept.modal";
import { useState } from "react";
export default function ActionMenu() {
  const {petition, isLoading} = useFetch()
  const {pagination, reset} = useStore()
  const {modal, switchModal} = modalStore()
  const [message, setMessage] = useState('')
  const [petitionConfig, setPetitionConfig] = useState<FetchData>({
    url: '',
    body: '',
    method: ''
  })
  const [isForm, setisForm] = useState(false)
  return (
    <div className="flex gap-4">
      <Accept 
        message={message}
        active={modal}
        
        createForm={isForm}
        isLoading={isLoading}
        petitionConfig={petitionConfig}
        onClick={()=>{
          petition(petitionConfig)
        }}
      />
      <ActionButton
        label="Borrar todo"
        color="bg-red-300"
        
        onClick={()=>{
          setisForm(false)
          setPetitionConfig({
            url: `https://lexart-test-back.vercel.app/v1/products/delete/all?limit=5&offset=${pagination}`,
            method: 'delete'
          })
          reset()
          switchModal(); 
          setMessage('Seguro que quieres borrar todo?')
        }}
      />
      <ActionButton
        label="Crear 50 productos"
        color="bg-yellow-300"
        onClick={()=>{
          setisForm(false)
          setPetitionConfig({
            url: `https://lexart-test-back.vercel.app/v1/products/create/seed?limit=5&offset=${pagination}`,
            method: 'post'
          })
          switchModal(); 
          setMessage('Seguro que quieres crear 50 productos?')
        }}
      />
      <ActionButton
        label="Crear"
        color="bg-green-300"
        onClick={()=>{
          setisForm(true)
          setPetitionConfig({
            url: `https://lexart-test-back.vercel.app/v1/products/create/one?limit=5&offset=${pagination}`,
            method: 'post'
          })
          switchModal(); 
          setMessage('Ingresa los datos del producto para ingresarlo')
        }}
      />
    </div>
  );
}


// petition({
//   url: "https://lexart-test-back.vercel.app/v1/products/delete/all",
//   method: "delete",
// });