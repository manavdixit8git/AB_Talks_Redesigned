import { cookies } from "next/headers";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { users } from "@/db/schema";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const userId = Number(cookieStore.get("user_id")?.value);

  if (!Number.isInteger(userId) || userId <= 0) {
    return null;
  }

  const [user] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  return user || null;
}
