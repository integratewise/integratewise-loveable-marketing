import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "warm" | "cool" | "electric";

interface TextGlowProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function TextGlow({ variant = "warm", className, children }: TextGlowProps) {
  return <span className={cn(`text-glow-${variant}`, className)}>{children}</span>;
}
