import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "warm" | "cool" | "electric";

const VARIANT_CLASS: Record<Variant, string> = {
  warm: "text-gradient-hero",
  cool: "text-gradient-cool",
  electric: "text-gradient-electric",
};

interface GradientHeadingProps {
  variant?: Variant;
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function GradientHeading({
  variant = "warm",
  as: Tag = "h2",
  className,
  children,
}: GradientHeadingProps) {
  return <Tag className={cn(VARIANT_CLASS[variant], className)}>{children}</Tag>;
}
