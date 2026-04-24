import { CONNECTOR_LOGOS } from "./ConnectorMarquee";
import { Reveal } from "./Reveal";

export function IntegrationsGrid() {
  // First 12 logos in a 3×4 grid (4 cols on lg, 3 on md, 2 on sm)
  const logos = CONNECTOR_LOGOS.slice(0, 12);
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {logos.map((l, i) => (
        <Reveal
          key={l.name}
          delay={i * 35}
          className="card-iw flex items-center justify-center gap-3 px-4 py-5"
        >
          <img src={l.src} alt="" aria-hidden className="h-7 w-auto" />
          <span className="text-[14px] font-medium text-foreground/90">{l.name}</span>
        </Reveal>
      ))}
    </div>
  );
}
