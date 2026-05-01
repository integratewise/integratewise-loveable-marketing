import { SpineLogo } from "./SpineLogo";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-section-alt">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-9">
          <div className="md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <SpineLogo className="h-[28px] w-auto text-foreground" />
              <span className="text-[17px] font-semibold tracking-tight text-foreground">
                IntegrateWise
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-text-secondary">
              Your work resets every day. IntegrateWise stops that. Your data becomes Digital
              Memory. Your Twin connects what changed, explains why it matters, and prepares what to
              do next — you approve every move.
            </p>
            <p className="mt-6 text-[13px] text-text-secondary">
              SOC 2 Type II · GDPR Ready · Tenant Isolation · Approval-gated
            </p>
          </div>

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
          <FooterCol
            title="Product"
            links={[
              { to: "/product#workspace", label: "Workspace" },
              { to: "/product#how-it-works", label: "How it works" },
              { to: "/product#digital-memory", label: "Digital Memory" },
              { to: "/product#security", label: "Security" },
            ]}
          />
          <FooterCol
            title="Intelligence"
            links={[
              { to: "/twin#twin", label: "Twin" },
              { to: "/twin#how-it-works", label: "How it works" },
              { to: "/twin#digital-memory-reference", label: "Digital Memory Reference" },
              { to: "/twin#twin-execution", label: "Twin Execution" },
              { to: "/twin#security", label: "Security" },
            ]}
          />
          <FooterCol
            title="Solutions"
            links={[
              { to: "/solutions#account-success", label: "Account Success" },
              { to: "/solutions#business-ops", label: "Business Ops" },
              { to: "/solutions#personal-space", label: "Personal Space" },
              { to: "/solutions", label: "All solutions" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { to: "/company#about", label: "About" },
              { to: "/company#manifesto", label: "Manifesto" },
              { to: "/company#customer-zero", label: "Customer Zero" },
              { to: "/company#customer-zero", label: "Why" },
              { to: "/company#contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Blog"
            links={[
              { to: "/blog", label: "All posts" },
              { to: "/blog#product", label: "Product" },
              { to: "/blog#platform", label: "Platform" },
              { to: "/blog#intelligence", label: "Intelligence" },
              { to: "/blog#case-studies", label: "Case Studies" },
            ]}
          />
          <FooterCol
            title="Resources"
            links={[
              { to: "/resources", label: "All resources" },
              { to: "/resources#guides", label: "Guides" },
              { to: "/resources#webinars", label: "Webinars" },
              { to: "/resources#one-pagers", label: "One-pagers" },
            ]}
          />
          <FooterCol
            title="Docs"
            links={[
              { to: "/docs", label: "Getting started" },
              { to: "/docs#connectors", label: "Connectors" },
              { to: "/docs#workspaces", label: "Workspaces" },
              { to: "/docs#twin-approvals", label: "Twin & Approvals" },
            ]}
          />
          <FooterCol
            title="Changelog"
            links={[
              { to: "/changelog", label: "Latest" },
              { to: "/changelog#platform", label: "Platform" },
              { to: "/changelog#product", label: "Product" },
              { to: "/changelog#twin", label: "Twin" },
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
