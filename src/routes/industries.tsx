import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500/30">
      <Header />
      <main className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Industries
        </h1>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl">
          Discover how our platform empowers different industries.
        </p>
        
        {/* Placeholder for 7-block template sections */}
        <section className="mt-16 space-y-24">
          <div className="h-64 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500">Section 1 Placeholder</div>
          <div className="h-64 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500">Section 2 Placeholder</div>
          <div className="h-64 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500">Section 3 Placeholder</div>
          <div className="h-64 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500">Section 4 Placeholder</div>
          <div className="h-64 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500">Section 5 Placeholder</div>
          <div className="h-64 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500">Section 6 Placeholder</div>
          <div className="h-64 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500">Section 7 Placeholder</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
