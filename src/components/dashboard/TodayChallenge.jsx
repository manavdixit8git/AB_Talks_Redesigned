import Link from "next/link";
import { ArrowRight, Clock3, Gauge, Sparkles } from "lucide-react";

export default function TodayChallenge({ day }) {
  return (
    <article className="relative overflow-hidden rounded-[32px] bg-blue-600 p-7 text-white shadow-xl shadow-blue-900/15 sm:p-9">
      <div className="dashboard-dots pointer-events-none absolute inset-0 opacity-20" />
      <div className="absolute -right-20 -top-20 size-64 rounded-full bg-white/10" />
      <div className="relative">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em]">
          <Sparkles className="size-3.5" /> Today's challenge
        </p>
        <h2 className="max-w-xl text-3xl font-black leading-tight tracking-[-0.045em] sm:text-4xl">{day.shortTitle}</h2>
        <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-blue-100 sm:text-base">{day.task}</p>
        <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold text-blue-100">
          <span className="inline-flex items-center gap-2"><Clock3 className="size-4" /> {day.duration}</span>
          <span className="inline-flex items-center gap-2"><Gauge className="size-4" /> {day.difficulty}</span>
        </div>
        <Link href={`/day/${day.id}`} className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 text-sm font-black text-blue-700 transition hover:-translate-y-0.5 hover:bg-orange-200 hover:text-slate-950">
          Open Day {day.id} <ArrowRight className="size-4 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
