import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "warm" | "cool" | "electric";

const VARIANT_CLASS: Record<Variant, string> = {
  warm: "card-iw",
  cool: "glass-card-cool",
  electric: "glass-card-electric",
};

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hoverVariant?: Variant;
  children: ReactNode;
}

export function GlassCard({
  hoverVariant = "warm",
  className,
  children,
  ...rest
}: GlassCardProps) {
  return (
    <div className={cn(VARIANT_CLASS[hoverVariant], className)} {...rest}>
      {children}
    </div>
  );
}
