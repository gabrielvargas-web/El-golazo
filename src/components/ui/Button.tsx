import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

const variants = {
  primary: "text-white hover:bg-emerald-800",
  secondary: "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50",
  danger: "bg-red-700 text-white hover:bg-red-800"
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  const buttonStyle = variant === "primary" ? { backgroundColor: "rgba(15, 178, 133, 1)" } : undefined;
  return (
    <button
      className={"rounded-md px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 " + variants[variant] + " " + className}
      style={buttonStyle}
      {...props}
    />
  );
}
