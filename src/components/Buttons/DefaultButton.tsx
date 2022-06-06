import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function DefaultButton(props: ButtonProps) {
  return (
    <button
      className="h-5 w-auto bg-p-lilac text-p-white p-4 flex text-center items-center justify-center text-xl font-bold mx-1 my-0.5 rounded-md cursor-pointer border-2 border-transparent hover:border-p-yellow focus:border-p-yellow focus:outline-none hover:text-p-yellow focus:text-p-yellow transition-colors "
      {...props}
    ></button>
  );
}
