import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div className={cn("container-iw", className)} {...rest}>
      {children}
    </div>
  );
}
