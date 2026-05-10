import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/industries_/$industryId")({
  component: IndustryDetailPage,
});

function IndustryDetailPage() {
  const { industryId } = Route.useParams();
  
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500/30">
      <Header />
      <main className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 capitalize">
          {industryId.replace(/-/g, ' ')}
        </h1>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl">
          Transforming the {industryId.replace(/-/g, ' ')} industry with intelligent workflows.
        </p>
        
        {/* Placeholder for 7-block template sections */}
        <section className="mt-16 space-y-24">
          <div className="h-64 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500">Hero Section</div>
          <div className="h-64 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500">Features</div>
          <div className="h-64 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500">Use Cases</div>
          <div className="h-64 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500">Testimonials</div>
          <div className="h-64 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500">Stats / Metrics</div>
          <div className="h-64 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500">Integrations</div>
          <div className="h-64 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500">CTA</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
