import Link from "next/link";
import { LayoutDashboard, LifeBuoy, Target, LogOut, Flame } from "lucide-react";
import Brand from "./Brand";
import { cn } from "@/utils/cn";

export default function AppSidebar({ user, current = "dashboard" }) {
  const links = [
    { id: "dashboard", label: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { id: "challenge", label: "Today's challenge", href: `/day/${user.currentDay}`, icon: Target },
    { id: "helpdesk", label: "Helpdesk", href: "/helpdesk", icon: LifeBuoy },
  ];

  return (
    <aside className="flex w-full shrink-0 flex-col bg-slate-950 px-4 py-5 text-white md:sticky md:top-0 md:h-screen md:w-[270px] md:px-5 md:py-7">
      <div className="px-2"><Brand dark /></div>

      <nav className="mt-8 grid grid-cols-3 gap-2 md:mt-12 md:block md:space-y-2" aria-label="Student navigation">
        {links.map(({ id, label, href, icon: Icon }) => (
          <Link
            key={id}
            href={href}
            className={cn(
              "flex min-h-12 items-center justify-center gap-3 rounded-xl px-3 text-center text-xs font-bold transition md:justify-start md:px-4 md:text-left md:text-sm",
              current === id ? "bg-blue-600 text-white shadow-lg shadow-blue-950/30" : "text-slate-400 hover:bg-white/5 hover:text-white"
            )}
          >
            <Icon className="size-4 shrink-0" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-5 hidden md:block md:mt-auto">
        <div className="mb-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            <span>Daily streak</span>
            <Flame className="size-4 text-orange-400" />
          </div>
          <p className="text-2xl font-black">{user.streak} <span className="text-sm font-medium text-slate-500">days</span></p>
        </div>
        <div className="flex items-center gap-3 rounded-2xl p-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-blue-100 text-sm font-black text-blue-700">
            {user.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold">{user.name}</p>
            <p className="truncate text-xs text-slate-500">{user.email}</p>
          </div>
          <LogOut className="size-4 text-slate-600" />
        </div>
      </div>
    </aside>
  );
}
