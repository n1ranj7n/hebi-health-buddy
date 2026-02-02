import React from "react";

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
}

export function ScreenHeader({ title, subtitle }: ScreenHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
