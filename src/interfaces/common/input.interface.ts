import { ChangeEvent } from "react"

export interface Input{
    placeHolder: string
    onChange: (e: ChangeEvent<HTMLInputElement>)=>void
    id?: string
    name?: string
    required?: boolean
    type?: string
    defaultValue?: string
}