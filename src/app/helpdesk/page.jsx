import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { helpdeskTickets } from "@/db/schema";
import AppSidebar from "@/components/shared/AppSidebar";
import TicketForm from "@/components/helpdesk/TicketForm";
import TicketList from "@/components/helpdesk/TicketList";
import QuickHelp from "@/components/helpdesk/QuickHelp";
import { getCurrentUser } from "@/utils/auth";

export default async function HelpdeskPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/");

  const tickets = await db.select().from(helpdeskTickets)
    .where(eq(helpdeskTickets.userId, user.id))
    .orderBy(desc(helpdeskTickets.createdAt));

  async function submitTicket(formData) {
    "use server";
    const activeUser = await getCurrentUser();
    if (!activeUser) redirect("/");

    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    if (!subject || message.length < 20) return;

    await db.insert(helpdeskTickets).values({
      userId: activeUser.id,
      subject: subject.slice(0, 120),
      message,
      status: "open",
    });
    revalidatePath("/helpdesk");
  }

  return (
    <div className="min-h-screen bg-[#f6f7f9] md:flex">
      <AppSidebar user={user} current="helpdesk" />
      <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 md:px-8 xl:px-12">
        <div className="mx-auto max-w-[1160px]">
          <header className="mb-9">
            <p className="section-kicker">Student Helpdesk</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl">Do not stay stuck.</h1>
            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-600">Show us what you tried and where it broke. A mentor will help you think through the next step—not just hand you the answer.</p>
          </header>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px]">
            <TicketForm submitAction={submitTicket} />
            <div>
              <TicketList tickets={tickets} />
              <QuickHelp />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
