import { Link } from "react-router-dom";
import Button from "../../components/common/buttons/Button";
import Input from "../../components/common/inputs/Input";
import { useState } from "react";
import { UserInfo } from "../../interfaces/user/user.interface";
import { useFetch } from "../../hooks/useFetch";
import Aside from "../../components/common/aside/Aside";

export default function Register() {
  const [data, setData] = useState<UserInfo>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const {isLoading, petition} = useFetch()

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4 py-12 sm:px-6 lg:px-8">
      <Aside />
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-primary-foreground">
            Registrate
          </h2>
        </div>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-muted-foreground"
            >
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
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-muted-foreground"
            >
              Nombre
            </label>
            <div className="mt-1">
              <Input
                id="firstName"
                name="firstName"
                required={true}
                placeHolder="Cristian"
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
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-muted-foreground"
            >
              Apellido
            </label>
            <div className="mt-1">
              <Input
                id="lastName"
                name="lastName"
                required={true}
                placeHolder="Massa"
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-muted-foreground"
            >
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
              <Button label="Registrarse" disablied={true} onClick={()=>{}}/>:
              <Button label="Registrarse" onClick={(e) => {
                e.preventDefault()
                if(data.email && data.firstName && data.lastName && data.password){
                  petition({
                    url: "https://lexart-test-back.vercel.app/v1/users/register",
                    method: "post",
                    body: { "email": data.email, "firstName": data.firstName, "lastName": data.lastName, "password": data.password }
                  })
                }
              }} />
            }
          </div>
          <div>
            <Link to={"/login"}>¿Ya tienes cuenta? Inicia seción aqui.</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
