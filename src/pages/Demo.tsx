import { useState } from 'react';

// ─── DATA ───────────────────────────────────────────────────────────────────

const accounts = [
  { id: 0, name: 'Axiom Financial', industry: 'Financial Services', arr: 420000, health: 87, label: 'Healthy', renewal: 94, csm: 'Sarah Chen', risks: 1, tasks: 4, nps: 72, expansion: 180000 },
  { id: 1, name: 'MedCore Health Systems', industry: 'Healthcare', arr: 310000, health: 54, label: 'At Risk', renewal: 28, csm: 'Marcus Webb', risks: 5, tasks: 9, nps: 38, expansion: 0 },
  { id: 2, name: 'Stellarworks SaaS', industry: 'Technology', arr: 195000, health: 91, label: 'Healthy', renewal: 187, csm: 'Priya Nair', risks: 0, tasks: 2, nps: 81, expansion: 95000 },
  { id: 3, name: 'Vantage Telecom', industry: 'Telecommunications', arr: 540000, health: 31, label: 'Critical', renewal: 11, csm: 'Sarah Chen', risks: 9, tasks: 14, nps: 14, expansion: 0 },
  { id: 4, name: 'Crestline Manufacturing', industry: 'Manufacturing', arr: 260000, health: 73, label: 'Healthy', renewal: 142, csm: 'Marcus Webb', risks: 2, tasks: 5, nps: 62, expansion: 40000 },
  { id: 5, name: 'Luminos Retail Group', industry: 'Retail & Commerce', arr: 88000, health: 68, label: 'Healthy', renewal: 63, csm: 'Priya Nair', risks: 2, tasks: 3, nps: 55, expansion: 22000 },
];

const layers = [
  { num: 1, name: 'Account Master', icon: '◼', desc: 'Contract, ARR, core status' },
  { num: 2, name: 'People & Roles', icon: '◉', desc: 'Internal & customer org chart' },
  { num: 3, name: 'Business Context', icon: '◈', desc: 'Industry, maturity, strategy' },
  { num: 4, name: 'Strategic Objectives', icon: '◇', desc: 'Goals, drivers, timelines' },
  { num: 5, name: 'Capabilities', icon: '◑', desc: 'Maturity across domains' },
  { num: 6, name: 'Value Streams', icon: '◐', desc: 'Key business processes' },
  { num: 7, name: 'API Portfolio', icon: '◻', desc: 'All APIs in scope, health & SLA' },
  { num: 8, name: 'Platform Health', icon: '◎', desc: 'Uptime, adoption, performance' },
  { num: 9, name: 'Initiatives', icon: '◆', desc: 'Projects, investment, status' },
  { num: 10, name: 'Risk Register', icon: '▲', desc: 'Threats, scores, mitigations' },
  { num: 11, name: 'Stakeholder Outcomes', icon: '◍', desc: 'Baseline, current, target' },
  { num: 12, name: 'Engagement Log', icon: '◌', desc: 'Meetings, sentiment, next steps' },
  { num: 13, name: 'Success Plan', icon: '◊', desc: 'Milestones, confidence, QBRs' },
  { num: 14, name: 'Task Manager', icon: '▣', desc: 'Owners, due dates, priorities' },
  { num: 15, name: 'AI Insights', icon: '✦', desc: 'Cross-layer predictions' },
];

const objectives = [
  { name: 'Reduce operational costs by 22%', progress: 61, target: 'Q4 2025', driver: 'Automation' },
  { name: 'Expand into APAC markets', progress: 18, target: 'Q2 2026', driver: 'Growth' },
  { name: 'Achieve ISO 27001 certification', progress: 75, target: 'Q1 2026', driver: 'Compliance' },
];

const risksData = [
  { category: 'Executive Sponsor', desc: 'Primary sponsor departed Q4', impact: 8, prob: 7, mitigation: 'Identify new champion' },
  { category: 'API Stability', desc: 'Error rate elevated 3 weeks', impact: 9, prob: 6, mitigation: 'Scheduled architecture review' },
  { category: 'Adoption', desc: 'Usage dropped 18% last 30 days', impact: 7, prob: 8, mitigation: 'Re-engagement QBR scheduled' },
];

const tasksData = [
  { title: 'Schedule Executive QBR', owner: 'Sarah Chen', due: '3 days', priority: 'Critical', linked: 'Risk: Sponsor departure' },
  { title: 'API health root cause analysis', owner: 'Engineering', due: '1 week', priority: 'High', linked: 'Risk: API Stability' },
  { title: 'Send usage report + commentary', owner: 'Sarah Chen', due: '2 days', priority: 'High', linked: 'Adoption drop' },
  { title: 'Update success plan objectives', owner: 'Sarah Chen', due: '2 weeks', priority: 'Medium', linked: 'Layer 13: Success Plan' },
];

const engagements = [
  { type: 'QBR', date: 'May 10', attendees: 'James W, Diane R, Sarah C, Jordan K', sentiment: 'Positive', topics: 'Roadmap review, API migration update', next: 'Technical deep dive Jun 3' },
  { type: 'Escalation Call', date: 'Apr 28', attendees: 'Kevin S, Dev P, Sarah C', sentiment: 'Tense', topics: 'API error spike, SOAP adapter instability', next: 'RCA delivery May 2' },
  { type: 'Check-in', date: 'Apr 15', attendees: 'Diane R, Sarah C', sentiment: 'Neutral', topics: 'Usage review, onboarding backlog', next: 'Usage report May 5' },
];

// ─── DESIGN TOKENS ──────────────────────────────────────────────────────────

const colors = {
  forest: '#1A3A2A',
  forestLight: '#2D5A3D',
  forestMuted: '#4A7A5A',
  paper: '#F4F0E8',
  paperDark: '#E8E2D4',
  gold: '#B8943F',
  goldLight: '#D4AB5A',
  ink: '#1A1A14',
  inkMuted: '#6B6556',
  healthGreen: '#2D7A4F',
  healthAmber: '#D4853A',
  healthRed: '#C0392B',
  card: '#FDFAF4',
  border: '#D4CDB8',
};

