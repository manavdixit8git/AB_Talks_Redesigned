import Link from "next/link";
import { ArrowUpRight, CircleHelp } from "lucide-react";
import Brand from "./Brand";
import { landingNavigation } from "@/data/navigation";

export default function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f7f2]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Brand />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {landingNavigation.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-semibold text-slate-600 transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/helpdesk" className="hidden items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-950 sm:flex">
            <CircleHelp className="size-4" /> Helpdesk
          </Link>
          <Link href="/api/start" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-600 sm:px-5">
            Start challenge <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
