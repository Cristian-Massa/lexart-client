import { Link } from "react-router-dom"
import Button from "../../components/common/buttons/Button"
import Input from "../../components/common/inputs/Input"
import { UserInfo } from "../../interfaces/user/user.interface"
import { useState, useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import { useFetch } from "../../hooks/common/useFetch"
import Aside from "../../components/common/aside/Aside"

export default function Login(){
const navigate = useNavigate();
  const [data, setData] = useState<UserInfo>({
    email: '',
    password: ''
  })
  const {returnedData, isLoading, petition} = useFetch()
  useEffect(()={
if("message" in returnedData && returnedData. message === "login exitoso"){
navigate('/products')
}
},[returnedData])
    return(
        <div className="flex min-h-screen items-center justify-center bg-muted px-4 py-12 sm:px-6 lg:px-8">
          <Aside />
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-primary-foreground">
            Iniciar Seción
          </h2>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
              Dirección de correo
            </label>
            <div className="mt-1">
              <Input
                id="email"
                name="email"
                type="email"
                required={true}
                placeHolder="jorge@ejemplo.com"
                onChange={(e) => {
                  const elementTarget = e.currentTarget
                  setData({
                  ... data,
                  [elementTarget?.id]: elementTarget?.value
                })}}
              />
            </div>

          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-muted-foreground">
              Contraseña
            </label>
            <div className="mt-1">
            <Input
                id="password"
                name="password"
                required={true}
                type="password"
                placeHolder="********"
                onChange={(e) => {
                  const elementTarget = e.currentTarget
                  setData({
                  ... data,
                  [elementTarget?.id]: elementTarget?.value
                })}}
              />
            </div>
          </div>
          <div>
          {
              isLoading ? 
              <Button label="Iniciar Seción" disablied={true} onClick={()=>{}}/>:
              <Button label="Iniciar Seción" onClick={(e) => {
                e.preventDefault()
                if(data.email && data.password){
                  petition({
                    url: "https://lexart-test-back.vercel.app/v1/users/login",
                    method: "post",
                    body: { "email": data.email, "password": data.password }
                  })

                }
              }} />
            }
          </div>
          <div>
            <Link
            to={'/register'}
            >
              ¿No tienes cuenta? Registrate aqui.
            </Link>
          </div>
        </form>
      </div>
    </div>
    )
}