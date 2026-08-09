import { Crosshair, Lightbulb } from "lucide-react";

export default function MissionCard({ day }) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-6 py-4">
        <h2 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.1em] text-slate-900">
          <Crosshair className="size-5 text-blue-600" /> Today's mission
        </h2>
        <span className="text-xs font-bold text-slate-400">Required</span>
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-xl font-bold leading-8 tracking-[-0.02em] text-slate-800">{day.task}</p>
        <div className="mt-6 flex gap-3 rounded-2xl bg-orange-50 p-4 text-sm leading-6 text-orange-950">
          <Lightbulb className="mt-0.5 size-5 shrink-0 text-orange-500" />
          <p><strong>Builder's note:</strong> Keep version one deliberately small. A working solution you understand is more valuable than an ambitious one you cannot finish.</p>
        </div>
      </div>
    </section>
  );
}
