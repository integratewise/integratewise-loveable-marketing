import { useState, type FormEvent } from "react";
import { X, Check } from "lucide-react";
import { useDemoModal } from "./demo-modal-context";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDb } from "@/integrations/firebase/client";

async function submitTo(collectionName: string, payload: Record<string, unknown>): Promise<void> {
  await addDoc(collection(getDb(), collectionName), {
    ...payload,
    created_at: serverTimestamp(),
    user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
  });
}

export function LeadModals() {
  const { kind, source, close } = useDemoModal();
  if (!kind) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={close}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />
      <div className="relative z-10 w-full max-w-lg rounded-t-2xl border border-border bg-card p-6 shadow-card-lg sm:rounded-2xl sm:p-8">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-lg text-text-secondary hover:bg-white/5 hover:text-foreground"
        >
          <X size={18} />
        </button>
        {kind === "demo" && <DemoForm source={source} onDone={close} />}
        {kind === "early-access" && <EarlyAccessForm source={source} onDone={close} />}
        {kind === "waitlist" && <WaitlistForm source={source} onDone={close} />}
      </div>
    </div>
  );
}

function Done({ title, body }: { title: string; body: string }) {
  return (
    <div className="py-6 text-center">
      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-success/15 text-success">
        <Check size={22} />
      </div>
      <h3 className="heading-h3 mt-5">{title}</h3>
      <p className="mt-2 text-[15px] text-text-secondary">{body}</p>
    </div>
  );
}

function ErrorMessage({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p className="mt-3 rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-[13px] text-destructive">
      {message}
    </p>
  );
}

function DemoForm({ source, onDone }: { source: string; onDone: () => void }) {
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      work_email: String(fd.get("work_email") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      role: String(fd.get("role") ?? "").trim() || null,
      use_case: String(fd.get("use_case") ?? "").trim() || null,
      team_size: String(fd.get("team_size") ?? "").trim() || null,
      notes: String(fd.get("notes") ?? "").trim() || null,
      source_page: source,
    };
    try {
      await submitTo("demo_requests", payload);
      setDone(true);
      setTimeout(onDone, 2200);
    } catch {
      setErr("Something went wrong. Please try again or email connect@integratewise.ai");
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <Done
        title="Request received."
        body="We'll be in touch within one business day to schedule your demo."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <header>
        <h3 className="heading-h3">Book a Demo</h3>
        <p className="mt-1 text-[14px] text-text-secondary">
          Founder-led. Real conversation. We show you Memory + Twin live with your scenario.
        </p>
      </header>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Work email" name="work_email" type="email" required />
        <Field label="Company" name="company" required />
        <Field label="Role" name="role" placeholder="Founder, Ops Lead, CSM…" />
        <Field label="Team size" name="team_size" placeholder="1–10, 11–50, 50+" />
        <Field label="Main use case" name="use_case" placeholder="Account success, finance ops…" />
      </div>
      <Field label="Anything we should know?" name="notes" textarea />
      <ErrorMessage message={err} />
      <button type="submit" disabled={busy} className="btn-primary-iw w-full">
        {busy ? "Sending…" : "Request demo"}
      </button>
    </form>
  );
}

function EarlyAccessForm({ source, onDone }: { source: string; onDone: () => void }) {
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    const fd = new FormData(e.currentTarget);
    try {
      await submitTo("early_access", {
        email: String(fd.get("email") ?? "").trim(),
        role: String(fd.get("role") ?? "").trim() || null,
        source_page: source,
      });
      setDone(true);
      setTimeout(onDone, 2000);
    } catch {
      setErr("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  if (done) return <Done title="You're on the list." body="We'll reach out as cohorts open." />;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <header>
        <h3 className="heading-h3">Join Early Access</h3>
        <p className="mt-1 text-[14px] text-text-secondary">
          We onboard a small number of teams each month so we can stay close.
        </p>
      </header>
      <Field label="Work email" name="email" type="email" required />
      <Field label="Your role" name="role" placeholder="Founder, Head of Ops…" />
      <ErrorMessage message={err} />
      <button type="submit" disabled={busy} className="btn-primary-iw w-full">
        {busy ? "Sending…" : "Join Early Access"}
      </button>
    </form>
  );
}

function WaitlistForm({ source, onDone }: { source: string; onDone: () => void }) {
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    const fd = new FormData(e.currentTarget);
    try {
      await submitTo("waitlist", {
        email: String(fd.get("email") ?? "").trim(),
        source_page: source,
      });
      setDone(true);
      setTimeout(onDone, 2000);
    } catch {
      setErr("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  if (done)
    return (
      <Done title="You're on the waitlist." body="Personal Ops rolls out cohort by cohort." />
    );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <header>
        <h3 className="heading-h3">Join the Waitlist</h3>
        <p className="mt-1 text-[14px] text-text-secondary">
          Personal Ops is invite-only while we keep memory truly private.
        </p>
      </header>
      <Field label="Email" name="email" type="email" required />
      <ErrorMessage message={err} />
      <button type="submit" disabled={busy} className="btn-primary-iw w-full">
        {busy ? "Sending…" : "Join the Waitlist"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-text-secondary">
        {label} {required && <span className="text-warning">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} rows={3} placeholder={placeholder} className="input-iw resize-none" />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="input-iw"
          autoComplete="off"
        />
      )}
    </label>
  );
}
