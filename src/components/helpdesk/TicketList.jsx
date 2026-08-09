import { CheckCircle2, Clock3, Inbox } from "lucide-react";

export default function TicketList({ tickets }) {
  return (
    <section>
      <div className="mb-5 flex items-end justify-between">
        <div>
          <p className="section-kicker">Conversation history</p>
          <h2 className="mt-1 text-2xl font-black tracking-[-0.035em] text-slate-950">Your tickets</h2>
        </div>
        <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-black text-slate-600">{tickets.length} total</span>
      </div>

      {tickets.length === 0 ? (
        <div className="rounded-[28px] border border-dashed border-slate-300 bg-white/60 p-10 text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-slate-100 text-slate-400"><Inbox className="size-6" /></span>
          <h3 className="mt-4 font-black text-slate-900">No tickets yet</h3>
          <p className="mx-auto mt-2 max-w-xs text-sm font-medium leading-6 text-slate-500">When you ask for help, the conversation and status will appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {tickets.map((ticket) => {
            const resolved = ticket.status === "resolved";
            return (
              <article key={ticket.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-black leading-6 text-slate-900">{ticket.subject}</h3>
                  <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] ${resolved ? "bg-emerald-100 text-emerald-700" : "bg-orange-100 text-orange-700"}`}>
                    {resolved ? <CheckCircle2 className="size-3" /> : <Clock3 className="size-3" />} {ticket.status}
                  </span>
                </div>
                <p className="mt-3 line-clamp-3 text-sm font-medium leading-6 text-slate-600">{ticket.message}</p>
                <p className="mt-4 border-t border-slate-100 pt-3 text-xs font-bold text-slate-400">
                  Ticket #{ticket.id} · {new Date(ticket.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </p>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
