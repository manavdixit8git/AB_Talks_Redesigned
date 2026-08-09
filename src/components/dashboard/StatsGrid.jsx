import { Award, Flame, Target, TrendingUp } from "lucide-react";

const iconStyles = {
  streak: { icon: Flame, className: "bg-orange-100 text-orange-600" },
  day: { icon: Target, className: "bg-blue-100 text-blue-700" },
  progress: { icon: TrendingUp, className: "bg-violet-100 text-violet-700" },
  rank: { icon: Award, className: "bg-emerald-100 text-emerald-700" },
};

function StatCard({ type, label, value, suffix, detail }) {
  const { icon: Icon, className } = iconStyles[type];

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5">
      <div className="flex items-center justify-between">
        <span className={`grid size-10 place-items-center rounded-2xl ${className}`}><Icon className="size-5" /></span>
        <span className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">{detail}</span>
      </div>
      <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{label}</p>
      <p className="mt-1 text-3xl font-black tracking-[-0.04em] text-slate-950">{value} <span className="text-sm font-bold text-slate-400">{suffix}</span></p>
    </article>
  );
}

export default function StatsGrid({ user }) {
  const completion = Math.round((user.progress / 60) * 100);
  const ranking = user.progress > 30 ? "Top 10%" : user.progress > 10 ? "Top 25%" : "Rising";

  return (
    <section className="grid grid-cols-2 gap-3 xl:grid-cols-4">
      <StatCard type="streak" label="Current streak" value={user.streak} suffix="days" detail="Personal best: 8" />
      <StatCard type="day" label="Current day" value={user.currentDay} suffix="of 60" detail="On schedule" />
      <StatCard type="progress" label="Completion" value={completion} suffix="%" detail={`${60 - user.progress} days left`} />
      <StatCard type="rank" label="Standing" value={ranking} suffix="" detail="Cohort 08" />
    </section>
  );
}
