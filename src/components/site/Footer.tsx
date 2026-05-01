import { Link } from "@tanstack/react-router";
import { SpineLogo } from "./SpineLogo";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-section-alt">
      <Container className="py-16">
        {/* Brand blurb */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2.5">
            <SpineLogo className="h-[26px] w-auto text-foreground" />
            <span className="text-[16px] font-semibold tracking-tight text-foreground">
              IntegrateWise
            </span>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-text-secondary">
            Your work resets every day. IntegrateWise stops that — Digital Memory, Workspace, Twin,
            and Approval Gate in one foundation.
          </p>
        </div>

        {/* 5-column link grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Column 1 — Platform */}
          <FooterCol
            title="Platform"
            links={[
              { to: "/platform#spine", label: "Spine" },
              { to: "/platform#how-it-works", label: "How it works" },
              { to: "/platform#digital-memory", label: "Digital Memory" },
              { to: "/platform#connectors", label: "Connectors" },
              { to: "/platform#security", label: "Security" },
              { to: "/platform#integrations", label: "Integrations" },
            ]}
          />

          {/* Column 2 — Product */}
          <FooterCol
            title="Product"
            links={[
              { to: "/product#workspace", label: "Workspace" },
              { to: "/product#how-it-works", label: "Adaptive workspace" },
              { to: "/product#how-it-works", label: "How it works" },
              { to: "/product#human-in-the-loop", label: "Human-in-the-loop" },
            ]}
          />

          {/* Column 3 — Twin / Intelligence */}
          <FooterCol
            title="Twin / Intelligence"
            links={[
              { to: "/twin#twin", label: "Twin overview" },
              { to: "/twin#how-it-works", label: "How Twin thinks" },
              { to: "/twin#twin-execution", label: "After approval" },
              { to: "/twin#evidence-transparency", label: "Digital Memory Reference" },
              { to: "/twin#twin-execution", label: "Twin Execution" },
              { to: "/twin#learning-history", label: "Security" },
            ]}
          />

          {/* Column 4 — Solutions */}
          <FooterCol
            title="Solutions"
            links={[
              { to: "/solutions#account-success", label: "Account Success / Ops" },
              { to: "/solutions#business-ops", label: "Business Intelligence / Ops" },
              { to: "/solutions#personal-space", label: "Personal Space / Ops" },
              { to: "/solutions", label: "Solutions overview" },
            ]}
          />

          {/* Column 5 — Company & Resources */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
              Company
            </h4>
            <ul className="mt-3 space-y-2">
              {[
                { to: "/company#about", label: "About" },
                { to: "/company#manifesto", label: "Manifesto" },
                { to: "/company#customer-zero", label: "Customer Zero" },
                { to: "/company#customer-zero", label: "Why" },
                { to: "/company#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.label + l.to}>
                  <a
                    href={l.to}
                    className="text-[13.5px] text-foreground/75 transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="mt-6 text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
              Resources
            </h4>
            <ul className="mt-3 space-y-2">
              {[
                { to: "/blog", label: "Blog" },
                { to: "/resources", label: "Resources" },
                { to: "/docs", label: "Docs" },
                { to: "/changelog", label: "Changelog" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[13.5px] text-foreground/75 transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-[12.5px] text-text-secondary">
            SOC 2 Type II · GDPR compliant · Tenant isolation · Approval-gated AI
          </p>
          <div className="mt-4 flex flex-col items-center justify-between gap-2 text-[12.5px] text-text-secondary sm:flex-row">
            <p>© {year} IntegrateWise. All rights reserved.</p>
            <p className="italic">Truth you own. AI you rent. Approval in between.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ to: string; label: string }>;
}) {
  return (
    <div>
      <h4 className="text-[12px] font-semibold uppercase tracking-wider text-text-secondary">
        {title}
      </h4>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.label + l.to}>
            <a
              href={l.to}
              className="text-[13.5px] text-foreground/75 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
