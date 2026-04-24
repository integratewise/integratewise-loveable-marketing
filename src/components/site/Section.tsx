import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  alt?: boolean;
  /** Show subtle floating background orbs. */
  orbs?: boolean;
}

export function Section({ children, className, alt = false, orbs = false, ...rest }: SectionProps) {
  return (
    <section
      className={cn(
        "section-py relative overflow-hidden",
        alt && "bg-section-alt",
        className,
      )}
      {...rest}
    >
      {orbs && (
        <>
          <span
            aria-hidden
            className="orb orb-peach"
            style={{ width: 480, height: 480, top: -120, left: -120 }}
          />
          <span
            aria-hidden
            className="orb orb-purple"
            style={{ width: 420, height: 420, bottom: -160, right: -120 }}
          />
        </>
      )}
      <div className="relative">{children}</div>
    </section>
  );
}
