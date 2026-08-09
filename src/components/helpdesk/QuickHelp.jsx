import { BookOpen, ChevronRight, CircleDotDashed, Keyboard } from "lucide-react";

const resources = [
  { icon: CircleDotDashed, title: "Debugging checklist", detail: "Six checks before opening a ticket" },
  { icon: Keyboard, title: "How to share code", detail: "Create a minimal reproducible example" },
  { icon: BookOpen, title: "Challenge FAQ", detail: "Streaks, submissions, and deadlines" },
];

export default function QuickHelp() {
  return (
    <section className="mt-8 rounded-[28px] bg-slate-950 p-6 text-white">
      <p className="text-xs font-black uppercase tracking-[0.13em] text-blue-300">Try this first</p>
      <h2 className="mt-2 text-xl font-black tracking-[-0.03em]">Quick answers</h2>
      <div className="mt-5 divide-y divide-white/10">
        {resources.map(({ icon: Icon, title, detail }) => (
          <button key={title} className="group flex w-full items-center gap-3 py-4 text-left">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-orange-300"><Icon className="size-4" /></span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-black">{title}</span>
              <span className="block truncate text-xs font-medium text-slate-500">{detail}</span>
            </span>
            <ChevronRight className="size-4 text-slate-600 transition group-hover:translate-x-1 group-hover:text-white" />
          </button>
        ))}
      </div>
    </section>
  );
}
