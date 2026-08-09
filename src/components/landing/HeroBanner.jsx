import Link from "next/link";
import { ArrowRight, Check, Play, Sparkles } from "lucide-react";
import { challengeStats } from "@/data/challengeDays";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f2] px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute left-[7%] top-28 size-40 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-[7%] size-56 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-700 shadow-sm">
            <Sparkles className="size-4 text-blue-600" /> Cohort 08 is now open
          </div>
          <h1 className="text-balance text-5xl font-black leading-[0.96] tracking-[-0.065em] text-slate-950 sm:text-6xl lg:text-[88px]">
            Stop learning.<br />
            <span className="relative inline-block text-blue-600">
              Start building.
              <svg className="absolute -bottom-3 left-0 w-full text-orange-400" viewBox="0 0 500 18" fill="none" aria-hidden="true">
                <path d="M4 13C118 4 340 3 496 8" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-10 max-w-2xl text-pretty text-lg font-medium leading-8 text-slate-600 sm:text-xl">
            A 60-day building challenge that turns scattered tutorials into real skills, finished projects, and a habit that lasts.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/api/start" className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-slate-950 px-7 text-base font-bold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-1 hover:bg-blue-600 sm:w-auto">
              Commit to 60 days <ArrowRight className="size-5 transition group-hover:translate-x-1" />
            </Link>
            <Link href="#curriculum" className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-slate-300 bg-white px-7 text-base font-bold text-slate-900 transition hover:border-slate-950 sm:w-auto">
              <span className="grid size-7 place-items-center rounded-full bg-orange-100 text-orange-600"><Play className="size-3.5 fill-current" /></span>
              Explore the path
            </Link>
          </div>
          <p className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-slate-500">
            <Check className="size-4 text-emerald-600" /> Free to start · Built for complete beginners
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-4">
          {challengeStats.map((stat, index) => (
            <div key={stat.label} className={`p-6 text-center sm:p-8 ${index % 2 === 0 ? "border-r border-slate-200" : ""} ${index < 2 ? "border-b border-slate-200 lg:border-b-0" : ""} ${index === 1 ? "lg:border-r" : ""} ${index === 2 ? "lg:border-r" : ""}`}>
              <div className="text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
