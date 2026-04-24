import type { AttentionScenario } from "@/components/site/AttentionLayer";

export const homeAttention: AttentionScenario = {
  signals: [
    { entity: "Acme Corp", change: "Usage dropped 31% this week", severity: "high" },
    { entity: "Invoice INV-2048", change: "Overdue by 14 days", severity: "high" },
    { entity: "Northwind", change: "No reply in 9 days · decision next week", severity: "medium" },
  ],
};

export const productAttention: AttentionScenario = {
  label: "3 things need your attention right now",
  signals: [
    { entity: "Acme Corp", change: "Usage dropped — renewal in 21 days", severity: "high" },
    { entity: "Invoice INV-2048", change: "Overdue 14 days · support issue linked", severity: "high" },
    { entity: "Deal: Northwind", change: "Stalled · decision-maker silent", severity: "medium" },
  ],
  note: "Twin has prepared a response for each.",
};

export const twinAttention: AttentionScenario = {
  signals: [
    { entity: "Acme Corp", change: "Usage drop + 2 tickets + renewal — three signals are connected", severity: "high" },
    { entity: "Q1 brief", change: "5 inputs changed since Friday", severity: "medium" },
    { entity: "Sarah (Champion)", change: "Last seen in app 12 days ago", severity: "medium" },
  ],
};

export const accountSuccessAttention: AttentionScenario = {
  signals: [
    { entity: "Acme Corp", change: "Usage down 18% · 2 tickets open · Renewal in 30 days", severity: "high" },
    { entity: "RetailNest", change: "Champion changed roles last week", severity: "medium" },
    { entity: "DataVault AU", change: "QBR 47 days overdue", severity: "medium" },
  ],
};

export const businessOpsAttention: AttentionScenario = {
  signals: [
    { entity: "Revenue", change: "At 82% of plan with 6 days left", severity: "high" },
    { entity: "Support", change: "3 P1 issues rising this week", severity: "medium" },
    { entity: "Hiring", change: "Pipeline slowed — 4 roles unfilled", severity: "medium" },
  ],
};

export const personalAttention: AttentionScenario = {
  signals: [
    { entity: "Meeting in 45 min", change: "No prep done yet", severity: "high" },
    { entity: "Follow-up email", change: "Unsent since yesterday", severity: "medium" },
    { entity: "Task: Q1 deck", change: "Overdue · flagged this morning", severity: "medium" },
  ],
};

export const salesOpsAttention: AttentionScenario = {
  signals: [
    { entity: "Northwind", change: "No reply in 9 days · demo done · decision next week", severity: "high" },
    { entity: "Pipeline", change: "$320K at risk in 'Verbal Yes' stage > 21 days", severity: "medium" },
    { entity: "Forecast", change: "Down 6% vs Friday — three deals slipped", severity: "medium" },
  ],
};

export const financeOpsAttention: AttentionScenario = {
  signals: [
    { entity: "INV-2048", change: "Overdue 14 days · support issue linked", severity: "high" },
    { entity: "Vendor Northwind", change: "Variance +$240 on PO-1142 · auto-flagged", severity: "medium" },
    { entity: "Reconciliation", change: "3 entries unmatched since Tuesday", severity: "medium" },
  ],
};
