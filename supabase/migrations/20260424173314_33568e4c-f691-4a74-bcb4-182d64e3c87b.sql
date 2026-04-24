-- Lead capture tables (insert-only for anon, full access for service role)

CREATE TABLE public.demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  work_email text NOT NULL,
  company text NOT NULL,
  role text,
  use_case text,
  team_size text,
  notes text,
  source_page text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.early_access (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  role text,
  source_page text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  source_page text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.connector_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  connector_name text NOT NULL,
  email text NOT NULL,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.early_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.connector_requests ENABLE ROW LEVEL SECURITY;

-- Anyone (anonymous + authenticated) can submit a lead
CREATE POLICY "anyone can submit demo request" ON public.demo_requests FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "anyone can join early access" ON public.early_access FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "anyone can join waitlist" ON public.waitlist FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "anyone can request connector" ON public.connector_requests FOR INSERT TO anon, authenticated WITH CHECK (true);

-- No SELECT policies = no one (except service role) can read submissions