import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type ModalKind = "demo" | "early-access" | "waitlist" | null;

interface DemoModalState {
  kind: ModalKind;
  source: string;
  open: (source?: string) => void;
  openEarlyAccess: (source?: string) => void;
  openWaitlist: (source?: string) => void;
  close: () => void;
}

const Ctx = createContext<DemoModalState | null>(null);

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [kind, setKind] = useState<ModalKind>(null);
  const [source, setSource] = useState("");

  const open = useCallback((s = "Unknown") => {
    setSource(s);
    setKind("demo");
  }, []);
  const openEarlyAccess = useCallback((s = "Unknown") => {
    setSource(s);
    setKind("early-access");
  }, []);
  const openWaitlist = useCallback((s = "Unknown") => {
    setSource(s);
    setKind("waitlist");
  }, []);
  const close = useCallback(() => setKind(null), []);

  const value = useMemo(
    () => ({ kind, source, open, openEarlyAccess, openWaitlist, close }),
    [kind, source, open, openEarlyAccess, openWaitlist, close],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useDemoModal() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useDemoModal must be used within DemoModalProvider");
  return ctx;
}
