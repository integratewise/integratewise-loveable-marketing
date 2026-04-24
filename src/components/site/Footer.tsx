import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { SpineLogo } from "./SpineLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-section-alt">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={spineLogo} alt="" aria-hidden className="h-[28px] w-auto" />
              <span className="text-[17px] font-semibold tracking-tight text-foreground">
                IntegrateWise
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-text-secondary">
              Your data becomes Digital Memory. Your Twin proposes the next move. You approve every action.
            </p>
            <p className="mt-6 text-[13px] text-text-secondary">
              SOC 2 Compliant · Approval-gated · Memory stays yours
            </p>
          </div>

          <FooterCol
            title="Platform"
            links={[
              { to: "/platform", label: "Overview" },
              { to: "/platform/how-it-works", label: "How it works" },
              { to: "/platform/the-spine", label: "The Spine" },
              { to: "/platform/integrations", label: "Integrations" },
              { to: "/platform/security", label: "Security" },
              { to: "/platform/infrastructure", label: "Infrastructure" },
            ]}
          />
          <FooterCol
            title="Product"
            links={[
              { to: "/product", label: "Overview" },
              { to: "/product/workbench", label: "Workbench" },
              { to: "/product/the-twin", label: "The Twin" },
              { to: "/product/approval", label: "Approval Gate" },
              { to: "/product/reference-layer", label: "Reference Layer" },
              { to: "/product/how-it-works", label: "How it works" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { to: "/solutions", label: "Solutions" },
              { to: "/pricing", label: "Pricing" },
              { to: "/customer-zero", label: "Customer Zero" },
              { to: "/manifesto", label: "Manifesto" },
              { to: "/contact", label: "Contact" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[13px] text-text-secondary md:flex-row md:items-center">
          <p>© {year} IntegrateWise. All rights reserved.</p>
          <p>Built by an operator. Customer Zero is the founder.</p>
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
      <h4 className="text-[13px] font-semibold uppercase tracking-wider text-text-secondary">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-[14px] text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
