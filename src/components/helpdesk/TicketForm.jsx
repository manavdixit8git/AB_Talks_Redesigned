import { ArrowRight, Bug, MessageSquareText } from "lucide-react";

export default function TicketForm({ submitAction }) {
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-4">
        <span className="grid size-11 place-items-center rounded-2xl bg-blue-100 text-blue-700"><MessageSquareText className="size-5" /></span>
        <div>
          <p className="section-kicker">Mentor support</p>
          <h2 className="mt-1 text-2xl font-black tracking-[-0.035em] text-slate-950">Open a ticket</h2>
        </div>
      </div>
      <form action={submitAction} className="mt-7 space-y-5">
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-black text-slate-700">What are you working on?</label>
          <input id="subject" name="subject" required maxLength={120} placeholder="Example: Day 12 API returns a 500 error" className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100" />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-black text-slate-700">What happened?</label>
          <textarea id="message" name="message" required minLength={20} rows={6} placeholder="Tell us what you expected, what happened instead, and what you have already tried..." className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3.5 text-sm font-medium leading-6 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100" />
        </div>
        <div className="flex gap-3 rounded-2xl bg-orange-50 p-4 text-xs font-medium leading-5 text-orange-950">
          <Bug className="mt-0.5 size-4 shrink-0 text-orange-600" /> Include the exact error and the smallest code example you can. It helps mentors answer much faster.
        </div>
        <button type="submit" className="group inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 text-sm font-black text-white transition hover:bg-blue-600">
          Send to a mentor <ArrowRight className="size-4 transition group-hover:translate-x-1" />
        </button>
      </form>
    </section>
  );
}
