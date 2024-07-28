import { useNavigate } from "react-router-dom";
import Aside from "../../components/common/aside/Aside";
import ActionButton from "../../components/common/buttons/ActionButton";
export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Aside />
      <div className="pl-14 flex flex-col justify-center items-center">
        <div className="py-20 text-center">
          <h1 className="text-8xl font-bold text-gray-700">Bienvenido.</h1>
          <h3 className="text-4xl font-bold text-gray-700">
            Para comenzara ver los difentes productos inicia secion o
            registrate.
          </h3>
        </div>
        <div
          className="
            border
            rounded-lg p-10
            flex
            gap-10
          "
        >
          <ActionButton
            label="Registrarse"
            onClick={() => {navigate('/register')}}
            color="bg-gray-700"
          />
          <ActionButton
            label="Iniciar Secion"
            onClick={() => {navigate('/login')}}
            color="bg-gray-700"
          />
          <ActionButton
            label="Productos"
            onClick={() => {navigate('/products')}}
            color="bg-gray-700"
            
          />
        </div>
      </div>
    </div>
  );
}
