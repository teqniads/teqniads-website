import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-(--color-teal) text-(--color-navy) font-semibold hover:opacity-90",
  secondary:
    "bg-(--color-slate) text-white font-semibold hover:opacity-90",
  ghost:
    "bg-transparent border border-(--color-teal) text-(--color-teal) hover:bg-(--color-teal) hover:text-(--color-navy)",
  outline:
    "bg-transparent border border-white text-white hover:bg-white hover:text-(--color-navy)",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-md",
  md: "px-6 py-3 text-base rounded-lg",
  lg: "px-8 py-4 text-lg rounded-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
