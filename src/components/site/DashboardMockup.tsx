import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { SpineLogo } from "@/components/site/SpineLogo";
import {
  Home,
  FolderKanban,
  Users,
  Contact,
  Calendar,
  FileText,
  CheckSquare,
  StickyNote,
  BookOpen,
  Brain,
  Search,
  Bell,
  AlertTriangle,
  Plus,
  Download,
  LayoutGrid,
  List,
  Sparkles,
  X,
  ChevronUp,
  Check,
  Shield,
  GitBranch,
  Target,
  TrendingUp,
  LineChart,
  Workflow,
  Clock,
  Eye,
  Activity,
  Zap,
  Bot,
  CircleDot,
  RefreshCw,
  UserCircle,
  Link as LinkIcon,
  MessageSquare,
} from "lucide-react";

/* ─── Sidebar nav ─── */
const WORKSPACE_NAV = [
  { icon: Home, label: "Home" },
  { icon: FolderKanban, label: "Projects" },
  { icon: Users, label: "Accounts", active: true },
  { icon: Contact, label: "Contacts" },
  { icon: Calendar, label: "Meetings" },
  { icon: FileText, label: "Docs" },
  { icon: CheckSquare, label: "Tasks" },
  { icon: StickyNote, label: "Notes" },
  { icon: BookOpen, label: "Knowledge" },
  { icon: Users, label: "Team" },
  { icon: GitBranch, label: "Pipeline" },
  { icon: Shield, label: "Risks" },
  { icon: Target, label: "Deals" },
  { icon: TrendingUp, label: "Forecasting" },
  { icon: LineChart, label: "Analytics" },
  { icon: Workflow, label: "Workflows" },
];

const CONNECT_NAV = [
  { icon: LinkIcon, label: "Integrations" },
  { icon: MessageSquare, label: "AI Chat" },
];

/* ─── Account card data ─── */
const ACCOUNTS = [
  { name: "TechServe India", type: "Enterprise · Tech", emoji: "🟢", arr: "$420K", growth: "+12.5%", growthUp: true, health: 92, healthLabel: "Healthy", healthColor: "rgb(255,178,44)", renewal: "126d", progress: 85 },
  { name: "CloudBridge APAC", type: "Enterprise · Cloud", emoji: "🟢", arr: "$280K", growth: "+8.3%", growthUp: true, health: 78, healthLabel: "At-Risk", healthColor: "#f59e0b", renewal: "72d", progress: 92 },
  { name: "FinanceFlow", type: "Mid-Market · FinTech", emoji: "🟠", arr: "$180K", growth: "-2.1%", growthUp: false, health: 54, healthLabel: "Critical", healthColor: "#ef4444", renewal: "29d", progress: 67 },
  { name: "DataVault AU", type: "Enterprise · Security", emoji: "🟢", arr: "$350K", growth: "+15.2%", growthUp: true, health: 88, healthLabel: "Healthy", healthColor: "rgb(255,178,44)", renewal: "204d", progress: 78 },
  { name: "RetailNest Pte", type: "SMB · Retail", emoji: "🟡", arr: "$95K", growth: "+5.7%", growthUp: true, health: 71, healthLabel: "At-Risk", healthColor: "#f59e0b", renewal: "98d", progress: 45 },
  { name: "HealthTech Innov", type: "Mid-Market · Health", emoji: "🟢", arr: "$210K", growth: "+22%", growthUp: true, health: 95, healthLabel: "Healthy", healthColor: "rgb(255,178,44)", renewal: "202d", progress: 90 },
];

/* ─── Approval items ─── */
const APPROVAL_ITEMS = [
  { id: "1", title: "Update lifecycle stage in HubSpot", subtitle: "Move 'FinanceFlow' from Customer → At-Risk", confidence: 94, logo: "/logos/hubspot.svg", tool: "HubSpot" },
  { id: "2", title: "Escalate support tickets to P1", subtitle: "3 open tickets blocking renewal sync", confidence: 91, logo: "/logos/jira.svg", tool: "Jira" },
  { id: "3", title: "Alert the CS team on Slack", subtitle: "Notify #renewals-critical about FinanceFlow", confidence: 88, logo: "/logos/slack.svg", tool: "Slack" },
  { id: "4", title: "Update opportunity in Salesforce", subtitle: "Move to 'Renewal at Risk' with notes", confidence: 96, logo: "/logos/salesforce.svg", tool: "Salesforce" },
];

