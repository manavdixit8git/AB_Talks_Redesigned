import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-orange-300 px-5 py-20 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-orange-950/70">
            <Clock3 className="size-4" /> Your first task takes 45 minutes
          </div>
          <h2 className="max-w-3xl text-4xl font-black leading-none tracking-[-0.055em] text-slate-950 sm:text-6xl">Day one can be today.</h2>
        </div>
        <Link href="/api/start" className="group inline-flex min-h-16 w-fit shrink-0 items-center gap-4 rounded-full bg-slate-950 px-8 text-base font-black text-white transition hover:-translate-y-1 hover:bg-blue-700">
          Enter the challenge <ArrowRight className="size-5 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
