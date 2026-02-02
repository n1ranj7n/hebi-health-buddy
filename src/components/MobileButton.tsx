import React from "react";
import { cn } from "@/lib/utils";

interface MobileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function MobileButton({
  variant = "primary",
  fullWidth = true,
  className,
  children,
  disabled,
  ...props
}: MobileButtonProps) {
  const baseStyles = "py-4 px-6 rounded-xl font-semibold text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border-2 border-border bg-transparent text-foreground hover:bg-secondary",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
