import { Bell, CalendarDays } from "lucide-react";

export default function DashboardHeader({ user }) {
  const firstName = user.name.split(" ")[0];

  return (
    <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-blue-600">
          <CalendarDays className="size-4" /> Your learning workspace
        </p>
        <h1 className="text-3xl font-black tracking-[-0.045em] text-slate-950 sm:text-4xl">Good to see you, {firstName}.</h1>
        <p className="mt-2 font-medium text-slate-500">Small steps count. Let's make today's one meaningful.</p>
      </div>
      <button className="relative grid size-11 place-items-center self-start rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-400 hover:text-slate-950" aria-label="Notifications">
        <Bell className="size-5" />
        <span className="absolute right-2 top-2 size-2 rounded-full border-2 border-white bg-orange-500" />
      </button>
    </header>
  );
}
