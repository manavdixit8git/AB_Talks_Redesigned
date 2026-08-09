import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, Gauge, Layers3 } from "lucide-react";

export default function ChallengeHeader({ day, completed }) {
  return (
    <header className="border-b border-slate-200 bg-[#f7f7f2] px-5 py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.12em]">
          <span className="text-blue-600">Day {day.id} of 60</span>
          <span className="size-1 rounded-full bg-slate-300" />
          <span className="text-slate-400">{day.eyebrow}</span>
          {completed && (
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-emerald-700">
              <CheckCircle2 className="size-3.5" /> Completed
            </span>
          )}
        </div>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">{day.shortTitle}</h1>
        <p className="mt-5 max-w-3xl text-base font-medium leading-7 text-slate-600 sm:text-lg">{day.description}</p>
        <div className="mt-7 flex flex-wrap items-center gap-5 text-sm font-bold text-slate-500">
          <span className="inline-flex items-center gap-2"><Clock3 className="size-4 text-orange-500" /> {day.duration}</span>
          <span className="inline-flex items-center gap-2"><Gauge className="size-4 text-blue-600" /> {day.difficulty}</span>
          <span className="inline-flex items-center gap-2"><Layers3 className="size-4 text-violet-600" /> Build + reflection</span>
        </div>
        <div className="mt-9 flex items-center gap-3">
          <Link href={`/day/${Math.max(1, day.id - 1)}`} aria-label="Previous day" className={`grid size-11 place-items-center rounded-full border border-slate-300 text-slate-500 transition hover:border-slate-950 hover:text-slate-950 ${day.id === 1 ? "pointer-events-none opacity-30" : ""}`}>
            <ArrowLeft className="size-4" />
          </Link>
          <Link href={`/day/${Math.min(60, day.id + 1)}`} aria-label="Next day" className="grid size-11 place-items-center rounded-full border border-slate-300 text-slate-500 transition hover:border-slate-950 hover:text-slate-950">
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
