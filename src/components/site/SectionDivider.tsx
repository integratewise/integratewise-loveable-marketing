import { cn } from "@/lib/utils";

type Variant = "warm" | "cool" | "electric" | "subtle";

interface SectionDividerProps {
  variant?: Variant;
  className?: string;
}

export function SectionDivider({ variant = "subtle", className }: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className={cn("h-px w-full", `section-divider-${variant}`, className)}
    />
  );
}
