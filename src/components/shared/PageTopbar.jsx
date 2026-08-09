import Link from "next/link";
import { ArrowLeft, LifeBuoy } from "lucide-react";

export default function PageTopbar({ backHref = "/dashboard", backLabel = "Dashboard", label = "Challenge workspace" }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link href={backHref} className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-slate-950">
          <ArrowLeft className="size-4" /> {backLabel}
        </Link>
        <span className="hidden text-xs font-bold uppercase tracking-[0.18em] text-slate-400 sm:block">{label}</span>
        <Link href="/helpdesk" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800">
          <LifeBuoy className="size-4" /> Get help
        </Link>
      </div>
    </header>
  );
}
