import { Link } from "@tanstack/react-router";
import { SpineLogo } from "./SpineLogo";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-section-alt">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <SpineLogo className="h-[28px] w-auto text-foreground" />
              <span className="text-[17px] font-semibold tracking-tight text-foreground">
                IntegrateWise
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-text-secondary">
              Your work resets every day. IntegrateWise stops that. Your data becomes Memory.
              Your Twin connects, explains, and prepares — you approve every move.
            </p>
            <p className="mt-6 text-[13px] text-text-secondary">
              SOC 2 Type II · GDPR Ready · Tenant Isolation · Approval-gated
            </p>
          </div>

          <FooterCol
            title="Platform"
            links={[
              { to: "/platform", label: "Spine" },
              { to: "/platform/memory", label: "Memory" },
              { to: "/platform/integrations", label: "Integrations" },
              { to: "/platform/security", label: "Security" },
              { to: "/platform/how-it-works", label: "How it works" },
              { to: "/platform/infrastructure", label: "Infrastructure" },
            ]}
          />
          <FooterCol
            title="Product"
            links={[
              { to: "/product", label: "Workbench" },
              { to: "/product/the-twin", label: "The Twin" },
              { to: "/product/approval", label: "Approval" },
              { to: "/product/reference-layer", label: "Reference Layer" },
            ]}
          />
          <FooterCol
            title="Solutions"
            links={[
              { to: "/solutions/account-success", label: "Account Success" },
              { to: "/solutions/business-ops", label: "Business Ops" },
              { to: "/solutions/personal-space", label: "Personal Space" },
              { to: "/solutions/by-industry", label: "By Industry" },
              { to: "/solutions/by-role", label: "By Role" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { to: "/about", label: "About" },
              { to: "/customer-zero", label: "Customer Zero" },
              { to: "/manifesto", label: "Manifesto" },
              { to: "/why", label: "Why" },
              { to: "/blog", label: "Blog" },
              { to: "/docs", label: "Docs" },
              { to: "/changelog", label: "Changelog" },
              { to: "/pricing", label: "Pricing" },
              { to: "/contact", label: "Contact" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[13px] text-text-secondary md:flex-row md:items-center">
          <p>© {year} IntegrateWise. All rights reserved.</p>
          <p>Truth you own. AI you rent. Approval in between.</p>
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
