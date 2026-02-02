import React from "react";
import { cn } from "@/lib/utils";

interface NumberedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  number: number;
  label: string;
}

export function NumberedInput({ number, label, className, ...props }: NumberedInputProps) {
  return (
    <div className="input-group">
      <label className="input-group-label">
        <span className="input-number">{number}</span>
        {label}
      </label>
      <input
        className={cn(
          "w-full px-4 py-3 rounded-xl border border-input-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all",
          className
        )}
        {...props}
      />
    </div>
  );
}
