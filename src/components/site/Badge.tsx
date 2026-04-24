import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "default" | "success" | "muted";
}

export function Badge({ children, className, variant = "default", ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "badge-iw",
        variant === "success" && "badge-iw-success",
        variant === "muted" && "badge-iw-muted",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
