import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type OrbVariant = "warm" | "cool" | "electric" | "teal";

const VARIANT_CLASS: Record<OrbVariant, string> = {
  warm: "orb-peach",
  cool: "orb-cool",
  electric: "orb-electric",
  teal: "orb-teal",
};

interface OrbProps {
  variant?: OrbVariant;
  size?: number;
  animate?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Orb({
  variant = "warm",
  size = 400,
  animate = true,
  className,
  style,
}: OrbProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "orb",
        VARIANT_CLASS[variant],
        animate && "animate-orb-drift",
        className,
      )}
      style={{ width: size, height: size, ...style }}
    />
  );
}
