import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

export default function Input({ label, id, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-white/90">
        {label}
      </label>
      <input
        id={id}
        className={`w-full bg-(--color-slate) border border-(--color-slate) text-white placeholder:text-(--color-muted) rounded-lg px-4 py-3 focus:outline-none focus:border-(--color-teal) focus:ring-1 focus:ring-(--color-teal)/30 transition-colors duration-200 ${className}`}
        {...props}
      />
    </div>
  );
}
