import Link from "next/link";
import { Check, ChevronRight, Flag } from "lucide-react";
import { cn } from "@/utils/cn";

export default function ProgressTracker({ user }) {
  const completion = Math.round((user.progress / 60) * 100);
  const milestones = [1, 7, 15, 30, 45, 60];

  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.13em] text-slate-400">Your journey</p>
          <h2 className="mt-1 text-xl font-black tracking-[-0.03em] text-slate-950">60-day progress</h2>
        </div>
        <p className="text-3xl font-black tracking-[-0.05em] text-blue-600">{completion}%</p>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-500 transition-all duration-700" style={{ width: `${completion}%` }} />
      </div>
      <div className="mt-8 grid grid-cols-6 gap-2">
        {milestones.map((day) => {
          const complete = day <= user.progress;
          const current = day === user.currentDay || (day > user.progress && milestones.find((item) => item > user.progress) === day);
          return (
            <div key={day} className="text-center">
              <div className={cn(
                "mx-auto grid size-8 place-items-center rounded-full border text-xs font-black",
                complete && "border-blue-600 bg-blue-600 text-white",
                current && !complete && "border-orange-400 bg-orange-100 text-orange-700",
                !complete && !current && "border-slate-200 bg-slate-50 text-slate-400"
              )}>
                {complete ? <Check className="size-4" /> : day === 60 ? <Flag className="size-3.5" /> : day}
              </div>
              <p className="mt-2 hidden text-[10px] font-bold text-slate-400 sm:block">Day {day}</p>
            </div>
          );
        })}
      </div>
      <Link href={`/day/${Math.max(1, user.currentDay - 1)}`} className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-slate-600 transition hover:text-blue-600">
        Review your latest completed task <ChevronRight className="size-4" />
      </Link>
    </section>
  );
}