/* ─── Animation phases ─── */
const PHASES = [
  { id: "workbench", duration: 5000 },
  { id: "drawer-open", duration: 1500 },
  { id: "context-loading", duration: 2500 },
  { id: "signal", duration: 3500 },
  { id: "done", duration: 3000 },
] as const;

/* ─── Drawer tabs (user language) ─── */
const DRAWER_TABS = [
  { icon: CircleDot, label: "Your Data" },
  { icon: Eye, label: "Full Picture" },
  { icon: Brain, label: "Knowledge" },
  { icon: FileText, label: "Evidence" },
  { icon: Activity, label: "What Matters" },
  { icon: Bot, label: "AI Thinking" },
  { icon: Zap, label: "Next Steps" },
  { icon: Check, label: "Your Call", active: true },
  { icon: Shield, label: "Controls" },
  { icon: RefreshCw, label: "Adjust" },
  { icon: GitBranch, label: "Learning" },
  { icon: Clock, label: "History" },
  { icon: UserCircle, label: "Your Twin" },
];

/* ─── Account Card ─── */
function AccountCard({ account, delay }: { account: (typeof ACCOUNTS)[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="rounded-lg border border-gray-200 bg-white p-2.5 space-y-1.5 shadow-sm"
    >
      <div className="flex items-center gap-1.5">
        <span className="text-[10px]">{account.emoji}</span>
        <div className="min-w-0">
          <p className="text-[8px] text-gray-800 font-semibold truncate">{account.name}</p>
          <p className="text-[6px] text-gray-400">{account.type}</p>
        </div>
      </div>
      <div className="flex items-baseline justify-between">
        <div>
          <span className="text-[12px] text-gray-900 font-bold">{account.arr}</span>
          <p className="text-[6px] text-gray-400 uppercase font-medium">ARR</p>
        </div>
        <span
          className="text-[7px] font-semibold"
          style={{ color: account.growthUp ? "rgb(255,178,44)" : "#ef4444" }}
        >
          {account.growth}
        </span>
      </div>
      <div>
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-[6px] text-gray-400 font-medium">Health</span>
          <span className="text-[6px] font-semibold" style={{ color: account.healthColor }}>
            {account.health}/100 · {account.healthLabel}
          </span>
        </div>
        <div className="h-[2px] rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${account.health}%`, backgroundColor: account.healthColor }}
          />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Clock className="w-2 h-2 text-gray-300" />
        <span className="text-[6px] text-gray-400">
          Renewal in <span className="text-gray-700 font-medium">{account.renewal}</span>
        </span>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════ */
export function DashboardMockup() {
  const [phaseIdx, setPhaseIdx] = useState(0);
  const mountedRef = useRef(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advancePhase = useCallback(() => {
    if (!mountedRef.current) return;
    setPhaseIdx((p) => (p + 1) % PHASES.length);
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(advancePhase, PHASES[phaseIdx].duration);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phaseIdx, advancePhase]);

  const drawerOpen = phaseIdx >= 1;
  const contextLoading = phaseIdx >= 2;
  const showSignal = phaseIdx >= 3;

  return (
    <div className="relative w-full" style={{ height: 520 }}>
      {/* ═══ WORKBENCH: WORKSPACE ═══ */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-gray-200 overflow-hidden shadow-xl bg-white"
        animate={{
          y: drawerOpen ? -12 : 0,
          scale: drawerOpen ? 0.97 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 28 }}
      >
        <div className="flex h-full">
          {/* ── Sidebar ── */}
          <div
            className="w-[130px] shrink-0 border-r border-[#1e3048] flex flex-col h-full overflow-hidden"
            style={{ background: "#0a1520" }}
          >
            {/* Logo */}
            <div className="px-2.5 py-2 border-b border-[#1e3048] flex items-center gap-1.5">
              <SpineLogo className="h-4 w-8 shrink-0 text-white" />
              <p className="text-[8px] text-[#e8edf3] font-bold">
                Integrate<span className="text-brand-highlight">Wise</span>
              </p>
            </div>

            {/* Workbench label */}
            <div className="px-2 py-1.5 border-b border-[#1e3048]">
              <div
                className="flex items-center gap-1.5 px-1.5 py-1 rounded-md"
                style={{ backgroundColor: "rgba(255,178,44,0.1)" }}
              >
                <div
                  className="w-4 h-4 rounded flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,178,44,0.2)" }}
                >
                  <span className="text-[7px]">🌏</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[7px] text-[#e8edf3] font-semibold truncate">Business Ops</p>
                  <p className="text-[6px] text-[#8da0b8]/40 uppercase tracking-wider">Product Org</p>
                </div>
              </div>
            </div>

            {/* Nav items */}
            <div className="flex-1 overflow-hidden px-1.5 py-1.5 space-y-0.5">
              <p className="text-[6px] text-[#8da0b8]/40 uppercase tracking-wider px-1.5 mb-1 font-bold">
                Workbench
              </p>
              {WORKSPACE_NAV.map((item) => {
                const NavIcon = item.icon;
                const active = "active" in item && item.active;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-1.5 px-1.5 py-[3px] rounded-md transition-colors ${
                      active ? "text-brand-accent" : "text-[#8da0b8]/50"
                    }`}
                    style={active ? { backgroundColor: "rgba(255,178,44,0.12)" } : {}}
                  >
                    <NavIcon className="w-2.5 h-2.5 shrink-0" />
                    <span className={`text-[7px] truncate ${active ? "font-semibold" : ""}`}>
                      {item.label}
                    </span>
                  </div>
                );
              })}
              <p className="text-[6px] text-[#8da0b8]/40 uppercase tracking-wider px-1.5 mt-2 mb-1 font-bold">
                Connect
              </p>
              {CONNECT_NAV.map((item) => {
                const NavIcon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-1.5 px-1.5 py-[3px] rounded-md text-[#8da0b8]/50"
                  >
                    <NavIcon className="w-2.5 h-2.5 shrink-0" />
                    <span className="text-[7px]">{item.label}</span>
                  </div>
                );
              })}

              {/* Intelligence button */}
              <p className="text-[6px] text-[#8da0b8]/40 uppercase tracking-wider px-1.5 mt-2 mb-1 font-bold">
                System
              </p>
              <motion.div
                className="flex items-center gap-1.5 px-1.5 py-[3px] rounded-md"
                animate={{
                  backgroundColor: drawerOpen
                    ? "rgba(255,178,44,0.2)"
                    : "rgba(255,178,44,0.08)",
                }}
              >
                <Sparkles className="w-2.5 h-2.5 text-brand-highlight" />
                <span className="text-[7px] font-semibold text-brand-highlight">Intelligence</span>
                {drawerOpen && (
                  <motion.div
                    className="w-1 h-1 rounded-full bg-brand-highlight ml-auto"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.div>
            </div>

            {/* User */}
            <div className="px-2 py-2 border-t border-[#1e3048] flex items-center gap-1.5">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,178,44,0.15)" }}
              >
                <span className="text-[7px] text-brand-highlight font-semibold">AR</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[7px] text-[#e8edf3] font-semibold truncate">Alex Rivera</p>
                <p className="text-[6px] text-[#8da0b8]/40 uppercase">Operations Lead</p>
              </div>
            </div>
          </div>

          {/* ── Main Content ── */}
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-white">
            {/* Top bar */}
            <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-200">
              <div className="flex items-center gap-1">
                <span className="text-[7px] text-gray-400">Workbench</span>
                <span className="text-[7px] text-gray-300">›</span>
                <span className="text-[7px] text-gray-700 font-medium">Accounts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-100 border border-gray-200">
                  <Search className="w-2.5 h-2.5 text-gray-400" />
                  <span className="text-[7px] text-gray-400">Search...</span>
                </div>
                <Bell className="w-3 h-3 text-gray-400" />
                <div className="flex items-center gap-1 pl-2 border-l border-gray-200">
                  <span className="text-[7px] text-gray-500 uppercase font-medium">Ops Lead</span>
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255,178,44,0.1)" }}
                  >
                    <span className="text-[6px] text-brand-highlight font-semibold">A</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert banner */}
            <div className="flex items-center gap-2 px-3 py-1 border-b bg-amber-50/60 border-amber-200/30">
              <AlertTriangle className="w-2.5 h-2.5 shrink-0 text-amber-500" />
              <p className="text-[7px] text-amber-600 font-semibold">
                Schema Drift Detected — Jira Integration
              </p>
              <p className="text-[7px] text-gray-500 flex-1">
                2 fields changed upstream. Auto-correction proposed.
              </p>
              <span className="text-[6px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-600 font-semibold shrink-0">
                Review
              </span>
            </div>

            {/* Content area */}
            <div className="flex-1 overflow-hidden p-3">
              {/* Header */}
              <div className="flex items-center justify-between mb-2.5">
                <div>
                  <h2 className="text-[12px] text-gray-900 font-bold">Accounts & Revenue</h2>
                  <p className="text-[7px] text-gray-500">Total ARR: $1.75M · 6 accounts</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md border border-gray-200 text-[7px] text-gray-500">
                    <Download className="w-2.5 h-2.5" /> Export
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md text-[7px] text-white font-semibold bg-brand-highlight">
                    <Plus className="w-2.5 h-2.5" /> Add Account
                  </div>
                </div>
              </div>

              {/* Search & view toggle */}
              <div className="flex items-center gap-2 mb-2.5">
                <div className="flex-1 flex items-center gap-1 px-2 py-1 rounded-md border border-gray-200 bg-gray-50">
                  <Search className="w-2.5 h-2.5 text-gray-400" />
                  <span className="text-[7px] text-gray-400">Search accounts...</span>
                </div>
                <div className="flex items-center gap-0.5 p-0.5 rounded-md bg-gray-100">
                  <div className="p-1 rounded bg-white shadow-sm">
                    <LayoutGrid className="w-2.5 h-2.5 text-gray-700" />
                  </div>
                  <div className="p-1 rounded">
                    <List className="w-2.5 h-2.5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Account cards grid */}
              <div className="grid grid-cols-3 gap-2">
                {ACCOUNTS.map((account, i) => (
                  <AccountCard key={account.name} account={account} delay={i * 0.06} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══ INTELLIGENCE: DRAWER ═══ */}
      <motion.div
        className="absolute left-1 right-1 bottom-0 rounded-t-2xl border border-b-0 border-gray-200 overflow-hidden z-10"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)",
          boxShadow: "0 -8px 40px rgba(0,0,0,0.08)",
        }}
        initial={false}
        animate={{
          y: drawerOpen ? "0%" : "100%",
          height: drawerOpen ? 295 : 0,
        }}
        transition={{ type: "spring", stiffness: 160, damping: 24, mass: 1.1 }}
      >
        {/* Alert banner */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50/50 border-b border-red-100/50">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-red-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-red-100 text-red-600 font-bold">
            Renewal Risk → FinanceFlow Solutions
          </span>
          <p className="text-[7px] text-gray-500 flex-1">
            3 P1 tickets, champion silent 12 days, payment failed twice. Renewal in 29 days.
          </p>
          <div className="flex items-center gap-1">
            {[
              { src: "/logos/salesforce.svg", alt: "Salesforce" },
              { src: "/logos/zendesk.svg", alt: "Zendesk" },
              { src: "/logos/stripe.svg", alt: "Stripe" },
            ].map(({ src, alt }) => (
              <img key={src} src={src} alt={alt} className="w-2.5 h-2.5 opacity-60" />
            ))}
            <span className="text-[7px] text-gray-300 ml-1">3 min ago</span>
          </div>
        </div>

        {/* Intelligence header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "rgba(255,178,44,0.1)" }}
            >
              <Sparkles className="w-4 h-4 text-brand-highlight" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-gray-800 font-bold">Cognitive Layer</span>
                <span
                  className="text-[7px] px-1.5 py-0.5 rounded font-semibold"
                  style={{ backgroundColor: "rgba(255,178,44,0.1)", color: "rgb(255,178,44)" }}
                >
                  ACTIVE
                </span>
              </div>
              <span className="text-[7px] text-gray-400">
                AI proposes. You decide what happens.
              </span>
            </div>
          </div>
          <X className="w-3.5 h-3.5 text-gray-400" />
        </div>

        {/* Tab bar */}
        <div
          className="flex items-center gap-0 px-4 border-b border-gray-200 overflow-x-auto bg-gray-50/50"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {DRAWER_TABS.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = "active" in tab && tab.active;
            return (
              <div
                key={tab.label}
                className={`flex items-center gap-1 px-2 py-1.5 shrink-0 border-b-2 transition-colors ${
                  isActive
                    ? "border-brand-highlight text-brand-highlight"
                    : "border-transparent text-gray-400"
                }`}
              >
                <TabIcon className="w-2.5 h-2.5" />
                <span
                  className={`text-[7px] whitespace-nowrap ${isActive ? "font-semibold" : ""}`}
                >
                  {tab.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Approval Queue */}
        <div className="px-4 py-2.5 space-y-2 overflow-hidden">
          <div className="flex items-center justify-between">
            <h4 className="text-[10px] text-gray-800 font-semibold">
              You decide what happens next
            </h4>
            {contextLoading && (
              <span className="text-[7px] text-gray-400">
                {APPROVAL_ITEMS.length} actions pending your approval
              </span>
            )}
          </div>

          {contextLoading &&
            APPROVAL_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.12,
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="rounded-xl border border-gray-200 bg-white p-2.5 flex items-center gap-3 shadow-sm"
              >
                <div className="w-7 h-7 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                  <img src={item.logo} alt={item.tool} className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] text-gray-800 font-semibold">{item.title}</p>
                  <p className="text-[7px] text-gray-400">
                    {item.subtitle} · Confidence:{" "}
                    <span className="text-gray-600 font-semibold">{item.confidence}%</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="text-[8px] text-gray-400 px-2.5 py-1 rounded-md border border-gray-200 font-medium cursor-default">
                    Deny
                  </div>
                  <motion.div
                    className="text-[8px] text-white px-3 py-1.5 rounded-md font-semibold bg-brand-highlight cursor-default"
                    animate={
                      showSignal && idx === 0
                        ? {
                            boxShadow: [
                              "0 0 0px rgba(27,167,132,0)",
                              "0 0 16px rgba(27,167,132,0.45)",
                              "0 0 0px rgba(27,167,132,0)",
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Approve & Execute
                  </motion.div>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>

      {/* ═══ Pull tab (visible when drawer closed) ═══ */}
      {!drawerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-md z-10"
        >
          <ChevronUp className="w-3 h-3 text-brand-highlight" />
          <span className="text-[9px] text-gray-500 font-medium">
            Cognitive Layer — analyzing your accounts...
          </span>
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-brand-highlight"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      )}

      {/* ═══ Layer labels ═══ */}
      <div className="absolute -left-1 top-3 z-20">
        <div className="flex flex-col items-center px-1 py-1.5 rounded-r-lg bg-white border border-l-0 border-gray-200 shadow-sm">
          <span className="text-[7px] text-gray-500 uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 font-semibold">
            Workbench
          </span>
        </div>
      </div>
      {drawerOpen && (
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute -left-1 bottom-3 z-20"
        >
          <div
            className="flex flex-col items-center px-1 py-1.5 rounded-r-lg border border-l-0"
            style={{
              backgroundColor: "rgba(255,178,44,0.06)",
              borderColor: "rgba(255,178,44,0.15)",
            }}
          >
            <span className="text-[7px] text-brand-highlight uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 font-semibold">
              Intelligence
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