// ─── HELPERS ────────────────────────────────────────────────────────────────

function formatCurrency(n: number) {
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
  return `$${n}`;
}

function getHealthColor(health: number) {
  if (health >= 70) return colors.healthGreen;
  if (health >= 40) return colors.healthAmber;
  return colors.healthRed;
}

function getLabelPillStyle(label: string) {
  if (label === 'Healthy') return { background: '#E8F5E9', color: colors.healthGreen };
  if (label === 'At Risk') return { background: '#FFF3E0', color: colors.healthAmber };
  return { background: '#FFEBEE', color: colors.healthRed };
}

function getPriorityStyle(priority: string) {
  if (priority === 'Critical') return { background: '#FFEBEE', color: colors.healthRed };
  if (priority === 'High') return { background: '#FFF3E0', color: colors.healthAmber };
  return { background: '#E8F0FE', color: '#1E3A5F' };
}

// ─── COMPONENT ──────────────────────────────────────────────────────────────

export default function Demo() {
  const [product, setProduct] = useState<'Account Success' | 'Business Ops'>('Account Success');
  const [workbench, setWorkbench] = useState<'Account Console' | 'Digital Twin' | 'Cognitive Layer' | 'Governance'>('Account Console');
  const [accountId, setAccountId] = useState<number | null>(null);
  const [layer, setLayer] = useState<number>(1);
  const [twinInput, setTwinInput] = useState('');
  const [twinMessages, setTwinMessages] = useState([
    { from: 'ai', text: "Good morning. I'm your Digital Twin. I've analyzed today's signals across your 15-layer account spine and connected domains. There are 3 items requiring your attention." },
    { from: 'user', text: 'Show me the at-risk accounts and what the system recommends.' },
    { from: 'ai', text: 'Based on full spine context (15 layers per account), cross-department signals, and historical patterns:\n\n[Vantage Telecom] Health 31 · Critical · 11 days to renewal · NPS 14 · Sponsor departed · API error rate elevated 3 weeks. Recommendation: Schedule executive QBR, identify new champion, and fast-track architecture review.\n\n[MedCore Health Systems] Health 54 · At Risk · 28 days to renewal · Usage declined 18% · Support tickets up 34%. Recommendation: Re-engagement QBR, usage recovery plan, and proactive support intervention.\n\n[TechFlow Inc] Health 45 · At Risk · 42 days to renewal · Expansion stalled · Competitive pressure noted. Recommendation: Executive alignment call and expansion play reactivation.' },
  ]);

  const selectedAccount = accounts.find(a => a.id === accountId) || null;

  const totalARR = accounts.reduce((s, a) => s + a.arr, 0);
  const expansionPipeline = accounts.reduce((s, a) => s + a.expansion, 0);
  const atRiskCount = accounts.filter(a => a.health < 70).length;
  const renewals30 = accounts.filter(a => a.renewal <= 30).length;

  function sendTwinMessage() {
    if (!twinInput.trim()) return;
    setTwinMessages(prev => [...prev, { from: 'user', text: twinInput }]);
    setTimeout(() => {
      setTwinMessages(prev => [...prev, { from: 'ai', text: "I've processed your request across the account spine and organizational memory. Here is what I found.\n\n[AI Insight] Cross-referencing Layer 10 (Risk Register), Layer 12 (Engagement Log), and Layer 15 (AI Insights) shows elevated correlation between sponsor departure and renewal contraction within 60 days. Recommended action: trigger governance approval for executive escalation playbook." }]);
    }, 800);
    setTwinInput('');
  }

  // ─── SIDEBAR ──────────────────────────────────────────────────────────────

  const sidebarItem = (label: string, active: boolean, onClick: () => void, tagline?: string) => (
    <button
      key={label}
      onClick={onClick}
      className="w-full text-left px-3 py-2 rounded-md text-sm transition-colors mb-0.5"
      style={{
        background: active ? colors.forestLight : 'transparent',
        color: active ? '#fff' : 'rgba(255,255,255,0.85)',
      }}
    >
      <div className="font-medium">{label}</div>
      {tagline && (
        <div className="text-xs mt-0.5" style={{ color: active ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.5)' }}>
          {tagline}
        </div>
      )}
    </button>
  );

  // ─── TOPBAR ───────────────────────────────────────────────────────────────

  const topbar = (
    <div className="flex items-center justify-between px-6 py-3 border-b" style={{ background: colors.card, borderColor: colors.border }}>
      <div className="flex items-center gap-2 text-sm" style={{ color: colors.inkMuted }}>
        <span style={{ color: colors.ink }} className="font-medium">IntegrateWise</span>
        <span>›</span>
        <span>{product} (Product)</span>
        <span>›</span>
        <span style={{ color: colors.ink }} className="font-medium">{workbench}</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm" style={{ background: colors.paper, borderColor: colors.border, color: colors.inkMuted }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span>Search everything...</span>
          <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: colors.paperDark, color: colors.inkMuted }}>⌘K</span>
        </div>
        <button className="relative p-2 rounded-md hover:bg-black/5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={colors.inkMuted} strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ background: colors.healthRed }} />
        </button>
        <button className="px-3 py-1.5 rounded-md text-xs font-medium border" style={{ background: colors.paper, borderColor: colors.border, color: colors.ink }}>
          Toggle L2
        </button>
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white" style={{ background: colors.forest }}>
          N
        </div>
      </div>
    </div>
  );

  // ─── ACCOUNT CONSOLE WORKBENCH ────────────────────────────────────────────

  const accountConsole = (
    <div className="flex h-full">
      {/* Left panel */}
      <div className="w-80 border-r flex flex-col" style={{ background: colors.card, borderColor: colors.border }}>
        {/* KPIs */}
        <div className="p-4 grid grid-cols-2 gap-3 border-b" style={{ borderColor: colors.border }}>
          <div className="p-3 rounded-lg" style={{ background: colors.paper }}>
            <div className="text-xs" style={{ color: colors.inkMuted }}>Total ARR</div>
            <div className="text-lg font-semibold" style={{ color: colors.ink }}>{formatCurrency(totalARR)}</div>
          </div>
          <div className="p-3 rounded-lg" style={{ background: colors.paper }}>
            <div className="text-xs" style={{ color: colors.inkMuted }}>Expansion Pipeline</div>
            <div className="text-lg font-semibold" style={{ color: colors.ink }}>{formatCurrency(expansionPipeline)}</div>
          </div>
          <div className="p-3 rounded-lg" style={{ background: colors.paper }}>
            <div className="text-xs" style={{ color: colors.inkMuted }}>At-Risk Accounts</div>
            <div className="text-lg font-semibold flex items-center gap-2">
              <span style={{ color: atRiskCount > 0 ? colors.healthRed : colors.healthGreen }}>{atRiskCount} accts</span>
              {atRiskCount > 0 && <span className="w-2 h-2 rounded-full" style={{ background: colors.healthRed }} />}
            </div>
          </div>
          <div className="p-3 rounded-lg" style={{ background: colors.paper }}>
            <div className="text-xs" style={{ color: colors.inkMuted }}>Renewals ≤30 days</div>
            <div className="text-lg font-semibold flex items-center gap-2">
              <span style={{ color: renewals30 > 0 ? colors.healthRed : colors.healthGreen }}>{renewals30} accts</span>
              {renewals30 > 0 && <span className="w-2 h-2 rounded-full" style={{ background: colors.healthRed }} />}
            </div>
          </div>
        </div>
        {/* Account list */}
        <div className="flex-1 overflow-y-auto p-2">
          {accounts.map(acc => {
            const active = accountId === acc.id;
            return (
              <button
                key={acc.id}
                onClick={() => { setAccountId(acc.id); setLayer(1); }}
                className="w-full text-left p-3 rounded-lg mb-2 border transition-all"
                style={{
                  background: active ? colors.paper : '#fff',
                  borderColor: active ? colors.gold : colors.border,
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm" style={{ color: colors.ink }}>{acc.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={getLabelPillStyle(acc.label)}>{acc.label}</span>
                </div>
                <div className="text-xs mb-2" style={{ color: colors.inkMuted }}>{acc.industry} · {acc.csm}</div>
                <div className="flex items-center gap-3 text-xs mb-2">
                  <span style={{ color: colors.inkMuted }}>ARR {formatCurrency(acc.arr)}</span>
                  <span style={{ color: colors.inkMuted }}>{acc.renewal} days to renewal</span>
                </div>
                <div className="flex items-center gap-3 text-xs mb-2">
                  <span style={{ color: acc.risks > 0 ? colors.healthRed : colors.inkMuted }}>{acc.risks} risks</span>
                  <span style={{ color: colors.inkMuted }}>{acc.tasks} tasks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: '#E8E2D4' }}>
                    <div className="h-full rounded-full" style={{ width: `${acc.health}%`, background: getHealthColor(acc.health) }} />
                  </div>
                  <span className="text-xs font-medium" style={{ color: getHealthColor(acc.health) }}>{acc.health}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 overflow-y-auto p-6" style={{ background: colors.paper }}>
        {!selectedAccount ? (
          <div className="h-full flex flex-col items-center justify-center text-center px-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ background: colors.paperDark }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={colors.inkMuted} strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: colors.ink }}>Select an account to open its 15-layer intelligence spine.</h3>
            <p className="text-sm max-w-md" style={{ color: colors.inkMuted }}>See everything from contracts and stakeholders to API health, initiatives, and AI-generated risk insights in one view.</p>
          </div>
        ) : (
          <div>
            {/* Account header */}
            <div className="flex items-start justify-between mb-6 pb-4 border-b" style={{ borderColor: colors.border }}>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-xl font-semibold" style={{ color: colors.ink }}>{selectedAccount.name}</h2>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={getLabelPillStyle(selectedAccount.label)}>{selectedAccount.label}</span>
                </div>
                <div className="text-sm" style={{ color: colors.inkMuted }}>{selectedAccount.industry} · CSM: {selectedAccount.csm}</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: getHealthColor(selectedAccount.health) }}>{selectedAccount.health}</div>
                  <div className="text-xs" style={{ color: colors.inkMuted }}>Health</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: colors.ink }}>{formatCurrency(selectedAccount.arr)}</div>
                  <div className="text-xs" style={{ color: colors.inkMuted }}>ARR</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: selectedAccount.renewal <= 30 ? colors.healthRed : colors.ink }}>{selectedAccount.renewal}</div>
                  <div className="text-xs" style={{ color: colors.inkMuted }}>Days to Renewal</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: colors.ink }}>{selectedAccount.nps}</div>
                  <div className="text-xs" style={{ color: colors.inkMuted }}>NPS</div>
                </div>
              </div>
            </div>

            {/* Layer nav + content */}
            <div className="flex gap-4">
              {/* Layer nav */}
              <div className="w-52 shrink-0">
                {layers.map(l => (
                  <button
                    key={l.num}
                    onClick={() => setLayer(l.num)}
                    className="w-full text-left px-3 py-2 rounded-md text-sm flex items-center gap-2 transition-colors mb-1"
                    style={{
                      background: layer === l.num ? colors.forest : 'transparent',
                      color: layer === l.num ? '#fff' : colors.ink,
                    }}
                  >
                    <span style={{ color: layer === l.num ? colors.goldLight : colors.inkMuted }}>{l.icon}</span>
                    <span className="font-medium">{l.name}</span>
                  </button>
                ))}
              </div>

              {/* Layer content */}
              <div className="flex-1">
                {layer === 1 && (
                  <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
                    <div className="text-xs font-medium mb-3 px-2 py-1 rounded inline-block" style={{ background: '#E8F0FE', color: '#1E3A5F' }}>Context Note</div>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.ink }}>Account Master</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-3 rounded-lg" style={{ background: colors.paper }}>
                        <div className="text-xs" style={{ color: colors.inkMuted }}>Contract Value</div>
                        <div className="font-semibold" style={{ color: colors.ink }}>{formatCurrency(selectedAccount.arr)}</div>
                      </div>
                      <div className="p-3 rounded-lg" style={{ background: colors.paper }}>
                        <div className="text-xs" style={{ color: colors.inkMuted }}>Renewal Date</div>
                        <div className="font-semibold" style={{ color: colors.ink }}>{selectedAccount.renewal} days to renewal</div>
                      </div>
                      <div className="p-3 rounded-lg" style={{ background: colors.paper }}>
                        <div className="text-xs" style={{ color: colors.inkMuted }}>Industry</div>
                        <div className="font-semibold" style={{ color: colors.ink }}>{selectedAccount.industry}</div>
                      </div>
                      <div className="p-3 rounded-lg" style={{ background: colors.paper }}>
                        <div className="text-xs" style={{ color: colors.inkMuted }}>Health Score</div>
                        <div className="font-semibold" style={{ color: getHealthColor(selectedAccount.health) }}>{selectedAccount.health} — {selectedAccount.label}</div>
                      </div>
                      <div className="p-3 rounded-lg" style={{ background: colors.paper }}>
                        <div className="text-xs" style={{ color: colors.inkMuted }}>NPS</div>
                        <div className="font-semibold" style={{ color: colors.ink }}>{selectedAccount.nps}</div>
                      </div>
                      <div className="p-3 rounded-lg" style={{ background: colors.paper }}>
                        <div className="text-xs" style={{ color: colors.inkMuted }}>Assigned CSM</div>
                        <div className="font-semibold" style={{ color: colors.ink }}>{selectedAccount.csm}</div>
                      </div>
                    </div>
                  </div>
                )}
                {layer === 2 && (
                  <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.ink }}>People & Roles</h3>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                        <div className="font-medium text-sm" style={{ color: colors.ink }}>Customer Side</div>
                        <div className="text-sm mt-1" style={{ color: colors.inkMuted }}>Executive Sponsor — Primary champion (departed Q4)</div>
                        <div className="text-sm" style={{ color: colors.inkMuted }}>Product Owner — Diane R.</div>
                        <div className="text-sm" style={{ color: colors.inkMuted }}>Engineering Lead — Jordan K.</div>
                      </div>
                      <div className="p-3 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                        <div className="font-medium text-sm" style={{ color: colors.ink }}>IntegrateWise Side</div>
                        <div className="text-sm mt-1" style={{ color: colors.inkMuted }}>CSM — {selectedAccount.csm}</div>
                        <div className="text-sm" style={{ color: colors.inkMuted }}>Solutions Architect — Alex T.</div>
                        <div className="text-sm" style={{ color: colors.inkMuted }}>Account Executive — Morgan L.</div>
                      </div>
                    </div>
                  </div>
                )}
                {layer === 3 && (
                  <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.ink }}>Business Context</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg" style={{ background: colors.paper }}>
                        <div className="text-xs" style={{ color: colors.inkMuted }}>Industry</div>
                        <div className="font-semibold" style={{ color: colors.ink }}>{selectedAccount.industry}</div>
                      </div>
                      <div className="p-3 rounded-lg" style={{ background: colors.paper }}>
                        <div className="text-xs" style={{ color: colors.inkMuted }}>Maturity Stage</div>
                        <div className="font-semibold" style={{ color: colors.ink }}>Scaling</div>
                      </div>
                      <div className="p-3 rounded-lg" style={{ background: colors.paper }}>
                        <div className="text-xs" style={{ color: colors.inkMuted }}>Strategic Priority</div>
                        <div className="font-semibold" style={{ color: colors.ink }}>Digital Transformation</div>
                      </div>
                      <div className="p-3 rounded-lg" style={{ background: colors.paper }}>
                        <div className="text-xs" style={{ color: colors.inkMuted }}>Technology Stack</div>
                        <div className="font-semibold" style={{ color: colors.ink }}>Cloud-native, API-first</div>
                      </div>
                    </div>
                  </div>
                )}
                {layer === 4 && (
                  <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.ink }}>Strategic Objectives</h3>
                    <div className="space-y-3">
                      {objectives.map((obj, i) => (
                        <div key={i} className="p-3 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-sm" style={{ color: colors.ink }}>{obj.name}</span>
                            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: '#E8F0FE', color: '#1E3A5F' }}>{obj.driver}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: '#E8E2D4' }}>
                              <div className="h-full rounded-full" style={{ width: `${obj.progress}%`, background: colors.forestMuted }} />
                            </div>
                            <span className="text-xs font-medium" style={{ color: colors.inkMuted }}>{obj.progress}%</span>
                            <span className="text-xs" style={{ color: colors.inkMuted }}>Target: {obj.target}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {layer === 5 && (
                  <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
                    <div className="text-xs font-medium mb-3 px-2 py-1 rounded inline-block" style={{ background: '#F3E8FF', color: '#6B21A8' }}>AI Insight</div>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.ink }}>Capabilities</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {['API Management','Integration Platform','Data Governance','AI/ML Ops','Security & Compliance','Observability'].map(cap => (
                        <div key={cap} className="p-3 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                          <div className="font-medium text-sm" style={{ color: colors.ink }}>{cap}</div>
                          <div className="text-xs mt-1" style={{ color: colors.inkMuted }}>Maturity: L{Math.floor(Math.random() * 3) + 3}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {layer === 6 && (
                  <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.ink }}>Value Streams</h3>
                    <div className="space-y-3">
                      {['Customer Onboarding','API Lifecycle Management','Incident Response','Release Management','Capacity Planning'].map(vs => (
                        <div key={vs} className="p-3 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                          <div className="font-medium text-sm" style={{ color: colors.ink }}>{vs}</div>
                          <div className="text-xs mt-1" style={{ color: colors.inkMuted }}>Health: Good · Automation: 78%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {layer === 7 && (
                  <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
                    <div className="text-xs font-medium mb-3 px-2 py-1 rounded inline-block" style={{ background: '#FFEBEE', color: colors.healthRed }}>AI Insight</div>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.ink }}>API Portfolio</h3>
                    <div className="space-y-3">
                      {['Payment Gateway API','Customer Data API','Analytics API','Webhook API'].map(api => (
                        <div key={api} className="p-3 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm" style={{ color: colors.ink }}>{api}</span>
                            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: '#E8F5E9', color: colors.healthGreen }}>Healthy</span>
                          </div>
                          <div className="text-xs mt-1" style={{ color: colors.inkMuted }}>Uptime: 99.9% · Latency: 45ms · Error Rate: 0.02%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {layer === 8 && (
                  <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.ink }}>Platform Health</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-3 rounded-lg text-center" style={{ background: colors.paper }}>
                        <div className="text-2xl font-bold" style={{ color: colors.healthGreen }}>99.9%</div>
                        <div className="text-xs" style={{ color: colors.inkMuted }}>Uptime</div>
                      </div>
                      <div className="p-3 rounded-lg text-center" style={{ background: colors.paper }}>
                        <div className="text-2xl font-bold" style={{ color: colors.ink }}>87%</div>
                        <div className="text-xs" style={{ color: colors.inkMuted }}>Adoption</div>
                      </div>
                      <div className="p-3 rounded-lg text-center" style={{ background: colors.paper }}>
                        <div className="text-2xl font-bold" style={{ color: colors.healthGreen }}>42ms</div>
                        <div className="text-xs" style={{ color: colors.inkMuted }}>Avg Latency</div>
                      </div>
                    </div>
                  </div>
                )}
                {layer === 9 && (
                  <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.ink }}>Initiatives</h3>
                    <div className="space-y-3">
                      {['API Migration v2','ISO 27001 Readiness','APAC Expansion Phase 1','Customer Self-Service Portal'].map((init, i) => (
                        <div key={init} className="p-3 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm" style={{ color: colors.ink }}>{init}</span>
                            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: i === 0 ? '#FFF3E0' : '#E8F5E9', color: i === 0 ? colors.healthAmber : colors.healthGreen }}>{i === 0 ? 'In Progress' : 'On Track'}</span>
                          </div>
                          <div className="text-xs mt-1" style={{ color: colors.inkMuted }}>Budget: {formatCurrency((i + 1) * 50000)} · Timeline: Q{i + 2} 2025</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {layer === 10 && (
                  <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
                    <div className="text-xs font-medium mb-3 px-2 py-1 rounded inline-block" style={{ background: '#FFEBEE', color: colors.healthRed }}>AI Insight</div>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.ink }}>Risk Register</h3>
                    <div className="space-y-3">
                      {risksData.map((risk, i) => (
                        <div key={i} className="p-3 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm" style={{ color: colors.ink }}>{risk.category}</span>
                            <span className="text-xs font-medium" style={{ color: colors.healthRed }}>Score: {risk.impact * risk.prob}</span>
                          </div>
                          <div className="text-sm" style={{ color: colors.inkMuted }}>{risk.desc}</div>
                          <div className="text-xs mt-2" style={{ color: colors.inkMuted }}>Impact: {risk.impact} · Probability: {risk.prob} · Mitigation: {risk.mitigation}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {layer === 11 && (
                  <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.ink }}>Stakeholder Outcomes</h3>
                    <div className="space-y-3">
                      {['Cost Reduction','Time to Market','Customer Satisfaction','Operational Efficiency'].map((out, i) => (
                        <div key={out} className="p-3 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                          <div className="font-medium text-sm" style={{ color: colors.ink }}>{out}</div>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="text-xs" style={{ color: colors.inkMuted }}>Baseline: {20 + i * 10}%</div>
                            <div className="text-xs" style={{ color: colors.inkMuted }}>Current: {35 + i * 12}%</div>
                            <div className="text-xs font-medium" style={{ color: colors.forest }}>Target: {60 + i * 10}%</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {layer === 12 && (
                  <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.ink }}>Engagement Log</h3>
                    <div className="space-y-3">
                      {engagements.map((eng, i) => (
                        <div key={i} className="p-3 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm" style={{ color: colors.ink }}>{eng.type}</span>
                            <span className="text-xs" style={{ color: colors.inkMuted }}>{eng.date}</span>
                          </div>
                          <div className="text-xs mb-1" style={{ color: colors.inkMuted }}>Attendees: {eng.attendees}</div>
                          <div className="text-xs mb-1" style={{ color: colors.inkMuted }}>Topics: {eng.topics}</div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: eng.sentiment === 'Positive' ? '#E8F5E9' : eng.sentiment === 'Tense' ? '#FFEBEE' : '#FFF3E0', color: eng.sentiment === 'Positive' ? colors.healthGreen : eng.sentiment === 'Tense' ? colors.healthRed : colors.healthAmber }}>{eng.sentiment}</span>
                            <span className="text-xs" style={{ color: colors.inkMuted }}>Next: {eng.next}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {layer === 13 && (
                  <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
                    <div className="text-xs font-medium mb-3 px-2 py-1 rounded inline-block" style={{ background: '#E8F0FE', color: '#1E3A5F' }}>Context Note</div>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.ink }}>Success Plan</h3>
                    <div className="space-y-3">
                      {['Executive Alignment','Technical Integration','User Adoption','Value Realization','Expansion Planning'].map((milestone, i) => (
                        <div key={milestone} className="p-3 rounded-lg border flex items-center gap-3" style={{ background: colors.paper, borderColor: colors.border }}>
                          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-white shrink-0" style={{ background: i < 3 ? colors.forest : colors.border }}>{i + 1}</div>
                          <div className="flex-1">
                            <div className="font-medium text-sm" style={{ color: colors.ink }}>{milestone}</div>
                            <div className="text-xs" style={{ color: colors.inkMuted }}>Status: {i < 3 ? 'Complete' : i === 3 ? 'In Progress' : 'Pending'} · Confidence: {60 + i * 8}%</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {layer === 14 && (
                  <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.ink }}>Task Manager</h3>
                    <div className="space-y-3">
                      {tasksData.map((task, i) => (
                        <div key={i} className="p-3 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm" style={{ color: colors.ink }}>{task.title}</span>
                            <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={getPriorityStyle(task.priority)}>{task.priority}</span>
                          </div>
                          <div className="text-xs" style={{ color: colors.inkMuted }}>Owner: {task.owner} · Due: {task.due}</div>
                          <div className="text-xs mt-1" style={{ color: colors.forestMuted }}>Linked: {task.linked}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {layer === 15 && (
                  <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
                    <div className="text-xs font-medium mb-3 px-2 py-1 rounded inline-block" style={{ background: '#F3E8FF', color: '#6B21A8' }}>AI Insight</div>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.ink }}>AI Insights</h3>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#F3E8FF', color: '#6B21A8' }}>AI Insight</span>
                          <span className="text-xs" style={{ color: colors.inkMuted }}>Cross-layer prediction</span>
                        </div>
                        <div className="text-sm font-medium mb-1" style={{ color: colors.ink }}>Renewal Risk Alert</div>
                        <div className="text-sm" style={{ color: colors.inkMuted }}>Based on Layer 10 (Risk Register), Layer 12 (Engagement Log), and Layer 1 (Account Master): Vantage Telecom shows 89% probability of renewal contraction within 60 days. Executive sponsor departure + API stability issues create compounding risk.</div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: colors.border, color: colors.inkMuted }}>Layer 1</span>
                          <span className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: colors.border, color: colors.inkMuted }}>Layer 10</span>
                          <span className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: colors.border, color: colors.inkMuted }}>Layer 12</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#F3E8FF', color: '#6B21A8' }}>AI Insight</span>
                          <span className="text-xs" style={{ color: colors.inkMuted }}>Expansion signal</span>
                        </div>
                        <div className="text-sm font-medium mb-1" style={{ color: colors.ink }}>Expansion Opportunity</div>
                        <div className="text-sm" style={{ color: colors.inkMuted }}>Stellarworks SaaS shows strong adoption trajectory (87%) and high NPS (81). Cross-referencing Layer 8 (Platform Health) and Layer 11 (Stakeholder Outcomes) suggests $95K expansion opportunity in Q3.</div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: colors.border, color: colors.inkMuted }}>Layer 8</span>
                          <span className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: colors.border, color: colors.inkMuted }}>Layer 11</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#F3E8FF', color: '#6B21A8' }}>AI Summary</span>
                          <span className="text-xs" style={{ color: colors.inkMuted }}>Engagement trend</span>
                        </div>
                        <div className="text-sm font-medium mb-1" style={{ color: colors.ink }}>Engagement Trend</div>
                        <div className="text-sm" style={{ color: colors.inkMuted }}>Portfolio sentiment trending negative over last 30 days. MedCore Health Systems and Vantage Telecom both show declining engagement frequency. Recommended action: proactive outreach sequence for at-risk accounts.</div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: colors.border, color: colors.inkMuted }}>Layer 12</span>
                          <span className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: colors.border, color: colors.inkMuted }}>Layer 15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // ─── DIGITAL TWIN WORKBENCH ───────────────────────────────────────────────

  const digitalTwin = (
    <div className="flex h-full">
      <div className="flex-1 flex flex-col min-w-0">
        <div className="px-6 py-4 border-b" style={{ background: colors.card, borderColor: colors.border }}>
          <h2 className="text-lg font-semibold" style={{ color: colors.ink }}>Digital Twin</h2>
          <p className="text-sm" style={{ color: colors.inkMuted }}>Conversational access to Personal, Organizational, and Account memory.</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: colors.healthGreen }} />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: colors.healthGreen }} />
            </span>
            <span className="text-xs font-medium" style={{ color: colors.healthGreen }}>Online · Multi-model active</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-4" style={{ background: colors.paper }}>
          {twinMessages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-2xl px-4 py-3 rounded-xl text-sm ${msg.from === 'user' ? 'rounded-br-sm' : 'rounded-bl-sm'}`} style={{
                background: msg.from === 'user' ? colors.forest : colors.card,
                color: msg.from === 'user' ? '#fff' : colors.ink,
                border: msg.from === 'user' ? 'none' : `1px solid ${colors.border}`,
                whiteSpace: 'pre-wrap',
              }}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t" style={{ background: colors.card, borderColor: colors.border }}>
          <div className="flex items-center gap-2 mb-3">
            {['Summarize portfolio', 'Health check all', 'Draft QBR prep', 'Churn forecast', 'Next actions', 'Open Governance Queue'].map(action => (
              <button
                key={action}
                onClick={() => {
                  setTwinMessages(prev => [...prev, { from: 'user', text: action }]);
                  setTimeout(() => {
                    setTwinMessages(prev => [...prev, { from: 'ai', text: `[Twin Note] Executing "${action}" across your account spine and organizational memory.\n\nBased on current signals, I found the following:\n\n• 3 accounts require immediate attention\n• 2 expansion opportunities identified\n• 1 governance approval pending\n\nWould you like me to generate a detailed report or take specific action?` }]);
                  }, 600);
                }}
                className="px-3 py-1.5 rounded-md text-xs font-medium border hover:bg-black/5 transition-colors"
                style={{ background: colors.paper, borderColor: colors.border, color: colors.ink }}
              >
                {action}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={twinInput}
              onChange={e => setTwinInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendTwinMessage()}
              placeholder="Ask your Digital Twin anything..."
              className="flex-1 px-4 py-2.5 rounded-lg border text-sm outline-none focus:ring-2"
              style={{ background: colors.paper, borderColor: colors.border, color: colors.ink }}
            />
            <button
              onClick={sendTwinMessage}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-white"
              style={{ background: colors.forest }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="w-72 border-l p-5 overflow-y-auto" style={{ background: colors.card, borderColor: colors.border }}>
        <h3 className="text-sm font-semibold mb-4" style={{ color: colors.ink }}>Active Capabilities</h3>
        <div className="mb-5">
          <div className="text-xs font-medium mb-2" style={{ color: colors.inkMuted }}>Memory Layers</div>
          <div className="space-y-1.5">
            {['Conversational Memory','Personal Memory','Organizational Memory','Account Spine (15 layers)'].map(m => (
              <div key={m} className="flex items-center gap-2 text-xs" style={{ color: colors.ink }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: colors.healthGreen }} />
                {m}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <div className="text-xs font-medium mb-2" style={{ color: colors.inkMuted }}>System Features</div>
          <div className="space-y-1.5">
            {['Signal Correlation','Cross-domain Reasoning','Predictive Analytics','Governance Integration'].map(f => (
              <div key={f} className="flex items-center gap-2 text-xs" style={{ color: colors.ink }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: colors.gold }} />
                {f}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs font-medium mb-2" style={{ color: colors.inkMuted }}>Active Models</div>
          <div className="space-y-1.5">
            {['Hermes v0.14.0','Spine Reasoning','Risk Prediction','Engagement Scoring'].map(m => (
              <div key={m} className="flex items-center gap-2 text-xs" style={{ color: colors.ink }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: colors.forestMuted }} />
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // ─── COGNITIVE LAYER WORKBENCH ────────────────────────────────────────────

  const cognitiveLayer = (
    <div className="h-full overflow-y-auto p-6" style={{ background: colors.paper }}>
      <div className="mb-6">
        <h2 className="text-xl font-semibold" style={{ color: colors.ink }}>Cognitive Layer</h2>
        <p className="text-sm" style={{ color: colors.inkMuted }}>Live signals, AI predictions, and cross-domain correlations across your account spine.</p>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="p-4 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
          <div className="text-xs" style={{ color: colors.inkMuted }}>Active Signals</div>
          <div className="text-2xl font-bold" style={{ color: colors.ink }}>24</div>
        </div>
        <div className="p-4 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
          <div className="text-xs" style={{ color: colors.inkMuted }}>AI Insight Accuracy</div>
          <div className="text-2xl font-bold" style={{ color: colors.healthGreen }}>87%</div>
        </div>
        <div className="p-4 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
          <div className="text-xs" style={{ color: colors.inkMuted }}>Spine Health</div>
          <div className="text-2xl font-bold" style={{ color: colors.healthGreen }}>98.4%</div>
        </div>
        <div className="p-4 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
          <div className="text-xs" style={{ color: colors.inkMuted }}>Projection Coverage</div>
          <div className="text-2xl font-bold" style={{ color: colors.ink }}>94%</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
          <h3 className="text-sm font-semibold mb-4" style={{ color: colors.ink }}>High Priority Signals</h3>
          <div className="space-y-3">
            {[
              { title: 'API error rate spike detected', source: 'Observability', severity: 'Critical' },
              { title: 'Usage declined 18% in last 30 days', source: 'Platform Analytics', severity: 'High' },
              { title: 'Executive sponsor departure flagged', source: 'Sales Ops', severity: 'High' },
              { title: 'NPS dropped 14 points QoQ', source: 'Customer Success', severity: 'Medium' },
              { title: 'Renewal conversation overdue by 12 days', source: 'CSM Calendar', severity: 'Medium' },
            ].map((sig, i) => (
              <div key={i} className="p-3 rounded-lg border flex items-start justify-between" style={{ background: colors.paper, borderColor: colors.border }}>
                <div>
                  <div className="text-sm font-medium" style={{ color: colors.ink }}>{sig.title}</div>
                  <div className="text-xs mt-0.5" style={{ color: colors.inkMuted }}>Source: {sig.source}</div>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ml-2" style={{
                  background: sig.severity === 'Critical' ? '#FFEBEE' : sig.severity === 'High' ? '#FFF3E0' : '#E8F0FE',
                  color: sig.severity === 'Critical' ? colors.healthRed : sig.severity === 'High' ? colors.healthAmber : '#1E3A5F',
                }}>{sig.severity}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
          <h3 className="text-sm font-semibold mb-4" style={{ color: colors.ink }}>AI Insights</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#F3E8FF', color: '#6B21A8' }}>AI Insight</span>
                <span className="text-xs" style={{ color: colors.inkMuted }}>Renewal Risk Alert</span>
              </div>
              <div className="text-sm" style={{ color: colors.inkMuted }}>Vantage Telecom shows 89% probability of renewal contraction within 60 days. Compounding factors: sponsor departure + API stability issues.</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: colors.border, color: colors.inkMuted }}>Layer 1</span>
                <span className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: colors.border, color: colors.inkMuted }}>Layer 10</span>
              </div>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#F3E8FF', color: '#6B21A8' }}>AI Insight</span>
                <span className="text-xs" style={{ color: colors.inkMuted }}>Expansion Opportunity</span>
              </div>
              <div className="text-sm" style={{ color: colors.inkMuted }}>Stellarworks SaaS shows strong adoption trajectory and high NPS. Cross-referencing Platform Health and Stakeholder Outcomes suggests $95K expansion opportunity in Q3.</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: colors.border, color: colors.inkMuted }}>Layer 8</span>
                <span className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: colors.border, color: colors.inkMuted }}>Layer 11</span>
              </div>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#F3E8FF', color: '#6B21A8' }}>AI Insight</span>
                <span className="text-xs" style={{ color: colors.inkMuted }}>Engagement Trend</span>
              </div>
              <div className="text-sm" style={{ color: colors.inkMuted }}>Portfolio sentiment trending negative over last 30 days. MedCore Health Systems and Vantage Telecom both show declining engagement frequency. Recommended action: proactive outreach sequence for at-risk accounts.</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: colors.border, color: colors.inkMuted }}>Layer 12</span>
                <span className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: colors.border, color: colors.inkMuted }}>Layer 15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // ─── GOVERNANCE WORKBENCH ─────────────────────────────────────────────────

  const governance = (
    <div className="h-full overflow-y-auto p-6" style={{ background: colors.paper }}>
      <div className="mb-2">
        <h2 className="text-xl font-semibold" style={{ color: colors.ink }}>Governance</h2>
        <p className="text-sm" style={{ color: colors.inkMuted }}>Trust, approvals, and AI safety guardrails.</p>
      </div>
      <p className="text-sm mb-6" style={{ color: colors.inkMuted }}>Guardrails for self-evolving AI systems. Human-in-the-loop safety and drift protection.</p>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="p-4 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
          <div className="text-xs" style={{ color: colors.inkMuted }}>Pending Approvals</div>
          <div className="text-2xl font-bold" style={{ color: colors.healthAmber }}>2</div>
        </div>
        <div className="p-4 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
          <div className="text-xs" style={{ color: colors.inkMuted }}>Policy Check</div>
          <div className="text-2xl font-bold" style={{ color: colors.healthGreen }}>Pass</div>
        </div>
        <div className="p-4 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
          <div className="text-xs" style={{ color: colors.inkMuted }}>Drift Protection</div>
          <div className="text-2xl font-bold" style={{ color: colors.healthGreen }}>Active</div>
        </div>
        <div className="p-4 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
          <div className="text-xs" style={{ color: colors.inkMuted }}>Triage Bot Today</div>
          <div className="text-2xl font-bold" style={{ color: colors.ink }}>24</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
          <h3 className="text-sm font-semibold mb-4" style={{ color: colors.ink }}>Approval Queue</h3>
          <div className="space-y-3">
            <div className="p-4 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium" style={{ color: colors.ink }}>Executive Escalation — Vantage Telecom</span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: '#FFF3E0', color: colors.healthAmber }}>Pending</span>
              </div>
              <div className="text-xs mb-3" style={{ color: colors.inkMuted }}>Generated by AI based on NPS drop and usage decline (confidence: 89%).</div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-md text-xs font-medium text-white" style={{ background: colors.healthGreen }}>Approve</button>
                <button className="px-3 py-1.5 rounded-md text-xs font-medium border" style={{ background: '#fff', borderColor: colors.border, color: colors.ink }}>Reject</button>
              </div>
            </div>
            <div className="p-4 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium" style={{ color: colors.ink }}>Re-engagement QBR — MedCore Health</span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: '#FFF3E0', color: colors.healthAmber }}>Pending</span>
              </div>
              <div className="text-xs mb-3" style={{ color: colors.inkMuted }}>Generated by AI based on usage decline and support ticket spike (confidence: 84%).</div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-md text-xs font-medium text-white" style={{ background: colors.healthGreen }}>Approve</button>
                <button className="px-3 py-1.5 rounded-md text-xs font-medium border" style={{ background: '#fff', borderColor: colors.border, color: colors.ink }}>Reject</button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="p-5 rounded-xl border" style={{ background: colors.card, borderColor: colors.border }}>
            <h3 className="text-sm font-semibold mb-3" style={{ color: colors.ink }}>Trust & Audit</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                <div className="text-sm font-medium mb-1" style={{ color: colors.ink }}>AI Drift Protection</div>
                <div className="text-xs" style={{ color: colors.inkMuted }}>Continuous monitoring of model behavior against baseline. Anomaly detection active across all inference paths. Last check: 3 minutes ago.</div>
              </div>
              <div className="p-3 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                <div className="text-sm font-medium mb-1" style={{ color: colors.ink }}>Triage Bot Activity</div>
                <div className="text-xs" style={{ color: colors.inkMuted }}>24 items processed today. 2 escalated for human review. Average resolution time: 4.2 minutes. Accuracy: 94%.</div>
              </div>
              <div className="p-3 rounded-lg border" style={{ background: colors.paper, borderColor: colors.border }}>
                <div className="text-sm font-medium mb-1" style={{ color: colors.ink }}>Self-Evolving System</div>
                <div className="text-xs" style={{ color: colors.inkMuted }}>116 skills active. 32 skill gaps pending. System is learning from approved decisions and updating reasoning patterns.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // ─── RENDER ───────────────────────────────────────────────────────────────

  return (
    <div className="h-screen w-full flex overflow-hidden" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', background: colors.paper }}>
      {/* Sidebar */}
      <div className="w-60 shrink-0 flex flex-col" style={{ background: colors.forest }}>
        <div className="px-4 py-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ background: colors.gold }}>IW</div>
            <span className="text-white font-semibold text-sm">IntegrateWise</span>
          </div>

          <div className="mb-4">
            <div className="text-xs font-semibold uppercase tracking-wider mb-2 px-3" style={{ color: 'rgba(255,255,255,0.5)' }}>Product Views</div>
            {sidebarItem('Account Success', product === 'Account Success', () => setProduct('Account Success'))}
            {sidebarItem('Business Ops', product === 'Business Ops', () => setProduct('Business Ops'))}
          </div>

          <div className="mb-4">
            <div className="text-xs font-semibold uppercase tracking-wider mb-2 px-3" style={{ color: 'rgba(255,255,255,0.5)' }}>Workbenches</div>
            {sidebarItem('Account Console', workbench === 'Account Console', () => setWorkbench('Account Console'), 'Day-to-day account execution for CS leaders.')}
            {sidebarItem('Digital Twin', workbench === 'Digital Twin', () => setWorkbench('Digital Twin'), 'Conversational control plane over all account memory.')}
            {sidebarItem('Cognitive Layer', workbench === 'Cognitive Layer', () => setWorkbench('Cognitive Layer'), 'Live signals, predictions, and cross-domain correlations.')}
            {sidebarItem('Governance', workbench === 'Governance', () => setWorkbench('Governance'), 'Trust, approvals, and AI safety guardrails.')}
          </div>

          <div className="mb-4">
            <div className="text-xs font-semibold uppercase tracking-wider mb-2 px-3" style={{ color: 'rgba(255,255,255,0.5)' }}>Memory Layers</div>
            {['Conversational','Personal','Organizational'].map(m => (
              <button
                key={m}
                className="w-full text-left px-3 py-2 rounded-md text-sm transition-colors mb-0.5"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto px-4 py-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Hermes v0.14.0 — 116 skills</div>
          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>32 skill gaps pending</div>
        </div>
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {topbar}
        <div className="flex-1 overflow-hidden">
          {workbench === 'Account Console' && accountConsole}
          {workbench === 'Digital Twin' && digitalTwin}
          {workbench === 'Cognitive Layer' && cognitiveLayer}
          {workbench === 'Governance' && governance}
        </div>
      </div>
    </div>
  );
}
