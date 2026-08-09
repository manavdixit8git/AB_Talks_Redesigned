import { ArrowUpRight, CheckCircle2, LockKeyhole } from "lucide-react";

const phases = [
  { weeks: "Weeks 01–02", number: "01", title: "Build the foundation", description: "JavaScript thinking, interface fundamentals, debugging, and your first useful mini-projects.", skills: ["Language fundamentals", "DOM & state", "API basics"], active: true },
  { weeks: "Weeks 03–05", number: "02", title: "Connect the pieces", description: "Move from isolated exercises to complete experiences that persist data and handle real users.", skills: ["React patterns", "Server logic", "Persistent data"] },
  { weeks: "Weeks 06–08", number: "03", title: "Ship with confidence", description: "Plan, build, polish, explain, and launch a capstone that proves what you can do.", skills: ["Product decisions", "Quality & polish", "Public launch"] },
];

export default function CurriculumPreview() {
  return (
    <section id="curriculum" className="bg-[#f0efe8] px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">The 60-day roadmap</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-5xl">From first line to final launch.</h2>
          </div>
          <p className="max-w-md text-sm font-medium leading-6 text-slate-600">Every phase raises the ambition without losing the clear, daily next step that keeps you moving.</p>
        </div>

        <div className="mt-14 space-y-4">
          {phases.map((phase) => (
            <article key={phase.number} className="group grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-slate-400 md:grid-cols-[130px_1fr_auto] md:items-center md:p-8">
              <div>
                <span className={`text-5xl font-black tracking-[-0.06em] ${phase.active ? "text-blue-600" : "text-slate-300"}`}>{phase.number}</span>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{phase.weeks}</p>
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-[-0.03em] text-slate-950">{phase.title}</h3>
                <p className="mt-2 max-w-2xl text-sm font-medium leading-6 text-slate-600">{phase.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {phase.skills.map((skill) => (
                    <span key={skill} className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                      <CheckCircle2 className="size-3.5 text-emerald-600" /> {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden size-11 place-items-center rounded-full border border-slate-200 text-slate-400 transition group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white md:grid">
                {phase.active ? <ArrowUpRight className="size-5" /> : <LockKeyhole className="size-4" />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
