import { redirect } from "next/navigation";
import AppSidebar from "@/components/shared/AppSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsGrid from "@/components/dashboard/StatsGrid";
import TodayChallenge from "@/components/dashboard/TodayChallenge";
import ProgressTracker from "@/components/dashboard/ProgressTracker";
import AchievementsPanel from "@/components/dashboard/AchievementsPanel";
import SupportCard from "@/components/dashboard/SupportCard";
import { challengeDays } from "@/data/challengeDays";
import { getCurrentUser } from "@/utils/auth";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/");

  const currentDay = challengeDays[user.currentDay - 1] || challengeDays[0];

  return (
    <div className="min-h-screen bg-[#f6f7f9] md:flex">
      <AppSidebar user={user} current="dashboard" />
      <main className="min-w-0 flex-1 px-4 py-7 sm:px-6 md:px-8 md:py-10 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <DashboardHeader user={user} />
          <div className="mt-8"><StatsGrid user={user} /></div>
          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_330px]">
            <div className="space-y-6">
              <TodayChallenge day={currentDay} />
              <ProgressTracker user={user} />
            </div>
            <div className="space-y-6">
              <AchievementsPanel />
              <SupportCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
