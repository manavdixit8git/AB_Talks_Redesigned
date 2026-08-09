import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-12 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Brand dark />
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              A practical 60-day learning experience for curious people who are ready to become consistent builders.
            </p>
          </div>
          <Link href="/api/start" className="inline-flex w-fit items-center gap-2 border-b border-blue-400 pb-1 text-sm font-bold text-blue-300 hover:text-white">
            Begin with Day 1 <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ABTalks. Learn deliberately.</p>
          <div className="flex gap-5">
            <Link href="/helpdesk" className="hover:text-white">Support</Link>
            <span>Built for ambitious students</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
