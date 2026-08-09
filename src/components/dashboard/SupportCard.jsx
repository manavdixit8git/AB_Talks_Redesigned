import Link from "next/link";
import { ArrowUpRight, LifeBuoy } from "lucide-react";

export default function SupportCard() {
  return (
    <aside className="relative overflow-hidden rounded-[28px] bg-slate-950 p-6 text-white">
      <LifeBuoy className="absolute -right-5 -top-5 size-28 text-white/[0.05]" />
      <div className="relative">
        <span className="grid size-10 place-items-center rounded-xl bg-orange-300 text-slate-950"><LifeBuoy className="size-5" /></span>
        <h2 className="mt-6 text-xl font-black tracking-[-0.03em]">Bug blocking you?</h2>
        <p className="mt-2 text-sm font-medium leading-6 text-slate-400">Send the context, code, and error. A mentor will point you toward the next useful step.</p>
        <Link href="/helpdesk" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-300 transition hover:text-white">
          Open Helpdesk <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </aside>
  );
}
