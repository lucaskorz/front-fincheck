import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
}

export function Input({ placeholder, name, id, ...props }: InputProps) {
  const inputId = id ?? name;

  return (
    <div className="relative">
      <input
        {...props}
        name={name}
        id={inputId}
        className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 pt-4 placeholder-shown: peer"
      />

      <label
        htmlFor={inputId}
        className="absolute left-[13px] text-xs top-2 pointer-events-none text-gray-700"
        //className="absolute left-[13px] top-3.5 pointer-events-none text-gray-700"
      >
        {placeholder}
      </label>
    </div>
  );
}
