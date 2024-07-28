import { Button as ButtonInterface } from "../../../interfaces/common/button.interface"

export default function ActionButton({label, onClick, disablied, color}: ButtonInterface){
    return(
        <button 
        disabled={disablied}
        className={`p-2 rounded-lg text-white ${ color ? `${color}` : 'bg-white'} ${disablied ? 'text-gray-100': 'text-black'}`}
         onClick={onClick}>{label}</button>
    )
}