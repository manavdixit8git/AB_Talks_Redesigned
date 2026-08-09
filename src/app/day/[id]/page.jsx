import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { users } from "@/db/schema";
import PageTopbar from "@/components/shared/PageTopbar";
import ChallengeHeader from "@/components/challenge/ChallengeHeader";
import MissionCard from "@/components/challenge/MissionCard";
import LessonWorkspace from "@/components/challenge/LessonWorkspace";
import SubmissionPanel from "@/components/challenge/SubmissionPanel";
import { challengeDays } from "@/data/challengeDays";
import { getCurrentUser } from "@/utils/auth";

export default async function ChallengeDayPage({ params }) {
  const user = await getCurrentUser();
  if (!user) redirect("/");

  const { id } = await params;
  const dayId = Number(id);
  const day = challengeDays.find((item) => item.id === dayId);
  if (!day) redirect("/dashboard");

  const completed = dayId <= user.progress;
  const locked = dayId > user.currentDay;

  if (locked) {
    return (
      <div className="min-h-screen bg-[#f7f7f2]">
        <PageTopbar />
        <main className="mx-auto grid min-h-[calc(100vh-68px)] max-w-xl place-items-center px-5 py-16 text-center">
          <div>
            <span className="mx-auto grid size-20 place-items-center rounded-3xl bg-white text-3xl shadow-lg shadow-slate-900/10">🔒</span>
            <p className="section-kicker mt-7">Day {dayId}</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950">One step at a time.</h1>
            <p className="mt-4 font-medium leading-7 text-slate-600">Complete Day {user.currentDay} before opening this challenge. The sequence is designed to build your confidence without gaps.</p>
            <a href={`/day/${user.currentDay}`} className="mt-7 inline-flex min-h-12 items-center rounded-full bg-blue-600 px-6 text-sm font-black text-white hover:bg-blue-700">Continue Day {user.currentDay}</a>
          </div>
        </main>
      </div>
    );
  }

  async function completeDay() {
    "use server";
    const activeUser = await getCurrentUser();
    if (!activeUser) redirect("/");

    await db.update(users).set({
      progress: Math.max(activeUser.progress, dayId),
      currentDay: Math.min(60, Math.max(activeUser.currentDay, dayId + 1)),
      streak: activeUser.progress < dayId ? activeUser.streak + 1 : activeUser.streak,
    }).where(eq(users.id, activeUser.id));

    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#f6f7f9]">
      <PageTopbar />
      <ChallengeHeader day={day} completed={completed} />
      <main className="mx-auto grid max-w-6xl gap-7 px-5 py-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8 lg:py-10">
        <div className="space-y-7">
          <MissionCard day={day} />
          <LessonWorkspace day={day} />
        </div>
        <aside><SubmissionPanel day={day} completed={completed} completeAction={completeDay} /></aside>
      </main>
    </div>
  );
}
