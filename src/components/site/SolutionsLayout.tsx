/**
 * Wrap a Solutions page with the sticky 3-row pill bar (Pillar/Persona/Industry)
 * and the filter context. Pillar pills always show; persona/industry pills only
 * appear if you pass options. Use `<PersonaContent>`/`<IndustryContent>` from
 * `solutions-filter-context` inside `children` to gate per-filter content.
 *
 * The page's own narrative content (anything not wrapped in a content gate)
 * stays visible across all filter combinations.
 */
import type { ReactNode } from "react";
import { SolutionsFilterProvider, type PillOption } from "./solutions-filter-context";
import { SolutionsPillBar } from "./SolutionsPillBar";

export function SolutionsLayout({
  personaOptions = [],
  industryOptions = [],
  children,
}: {
  personaOptions?: ReadonlyArray<PillOption>;
  industryOptions?: ReadonlyArray<PillOption>;
  children: ReactNode;
}) {
  return (
    <SolutionsFilterProvider personaOptions={personaOptions} industryOptions={industryOptions}>
      <SolutionsPillBar />
      {children}
    </SolutionsFilterProvider>
  );
}
