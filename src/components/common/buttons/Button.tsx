import { Button as ButtonInterface } from "../../../interfaces/common/button.interface"

export default function Button({label, onClick, disablied}: ButtonInterface){
    return(
        <button 
        disabled={disablied}
        className={`flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${disablied ? 'text-gray-100': 'text-black'}`}
         onClick={onClick}>{label}</button>
    )
}