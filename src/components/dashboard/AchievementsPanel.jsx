import { Award, CheckCircle2, LockKeyhole } from "lucide-react";

const achievements = [
  { emoji: "⚡", title: "First commit", detail: "Finished Day 1", unlocked: true },
  { emoji: "🔥", title: "On a roll", detail: "3-day streak", unlocked: true },
  { emoji: "🧭", title: "API explorer", detail: "Unlocks on Day 15", unlocked: false },
];

export default function AchievementsPanel() {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.13em] text-slate-400">Recognition</p>
          <h2 className="mt-1 text-xl font-black tracking-[-0.03em] text-slate-950">Achievements</h2>
        </div>
        <Award className="size-6 text-orange-500" />
      </div>
      <div className="mt-5 space-y-3">
        {achievements.map((achievement) => (
          <article key={achievement.title} className={`flex items-center gap-3 rounded-2xl border p-3.5 ${achievement.unlocked ? "border-slate-200 bg-slate-50" : "border-dashed border-slate-200 opacity-55"}`}>
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-xl shadow-sm">{achievement.emoji}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-black text-slate-900">{achievement.title}</p>
              <p className="text-xs font-medium text-slate-500">{achievement.detail}</p>
            </div>
            {achievement.unlocked ? <CheckCircle2 className="size-4 text-emerald-600" /> : <LockKeyhole className="size-4 text-slate-400" />}
          </article>
        ))}
      </div>
    </section>
  );
}
