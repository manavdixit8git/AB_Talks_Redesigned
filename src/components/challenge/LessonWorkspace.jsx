import { BookOpen, Copy, PlayCircle, TerminalSquare } from "lucide-react";

export default function LessonWorkspace({ day }) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
      <div className="flex overflow-x-auto border-b border-slate-200 px-3">
        <button className="inline-flex shrink-0 items-center gap-2 border-b-2 border-blue-600 px-4 py-4 text-sm font-black text-blue-600">
          <BookOpen className="size-4" /> Guide
        </button>
        <button className="inline-flex shrink-0 items-center gap-2 px-4 py-4 text-sm font-bold text-slate-400 hover:text-slate-700">
          <PlayCircle className="size-4" /> Walkthrough
        </button>
        <button className="inline-flex shrink-0 items-center gap-2 px-4 py-4 text-sm font-bold text-slate-400 hover:text-slate-700">
          <TerminalSquare className="size-4" /> Sandbox
        </button>
      </div>
      <article className="p-6 sm:p-8">
        <p className="section-kicker">Part 01 · Understand</p>
        <h2 className="mt-3 text-2xl font-black tracking-[-0.035em] text-slate-950">Turn the idea into a system</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Before opening the editor, write down the input, the expected output, and the state that must change. For <strong>{day.shortTitle}</strong>, treat every requirement as one small behavior you can verify.
        </p>
        <ol className="mt-6 space-y-3 text-sm font-medium leading-6 text-slate-700">
          <li className="flex gap-3"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-blue-100 text-xs font-black text-blue-700">1</span> Define the smallest useful version and its data shape.</li>
          <li className="flex gap-3"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-blue-100 text-xs font-black text-blue-700">2</span> Build one complete path before adding extra features.</li>
          <li className="flex gap-3"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-blue-100 text-xs font-black text-blue-700">3</span> Test empty, successful, and failed states deliberately.</li>
        </ol>

        <div className="mt-8 overflow-hidden rounded-2xl bg-slate-950">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-rose-400" /><span className="size-2.5 rounded-full bg-amber-300" /><span className="size-2.5 rounded-full bg-emerald-400" /></div>
            <span className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">starting-point.js</span>
            <Copy className="size-4 text-slate-500" />
          </div>
          <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-300"><code>{`const project = {
  goal: "solve one real problem",
  version: 1,
  working: false,
};

function ship(value) {
  return { ...value, working: true };
}`}</code></pre>
        </div>

        <div className="mt-8 border-l-4 border-blue-600 pl-5">
          <h3 className="font-black text-slate-950">Definition of done</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Someone else can open your project, understand what it does, complete the main action, and recover from a simple mistake.</p>
        </div>
      </article>
    </section>
  );
}
