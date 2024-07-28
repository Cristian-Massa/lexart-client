import { Input as InputInterface } from "../../../interfaces/common/input.interface";

export default function Input({ placeHolder, onChange, id, name, required, type, defaultValue }: InputInterface) {
  return (
    <input
      id={id}
      required={required ? true : false}
      name={name}
      type={type}
      defaultValue={defaultValue}
      className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-primary-foreground shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
      onChange={onChange}
      placeholder={placeHolder}
    />
  );
}
