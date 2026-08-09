import Link from "next/link";
import { Check, CheckCircle2, CircleHelp, Send, Trophy } from "lucide-react";

export default function SubmissionPanel({ day, completed, completeAction }) {
  return (
    <div className="space-y-5">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <p className="section-kicker">Ship checklist</p>
        <h2 className="mt-2 text-xl font-black tracking-[-0.03em] text-slate-950">Before you submit</h2>
        <ul className="mt-5 space-y-3">
          {day.requirements.map((requirement, index) => (
            <li key={requirement} className="flex items-start gap-3">
              <label className="group grid size-5 shrink-0 cursor-pointer place-items-center rounded-md border border-slate-300 bg-white has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600">
                <input type="checkbox" defaultChecked={completed} className="peer sr-only" />
                <Check className="size-3.5 text-transparent peer-checked:text-white" strokeWidth={3} />
              </label>
              <span className="text-sm font-medium leading-5 text-slate-600">{requirement}</span>
            </li>
          ))}
        </ul>

        {completed ? (
          <div className="mt-6 rounded-2xl bg-emerald-50 p-5 text-center text-emerald-800">
            <Trophy className="mx-auto size-8" />
            <p className="mt-2 font-black">Day {day.id} complete</p>
            <p className="mt-1 text-xs font-medium">Your progress and streak are up to date.</p>
          </div>
        ) : (
          <form action={completeAction} className="mt-6">
            <label className="text-xs font-black uppercase tracking-[0.1em] text-slate-500" htmlFor="project-url">Project link <span className="font-medium normal-case text-slate-400">(optional)</span></label>
            <input id="project-url" name="projectUrl" type="url" placeholder="https://github.com/you/project" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100" />
            <button className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-black text-white transition hover:bg-blue-700">
              <Send className="size-4" /> Submit Day {day.id}
            </button>
          </form>
        )}
      </section>

      <section className="rounded-[28px] bg-slate-950 p-6 text-white">
        <CircleHelp className="size-6 text-orange-300" />
        <h2 className="mt-4 text-lg font-black">Stuck for 20 minutes?</h2>
        <p className="mt-2 text-sm font-medium leading-6 text-slate-400">That is your signal to ask for a nudge—not to give up or copy the answer.</p>
        <Link href="/helpdesk" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-300 hover:text-white">
          Ask the Helpdesk <CheckCircle2 className="size-4" />
        </Link>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-[#f7f7f2] p-6">
        <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-400">You will be able to</p>
        <ul className="mt-4 space-y-3">
          {day.outcomes.map((outcome) => (
            <li key={outcome} className="flex gap-2 text-sm font-bold leading-5 text-slate-700"><CheckCircle2 className="size-4 shrink-0 text-emerald-600" /> {outcome}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
