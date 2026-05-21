import { SpineLogo } from "./SpineLogo";
import { Container } from "./Container";
import { useDemoModal } from "./demo-modal-context";
import { ArrowRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const { openEarlyAccess } = useDemoModal();

  return (
    <footer className="border-t border-border bg-section-alt">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <SpineLogo className="h-[28px] w-auto text-foreground" />
              <span className="text-[17px] font-semibold tracking-tight text-foreground">
                IntegrateWise
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-text-secondary">
              One place to see what happened, what matters, and what to do next — across the tools
              your team already uses.
            </p>
            <button
              type="button"
              onClick={() => openEarlyAccess("Footer")}
              className="mt-6 inline-flex h-[40px] items-center justify-center gap-2 rounded-xl bg-primary px-4 text-[14px] font-semibold text-white transition hover:bg-primary/90"
              style={{ border: "1px solid rgba(52, 211, 153, 0.2)" }}
            >
              Request Early Access <ArrowRight size={14} />
            </button>
            <p className="mt-6 text-[13px] text-text-secondary">
              SOC 2 Type II · GDPR Ready · Tenant Isolation · Approval-gated
            </p>
          </div>

          <FooterCol
            title="Solutions"
            links={[
              { to: "/solutions/account-success", label: "Account Success" },
              { to: "/solutions/business-ops", label: "Business Ops" },
              { to: "/solutions/sales-ops", label: "Sales Ops" },
              { to: "/solutions/revops", label: "RevOps" },
              { to: "/solutions", label: "All solutions" },
            ]}
          />
          <FooterCol
            title="Product"
            links={[
              { to: "/product/how-it-works", label: "How it works" },
              { to: "/product", label: "Features" },
              { to: "/platform/integrations", label: "Integrations" },
              { to: "/platform/security", label: "Security" },
              { to: "/pricing", label: "Pricing" },
            ]}
          />
          <FooterCol
            title="Resources"
            links={[
              { to: "/customer-zero", label: "Customer Zero" },
              { to: "/manifesto", label: "Manifesto" },
              { to: "/resources", label: "Blog & resources" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[13px] text-text-secondary md:flex-row md:items-center">
          <p>© {year} IntegrateWise. All rights reserved.</p>
          <p>Your data is yours. AI is rented. Approval is the architecture in between.</p>
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
            <a
              href={l.to}
              className="text-[14px] text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
