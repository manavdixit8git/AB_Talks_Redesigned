import { Headphones, Quote, ShieldCheck, Star } from "lucide-react";

export default function TrustSection() {
  return (
    <section id="stories" className="overflow-hidden bg-slate-950 px-5 py-20 text-white lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="section-kicker !text-blue-400">Support that shows up</p>
          <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl">Hard challenge.<br />Human support.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            You should struggle with the work—not with being ignored. Open a Helpdesk ticket, share your context, and get a practical next step from a mentor.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Headphones className="size-6 text-orange-400" />
              <p className="mt-4 font-black">Mentor Helpdesk</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">Track every question and response in one calm place.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <ShieldCheck className="size-6 text-emerald-400" />
              <p className="mt-4 font-black">Progress protection</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">Missed a day? Recover the streak without losing the journey.</p>
            </div>
          </div>
        </div>

        <figure className="relative rounded-[32px] bg-blue-600 p-8 shadow-2xl shadow-blue-950/40 sm:p-10">
          <Quote className="absolute right-7 top-7 size-16 text-white/15" />
          <div className="flex gap-1 text-orange-300">
            {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-current" />)}
          </div>
          <blockquote className="relative mt-8 text-2xl font-black leading-9 tracking-[-0.03em] sm:text-3xl">
            “I had restarted JavaScript four times. This was the first program that made me finish projects instead of collecting tutorials.”
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-4 border-t border-white/20 pt-6">
            <span className="grid size-12 place-items-center rounded-full bg-orange-300 font-black text-slate-950">SA</span>
            <div>
              <p className="font-black">Sarah Ahmed</p>
              <p className="text-sm font-medium text-blue-100">Cohort 04 · Now a junior developer</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
