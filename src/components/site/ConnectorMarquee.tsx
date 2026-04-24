import salesforce from "@/assets/logos/salesforce.svg";
import hubspot from "@/assets/logos/hubspot.svg";
import stripe from "@/assets/logos/stripe.svg";
import jira from "@/assets/logos/jira.svg";
import notion from "@/assets/logos/notion.svg";
import slack from "@/assets/logos/slack.svg";
import zendesk from "@/assets/logos/zendesk.svg";
import gmail from "@/assets/logos/gmail.svg";
import shopify from "@/assets/logos/shopify.svg";
import quickbooks from "@/assets/logos/quickbooks.svg";
import intercom from "@/assets/logos/intercom.svg";
import github from "@/assets/logos/github.svg";

export const CONNECTOR_LOGOS = [
  { src: salesforce, name: "Salesforce" },
  { src: hubspot, name: "HubSpot" },
  { src: stripe, name: "Stripe" },
  { src: jira, name: "Jira" },
  { src: notion, name: "Notion" },
  { src: slack, name: "Slack" },
  { src: zendesk, name: "Zendesk" },
  { src: gmail, name: "Gmail" },
  { src: shopify, name: "Shopify" },
  { src: quickbooks, name: "QuickBooks" },
  { src: intercom, name: "Intercom" },
  { src: github, name: "GitHub" },
];

export function ConnectorMarquee() {
  const items = [...CONNECTOR_LOGOS, ...CONNECTOR_LOGOS];
  return (
    <div className="marquee-mask relative overflow-hidden py-6">
      <div className="marquee-track flex w-max items-center gap-12">
        {items.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
            <img src={logo.src} alt="" aria-hidden className="h-7 w-auto" />
            <span className="text-[14px] font-medium text-text-secondary">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
